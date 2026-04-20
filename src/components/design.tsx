import React, { useEffect, useRef, useState } from 'react';

export const C = {
  paper:    '#EFEAE2',
  ink:      '#1B1916',
  rust:     '#A8411D',
  stone:    '#6E675E',
  hair:     'rgba(27, 25, 22, 0.22)',
  hairSoft: 'rgba(27, 25, 22, 0.10)',
};

export function useReveal(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', style = {} }) => {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Rule: React.FC<{ soft?: boolean; style?: React.CSSProperties }> = ({ soft = false, style = {} }) => (
  <div style={{ height: 1, background: soft ? C.hairSoft : C.hair, width: '100%', ...style }} />
);

export const Mono: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style = {} }) => (
  <span
    className={className}
    style={{
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      fontSize: 11,
      color: C.stone,
      ...style,
    }}
  >{children}</span>
);

export const SectionHeader: React.FC<{ numeral: string; title: string; rightLines: string[] }> = ({ numeral, title, rightLines }) => (
  <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-end mb-12 md:mb-20">
    <Reveal className="col-span-12 md:col-span-2">
      <div style={{
        fontFamily: "'Fraunces', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(2rem, 3.6vw, 3rem)',
        lineHeight: 1,
        color: C.stone,
        fontVariationSettings: '"opsz" 144, "wght" 300',
      }}>{numeral}</div>
    </Reveal>
    <Reveal className="col-span-12 md:col-span-6" delay={80}>
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(3.5rem, 9vw, 7rem)',
        lineHeight: 0.92,
        letterSpacing: '-0.02em',
        color: C.ink,
        fontVariationSettings: '"opsz" 144, "wght" 420',
        margin: 0,
      }}>{title}</h2>
    </Reveal>
    <Reveal className="col-span-12 md:col-span-4 md:text-right" delay={160}>
      <div style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: 16,
        lineHeight: 1.5,
        color: C.ink,
      }}>
        {rightLines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </Reveal>
  </div>
);
