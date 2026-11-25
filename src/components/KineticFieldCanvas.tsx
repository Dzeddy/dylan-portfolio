import React, { useEffect, useRef } from 'react';

interface Dash {
  angle: number;
  ring: number;
  speed: number;
  len: number;
  phase: number;
}

function buildDashes(): Dash[] {
  const list: Dash[] = [];
  const rings = 8;
  for (let r = 0; r < rings; r++) {
    const count = 26 + r * 11;
    const ring = 0.52 + (r / (rings - 1)) * 0.52;
    const dir = r % 2 === 0 ? 1 : -1;
    for (let i = 0; i < count; i++) {
      list.push({
        angle: (i / count) * Math.PI * 2 + r * 0.25,
        ring,
        speed: dir * (0.016 + ((i * 5) % 7) * 0.002),
        len: 3.2 + ((i + r) % 3) * 1.1,
        phase: (i * 0.5 + r) % (Math.PI * 2),
      });
    }
  }
  return list;
}

/**
 * Antigravity chromatic outer-arc dash halo on pure white.
 * Gently orbits around the hero while keeping a clean central negative-space mask.
 */
export const KineticFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dashesRef = useRef<Dash[]>(buildDashes());
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false, sx: 0.5, sy: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) {
        pointerRef.current.active = false;
        return;
      }
      pointerRef.current.x = (e.clientX - rect.left) / Math.max(1, rect.width);
      pointerRef.current.y = (e.clientY - rect.top) / Math.max(1, rect.height);
      pointerRef.current.active = true;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    const start = performance.now();

    const draw = (now: number) => {
      const t = reducedMotion ? 0 : (now - start) / 1000;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.52;
      const isNarrow = width < 640;
      const rx = isNarrow ? width * 0.62 : width * 0.49;
      const ry = isNarrow ? height * 0.52 : height * 0.56;

      const ptr = pointerRef.current;
      ptr.sx += (ptr.x - ptr.sx) * 0.06;
      ptr.sy += (ptr.y - ptr.sy) * 0.06;
      const mx = ptr.sx * width;
      const my = ptr.sy * height;

      const dashes = dashesRef.current;
      for (let i = 0; i < dashes.length; i++) {
        const d = dashes[i];
        const a = d.angle + t * d.speed;
        const breathe = 1 + Math.sin(t * 0.65 + d.phase) * 0.018;
        let x = cx + Math.cos(a) * rx * d.ring * breathe;
        let y = cy + Math.sin(a) * ry * d.ring * breathe;

        // Clean central mask keeping headline, subhead, and pills completely clear
        const maskRx = isNarrow ? width * 0.48 : width * 0.36;
        const maskRy = isNarrow ? height * 0.44 : height * 0.42;
        const distNorm = Math.hypot((x - cx) / maskRx, (y - cy) / maskRy);
        const mask = Math.max(0, Math.min(1, (distNorm - 0.8) / 0.25));
        if (mask <= 0.02) continue;

        let heading = a + Math.PI * 0.5;
        let boost = 0;

        if (ptr.active && !isNarrow) {
          const dx = mx - x;
          const dy = my - y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            boost = Math.pow(1 - dist / 160, 1.7);
            heading = Math.atan2(dy, dx) + Math.PI * 0.35;
            x -= (dx / Math.max(1, dist)) * boost * 9;
            y -= (dy / Math.max(1, dist)) * boost * 9;
          }
        }

        const side = Math.cos(a);
        let col: string;
        if (side < -0.1) {
          const alpha = (0.72 + boost * 0.22) * mask;
          col = `rgba(188, 62, 108, ${alpha.toFixed(2)})`;
        } else if (side > 0.1) {
          const alpha = (0.78 + boost * 0.18) * mask;
          col = `rgba(37, 99, 235, ${alpha.toFixed(2)})`;
        } else {
          const alpha = (0.45 + boost * 0.25) * mask;
          col = `rgba(100, 116, 139, ${alpha.toFixed(2)})`;
        }

        const half = d.len * (1 + boost * 0.3);
        const cosH = Math.cos(heading);
        const sinH = Math.sin(heading);

        ctx.strokeStyle = col;
        ctx.lineWidth = 2 + boost * 0.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - cosH * half, y - sinH * half);
        ctx.lineTo(x + cosH * half, y + sinH * half);
        ctx.stroke();
      }

      if (!reducedMotion) {
        rafId = requestAnimationFrame(draw);
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
