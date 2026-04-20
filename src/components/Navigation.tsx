import React, { useEffect, useState } from 'react';
import { C, Mono } from './design';

const NAV_ITEMS: [string, string, string][] = [
  ['I.', 'top', 'Opening'],
  ['II.', 'work', 'Work'],
  ['III.', 'selected', 'Selected'],
  ['IV.', 'apparatus', 'Skills'],
  ['V.', 'contact', 'Contact'],
];

export const Navigation: React.FC = () => {
  const [y, setY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className="w-full sticky top-0 z-40"
      style={{
        background: C.paper,
        borderBottom: `1px solid ${y > 4 ? C.hair : 'transparent'}`,
        transition: 'border-color 200ms',
      }}
    >
      <div className="px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between gap-6">
        <Mono style={{ color: C.ink }}>Dylan&nbsp;Zhuang — Portfolio</Mono>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(([num, id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-baseline gap-2"
              style={{ textDecoration: 'none' }}
            >
              <Mono style={{ color: C.stone }}>{num}</Mono>
              <Mono style={{ color: C.ink }}>{label}</Mono>
            </a>
          ))}
        </nav>

        <Mono style={{ color: C.ink }} className="hidden md:inline">Gainesville, FL</Mono>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Mono style={{ color: C.ink }}>{menuOpen ? 'Close' : 'Menu'}</Mono>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{ borderTop: `1px solid ${C.hair}` }}
        >
          {NAV_ITEMS.map(([num, id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-3 py-4"
              style={{ textDecoration: 'none', borderBottom: `1px solid ${C.hairSoft}` }}
            >
              <Mono style={{ color: C.stone }}>{num}</Mono>
              <Mono style={{ color: C.ink, fontSize: 13 }}>{label}</Mono>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
