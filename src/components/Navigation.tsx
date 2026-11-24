import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Command, Copy, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import { personalInfo, sectionNav } from '../data/portfolio';
import { CanvasMode, ThemeMode } from '../types';
import { useScrolled } from '../hooks/useScrolled';

interface NavigationProps {
  activeSection: string;
  theme: ThemeMode;
  canvasMode: CanvasMode;
  copiedEmail: boolean;
  onToggleTheme: () => void;
  onToggleCanvasMode: () => void;
  onCopyEmail: () => void;
  onJumpSection: (id: string) => void;
  onOpenCommand: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  theme,
  canvasMode,
  copiedEmail,
  onToggleTheme,
  onToggleCanvasMode,
  onCopyEmail,
  onJumpSection,
  onOpenCommand,
}) => {
  const scrolled = useScrolled(16);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on Escape or resize to desktop
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [mobileOpen]);

  const handleMobileJump = (id: string) => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => {
      onJumpSection(id);
    });
  };

  return (
    <header
      className="sticky top-0 z-40 w-full transition-colors duration-200"
      style={{
        backgroundColor: scrolled || mobileOpen ? 'var(--header-bg)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
        borderBottom:
          scrolled || mobileOpen ? '1px solid var(--hair)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
        {/* Monogram wordmark */}
        <a
          href="#intro"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight py-2"
          style={{ color: 'var(--ink)', textDecoration: 'none' }}
          aria-label="Dylan Zhuang home"
        >
          <span>D–Z</span>
          <span
            className="hidden sm:inline text-[13px] font-normal"
            style={{ color: 'var(--ink-muted)' }}
          >
            / {personalInfo.location}
          </span>
        </a>

        {/* Desktop minimal text nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {sectionNav
            .filter((item) => item.id !== 'intro')
            .map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[14px] font-medium transition-colors duration-150"
                  style={{
                    color: isActive ? 'var(--ink)' : 'var(--ink-secondary)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
        </nav>

        {/* Right utility controls */}
        <div className="flex items-center gap-2">
          {/* Desktop Command K trigger */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors duration-150"
            style={{
              backgroundColor: 'var(--sheet-muted)',
              color: 'var(--ink-secondary)',
            }}
            aria-label="Open command menu"
          >
            <Command size={12} />
            <span className="font-mono-meta">K</span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 md:w-8 md:h-8 rounded-full inline-flex items-center justify-center transition-colors duration-150"
            style={{
              backgroundColor: 'var(--sheet-muted)',
              color: 'var(--ink-secondary)',
            }}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Résumé CTA: soft pill on mobile (Anthropic/Antigravity mobile pattern), pitch-black pill on desktop */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex pill-cta px-4 py-1.5 text-[13px]"
            style={{ textDecoration: 'none' }}
          >
            <span>Résumé</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="md:hidden pill-ghost h-9 px-3.5 text-[13px]"
            style={{ textDecoration: 'none' }}
          >
            <span>Résumé</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Antigravity-inspired solid circular mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-full inline-flex items-center justify-center transition-transform duration-150 active:scale-95"
            style={{
              backgroundColor: 'var(--cta-bg)',
              color: 'var(--cta-fg)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down navigation sheet */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{ borderTop: '1px solid var(--hair)' }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {sectionNav.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleMobileJump(item.id)}
                  className="w-full flex items-center justify-between py-3.5 px-2 text-left"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom:
                      idx === sectionNav.length - 1 ? 'none' : '1px solid var(--hair)',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="font-display text-[19px] font-medium tracking-tight flex items-center gap-2.5"
                    style={{ color: isActive ? 'var(--ink)' : 'var(--ink-secondary)' }}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.label}</span>
                  </span>
                  <span
                    className="font-mono-meta text-[11.5px]"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Mobile quick actions */}
          <div
            className="mt-4 pt-4 flex flex-wrap items-center gap-2"
            style={{ borderTop: '1px solid var(--hair)' }}
          >
            <button
              type="button"
              onClick={() => {
                onCopyEmail();
                setMobileOpen(false);
              }}
              className="pill-ghost h-10 px-4 text-[13px] flex-1"
            >
              {copiedEmail ? (
                <>
                  <Check size={14} style={{ color: 'var(--accent)' }} />
                  <span>Copied email</span>
                </>
              ) : (
                <>
                  <Copy size={13} style={{ color: 'var(--ink-muted)' }} />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onToggleCanvasMode();
                setMobileOpen(false);
                onJumpSection('intro');
              }}
              className="pill-ghost h-10 px-4 text-[13px] flex-1"
            >
              <Sparkles size={13} style={{ color: 'var(--accent)' }} />
              <span>{canvasMode === 'field' ? 'Orbit art' : 'Field art'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
