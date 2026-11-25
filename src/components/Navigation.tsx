import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';

export const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const jump = (id: string) => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <header
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md"
      style={{ borderBottom: '1px solid #F0F1F3' }}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-9 h-[72px] flex items-center justify-between gap-4">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={() => setMobileOpen(false)}
          className="text-[16px] font-semibold tracking-[-0.02em]"
          style={{ color: '#0F0F10', textDecoration: 'none' }}
        >
          {personalInfo.name}
        </a>

        {/* Center text links (desktop) */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[14.5px] font-medium transition-colors duration-150 hover:text-[#0F0F10]"
              style={{ color: '#52565E', textDecoration: 'none' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right pills */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex pill-light px-4 py-2 text-[14px]"
            style={{ textDecoration: 'none' }}
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex pill-black px-5 py-2 text-[14px]"
            style={{ textDecoration: 'none' }}
          >
            <span>Résumé</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile compact controls (Antigravity mobile pattern) */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="md:hidden pill-light px-3.5 h-9 text-[13.5px]"
            style={{ textDecoration: 'none' }}
          >
            <span>Résumé</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden pill-black w-9 h-9 p-0"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down drawer */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white px-5 pb-7 pt-2"
          style={{ borderTop: '1px solid #F0F1F3' }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jump(item.id)}
                className="w-full text-left py-4 text-[21px] font-medium tracking-[-0.025em]"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #F0F1F3',
                  color: '#0F0F10',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="pill-black py-3 text-[14px]"
              style={{ textDecoration: 'none' }}
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={14} />
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-light py-2.5 text-[14px]"
                style={{ textDecoration: 'none' }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-light py-2.5 text-[14px]"
                style={{ textDecoration: 'none' }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
