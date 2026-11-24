import React, { useEffect, useRef } from 'react';
import { CanvasMode, ThemeMode } from '../types';

interface DitherFieldCanvasProps {
  mode: CanvasMode;
  theme: ThemeMode;
  onModeChange: (mode: CanvasMode) => void;
}

// 8x8 Bayer ordered dithering matrix (normalized 0..1)
const BAYER_8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
].map((row) => row.map((v) => (v + 0.5) / 64));

interface Ripple {
  x: number;
  y: number;
  born: number;
}

interface OrbitParticle {
  ring: number;
  angle: number;
  speed: number;
  size: number;
  phase: number;
  jitter: number;
}

function createOrbitParticles(): OrbitParticle[] {
  const particles: OrbitParticle[] = [];
  const rings = 9;
  for (let r = 0; r < rings; r++) {
    const count = 14 + r * 7;
    const radiusFrac = 0.14 + (r / (rings - 1)) * 0.78;
    const baseSpeed = (r % 2 === 0 ? 1 : -1) * (0.08 + (1 - radiusFrac) * 0.16);
    for (let i = 0; i < count; i++) {
      const jitter = Math.sin(r * 13.7 + i * 7.3) * 0.035;
      particles.push({
        ring: radiusFrac + jitter,
        angle: (i / count) * Math.PI * 2 + r * 0.37,
        speed: baseSpeed * (0.82 + ((i * 19) % 10) * 0.04),
        size: 3.5 + ((i + r) % 4) * 1.4,
        phase: (i * 0.7 + r * 1.3) % (Math.PI * 2),
        jitter,
      });
    }
  }
  return particles;
}

