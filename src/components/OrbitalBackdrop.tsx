import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface OrbitalBackdropProps {
  theme: ThemeMode;
}

/**
 * Subtle Antigravity-inspired peripheral dash halo for the Contact section.
 * Keeps the central copy completely unobstructed while drifting quietly around the edges.
 */
export const OrbitalBackdrop: React.FC<OrbitalBackdropProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef<ThemeMode>(theme);
  themeRef.current = theme;

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

    // Deterministic peripheral particles (leaving center clear for typography)
    const dots = Array.from({ length: 120 }, (_, i) => {
      const angle = (i / 120) * Math.PI * 2 + (i % 5) * 0.08;
      const ring = 0.62 + ((i * 29) % 38) / 100;
      const speed = (i % 2 === 0 ? 1 : -1) * (0.025 + ((i * 7) % 10) * 0.004);
      return { angle, ring, speed, len: 3.5 + (i % 3) * 1.4 };
    });

    const start = performance.now();

    const draw = (now: number) => {
      const t = reducedMotion ? 0 : (now - start) / 1000;
      const isDark = themeRef.current === 'dark';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const rx = width * 0.48;
      const ry = height * 0.52;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const a = d.angle + t * d.speed;
        const x = cx + Math.cos(a) * rx * d.ring;
        const y = cy + Math.sin(a) * ry * d.ring;
        const tangent = a + Math.PI * 0.5;

        const isWarm = i % 7 === 0;
        ctx.strokeStyle = isWarm
          ? isDark
            ? 'rgba(239, 90, 55, 0.42)'
            : 'rgba(217, 61, 26, 0.34)'
          : isDark
            ? 'rgba(245, 244, 239, 0.16)'
            : 'rgba(20, 20, 19, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - Math.cos(tangent) * d.len, y - Math.sin(tangent) * d.len);
        ctx.lineTo(x + Math.cos(tangent) * d.len, y + Math.sin(tangent) * d.len);
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
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
