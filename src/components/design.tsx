import React, { useEffect, useRef, useState } from 'react';

export function useReveal(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
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

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  style = {},
}) => {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 580ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 580ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  meta?: string;
}> = ({ title, subtitle, meta }) => (
  <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
    <div>
      <h2
        className="font-display font-medium m-0"
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          lineHeight: 1.06,
          color: 'var(--ink)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-2.5 text-[15px] m-0 max-w-[60ch]"
          style={{ color: 'var(--ink-secondary)', lineHeight: 1.55 }}
        >
          {subtitle}
        </p>
      )}
    </div>
    {meta && (
      <span
        className="font-mono-meta text-[12px] shrink-0"
        style={{ color: 'var(--ink-muted)' }}
      >
        {meta}
      </span>
    )}
  </Reveal>
);