export const DitherFieldCanvas: React.FC<DitherFieldCanvasProps> = ({
  mode,
  theme,
  onModeChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean; sx: number; sy: number }>({
    x: 0.52,
    y: 0.48,
    active: false,
    sx: 0.52,
    sy: 0.48,
  });
  const ripplesRef = useRef<Ripple[]>([]);
  const particlesRef = useRef<OrbitParticle[]>(createOrbitParticles());
  const modeRef = useRef<CanvasMode>(mode);
  const themeRef = useRef<ThemeMode>(theme);

  modeRef.current = mode;
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Offscreen pixel buffer for crisp ordered dithering
    const offscreen = document.createElement('canvas');
    const offCtx = offscreen.getContext('2d');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      const cell = 3; // 3px physical-feel halftone dots
      offscreen.width = Math.max(1, Math.ceil(width / cell));
      offscreen.height = Math.max(1, Math.ceil(height / cell));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const startTime = performance.now();

    const renderDitherField = (t: number, nowMs: number) => {
      if (!offCtx) return;
      const gw = offscreen.width;
      const gh = offscreen.height;
      const img = offCtx.createImageData(gw, gh);
      const data = img.data;

      const isDark = themeRef.current === 'dark';
      // Background RGB: pure white in light, sheet obsidian in dark
      const bgR = isDark ? 21 : 255;
      const bgG = isDark ? 21 : 255;
      const bgB = isDark ? 20 : 255;
      // Electric Vermilion ink RGB
      const fgR = isDark ? 239 : 220;
      const fgG = isDark ? 90 : 54;
      const fgB = isDark ? 55 : 22;

      const ptr = pointerRef.current;
      // Smoothly ease pointer
      ptr.sx += (ptr.x - ptr.sx) * 0.08;
      ptr.sy += (ptr.y - ptr.sy) * 0.08;

      const ripples = ripplesRef.current;
      // Prune old ripples
      while (ripples.length > 0 && (nowMs - ripples[0].born) / 1000 > 3.2) {
        ripples.shift();
      }

      const aspect = gw / Math.max(1, gh);
      const time = t * 0.24;

      for (let py = 0; py < gh; py++) {
        const ny = py / gh;
        const bayerRow = BAYER_8[py & 7];
        for (let px = 0; px < gw; px++) {
          const nx = px / gw;

          // Domain-warped fluid harmonics inspired by organic ink plumes
          const x = (nx - 0.5) * aspect * 2.55;
          const y = (ny - 0.5) * 2.55;

          // Gentle warp layer 1
          const wx1 =
            Math.sin(y * 1.45 + time * 0.85) * 0.65 +
            Math.cos(x * 1.1 - y * 0.8 - time * 0.5) * 0.42;
          const wy1 =
            Math.cos(x * 1.35 - time * 0.72) * 0.65 +
            Math.sin(y * 1.15 + x * 0.75 + time * 0.58) * 0.42;

          // Pointer swirl displacement
          const dx = nx - ptr.sx;
          const dy = (ny - ptr.sy) / Math.max(0.5, aspect);
          const distSq = dx * dx + dy * dy;
          let ptrInfluence = 0;
          if (ptr.active && distSq < 0.22) {
            const falloff = Math.exp(-distSq * 14.5);
            ptrInfluence = falloff * 0.65;
          }

          // Click shockwave rings
          let rippleBoost = 0;
          for (let r = 0; r < ripples.length; r++) {
            const rp = ripples[r];
            const age = Math.max(0, (nowMs - rp.born) / 1000);
            const rdx = (nx - rp.x) * aspect;
            const rdy = ny - rp.y;
            const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
            const ringRadius = age * 0.52;
            const ringDelta = Math.abs(rDist - ringRadius);
            if (ringDelta < 0.12) {
              const decay = Math.max(0, 1 - age / 3.0);
              rippleBoost += Math.cos((ringDelta / 0.12) * Math.PI * 0.5) * decay * 0.62;
            }
          }

          // Warp layer 2 (creates swirling ribbon folds)
          const u = x + wx1 + (ptr.active ? -dy * ptrInfluence * 2.2 : 0);
          const v = y + wy1 + (ptr.active ? dx * ptrInfluence * 2.2 : 0);

          const f1 = Math.sin(u * 1.65 + Math.cos(v * 1.45 - time * 0.6));
          const f2 = Math.cos(v * 1.85 - Math.sin(u * 1.25 + time * 0.45));
          const f3 = Math.sin((u + v) * 0.95 - time * 0.35);

          // Combine & sculpt high-contrast sweeping negative space + vivid ribbons
          let field = (f1 * 0.46 + f2 * 0.36 + f3 * 0.18) * 0.5 + 0.5;

          // Subtle diagonal editorial composition bias
          const diag = Math.sin((nx * 1.15 - ny * 0.9) * Math.PI) * 0.14;
          field = field + diag + rippleBoost - ptrInfluence * 0.28;

          // S-curve contrast shaping so negative space stays clean & crisp
          const shaped = Math.max(0, Math.min(1, (field - 0.34) * 1.68));
          const intensity = shaped * shaped * (3 - 2 * shaped);

          const threshold = bayerRow[px & 7];
          const on = intensity > threshold;

          const idx = (py * gw + px) * 4;
          data[idx] = on ? fgR : bgR;
          data[idx + 1] = on ? fgG : bgG;
          data[idx + 2] = on ? fgB : bgB;
          data[idx + 3] = 255;
        }
      }

      offCtx.putImageData(img, 0, 0);
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(offscreen, 0, 0, width, height);
      ctx.restore();
    };

    const renderOrbitField = (t: number, nowMs: number) => {
      const isDark = themeRef.current === 'dark';
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = isDark ? '#151514' : '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const maxR = Math.min(width, height) * 0.56;

      const ptr = pointerRef.current;
      ptr.sx += (ptr.x - ptr.sx) * 0.1;
      ptr.sy += (ptr.y - ptr.sy) * 0.1;
      const mx = ptr.sx * width;
      const my = ptr.sy * height;

      const ripples = ripplesRef.current;
      while (ripples.length > 0 && (nowMs - ripples[0].born) / 1000 > 2.8) {
        ripples.shift();
      }

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const a = p.angle + t * p.speed;
        const breathe = 1 + Math.sin(t * 0.8 + p.phase) * 0.035;
        let px = cx + Math.cos(a) * p.ring * maxR * breathe;
        let py = cy + Math.sin(a) * p.ring * maxR * breathe;

        // Tangential base orientation
        let heading = a + Math.PI * 0.5;
        let warmth = 0;

        // Pointer gravitational alignment
        const dx = mx - px;
        const dy = my - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (ptr.active && dist < 175) {
          const strength = Math.pow(1 - dist / 175, 1.6);
          const toPtr = Math.atan2(dy, dx);
          heading = toPtr + Math.PI * 0.36 * (1 - strength * 0.45);
          px -= (dx / Math.max(1, dist)) * strength * 14;
          py -= (dy / Math.max(1, dist)) * strength * 14;
          warmth = Math.max(warmth, strength);
        }

        // Click ripples
        for (let r = 0; r < ripples.length; r++) {
          const rp = ripples[r];
          const age = Math.max(0, (nowMs - rp.born) / 1000);
          const rpx = rp.x * width;
          const rpy = rp.y * height;
          const rdx = px - rpx;
          const rdy = py - rpy;
          const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
          const waveR = age * Math.max(width, height) * 0.48;
          const delta = Math.abs(rDist - waveR);
          if (delta < 52) {
            const decay = Math.max(0, 1 - age / 2.6);
            const boost = (1 - delta / 52) * decay;
            px += (rdx / Math.max(1, rDist)) * boost * 16;
            py += (rdy / Math.max(1, rDist)) * boost * 16;
            warmth = Math.max(warmth, boost);
          }
        }

        // Color interpolation: crisp ink/slate -> electric vermilion near focal points
        const baseHighlight = Math.max(0, Math.sin(a * 2 - t * 0.5) * 0.5 + 0.5) * 0.65;
        const vMix = Math.min(1, warmth * 1.2 + (p.ring > 0.52 ? baseHighlight : 0.15));

        const rCol = Math.round(
          (isDark ? 120 : 112) + vMix * ((isDark ? 239 : 217) - (isDark ? 120 : 112))
        );
        const gCol = Math.round(
          (isDark ? 118 : 110) + vMix * ((isDark ? 90 : 61) - (isDark ? 118 : 110))
        );
        const bCol = Math.round(
          (isDark ? 112 : 106) + vMix * ((isDark ? 55 : 26) - (isDark ? 112 : 106))
        );
        const alpha = 0.42 + vMix * 0.54;

        const len = p.size * (1.1 + warmth * 0.9);
        const half = len * 0.5;
        const cosH = Math.cos(heading);
        const sinH = Math.sin(heading);

        ctx.strokeStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.9 + warmth * 0.7;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(px - cosH * half, py - sinH * half);
        ctx.lineTo(px + cosH * half, py + sinH * half);
        ctx.stroke();
      }

      // Subtle center anchor ring
      ctx.strokeStyle = isDark ? 'rgba(245,244,239,0.08)' : 'rgba(20,20,19,0.07)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 0.14, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    const frame = (now: number) => {
      const elapsed = reducedMotion ? 1.8 : (now - startTime) / 1000;
      if (modeRef.current === 'field') {
        renderDitherField(elapsed, now);
      } else {
        renderOrbitField(elapsed, now);
      }
      if (!reducedMotion) {
        rafId = requestAnimationFrame(frame);
      }
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [mode, theme]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerRef.current.x = (e.clientX - rect.left) / Math.max(1, rect.width);
    pointerRef.current.y = (e.clientY - rect.top) / Math.max(1, rect.height);
    pointerRef.current.active = true;
  };

  const handlePointerLeave = () => {
    pointerRef.current.active = false;
  };

  return (
    <div className="relative w-full h-[215px] sm:h-[290px] lg:h-full lg:min-h-[540px] overflow-hidden select-none group">
      <InteractiveCanvasInner
        canvasRef={canvasRef}
        ripplesRef={ripplesRef}
        pointerRef={pointerRef}
        mode={mode}
        theme={theme}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      />

      {/* Minimal floating mode switcher (Field / Orbit) */}
      <div
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1 p-1 rounded-full backdrop-blur-md transition-opacity duration-200"
        style={{
          backgroundColor: 'var(--dock-bg)',
          border: '1px solid var(--hair)',
          boxShadow: 'var(--dock-shadow)',
        }}
      >
        {(['field', 'orbit'] as CanvasMode[]).map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              type="button"
              onClick={() => onModeChange(m)}
              className="px-3 py-1.5 sm:py-1 rounded-full text-[11px] font-medium tracking-tight transition-colors duration-150"
              style={{
                backgroundColor: active ? 'var(--cta-bg)' : 'transparent',
                color: active ? 'var(--cta-fg)' : 'var(--ink-secondary)',
              }}
              aria-pressed={active}
            >
              {m === 'field' ? 'Field' : 'Orbit'}
            </button>
          );
        })}
      </div>

      {/* Whisper-quiet interaction cue on hover (desktop) */}
      <div
        className="hidden sm:block pointer-events-none absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2.5 py-1 rounded-full text-[11px] font-mono-meta backdrop-blur-sm"
        style={{
          backgroundColor: 'var(--dock-bg)',
          color: 'var(--ink-muted)',
          border: '1px solid var(--hair)',
        }}
      >
        move / click
      </div>
    </div>
  );
};

// Cleanly separated canvas wrapper so click timestamps always match performance.now()
interface InnerProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  ripplesRef: React.MutableRefObject<Ripple[]>;
  pointerRef: React.MutableRefObject<{ x: number; y: number; active: boolean; sx: number; sy: number }>;
  mode: CanvasMode;
  theme: ThemeMode;
  onPointerMove: (e: React.PointerEvent<HTMLCanvasElement>) => void;
  onPointerLeave: () => void;
}

const InteractiveCanvasInner: React.FC<InnerProps> = ({
  canvasRef,
  ripplesRef,
  onPointerMove,
  onPointerLeave,
}) => {
  return (
    <canvas
      ref={canvasRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        ripplesRef.current.push({
          x: (e.clientX - rect.left) / Math.max(1, rect.width),
          y: (e.clientY - rect.top) / Math.max(1, rect.height),
          born: performance.now(),
        });
      }}
      style={{ touchAction: 'pan-y' }}
      className="block w-full h-full cursor-crosshair"
      aria-label="Interactive generative artwork"
    />
  );
};
