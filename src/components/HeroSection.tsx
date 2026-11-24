import React from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { CanvasMode, ThemeMode } from '../types';
import { DitherFieldCanvas } from './DitherFieldCanvas';

interface HeroSectionProps {
  theme: ThemeMode;
  canvasMode: CanvasMode;
  onCanvasModeChange: (mode: CanvasMode) => void;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  canvasMode,
  onCanvasModeChange,
  copiedEmail,
  onCopyEmail,
}) => {
  return (
    <section
      id="intro"
      className="scroll-mt-20 pt-2 sm:pt-7 pb-14 sm:pb-28 lg:pb-32 px-4 sm:px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        {/* Stacked deck wrapper (Rhythm-inspired layered sheets) */}
        <div className="relative pb-5 sm:pb-6">
          {/* Layer 3 (furthest back) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-7 sm:inset-x-10 bottom-0 h-8 sm:h-10 rounded-b-[18px] sm:rounded-b-[20px] transition-colors duration-200"
            style={{
              backgroundColor: 'var(--sheet-stack-2)',
              border: '1px solid var(--hair)',
            }}
          />
          {/* Layer 2 (middle) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3.5 sm:inset-x-5 bottom-2 sm:bottom-2.5 h-8 sm:h-10 rounded-b-[20px] sm:rounded-b-[22px] transition-colors duration-200"
            style={{
              backgroundColor: 'var(--sheet-stack-1)',
              border: '1px solid var(--hair)',
            }}
          />

          {/* Primary elevated gallery sheet */}
          <div className="gallery-sheet relative z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Interactive Generative Canvas: top banner on mobile so art + bio fit above the fold; right half on desktop */}
              <div
                className="order-first lg:order-last lg:col-span-6 relative border-b lg:border-b-0 lg:border-l"
                style={{ borderColor: 'var(--hair)' }}
              >
                <DitherFieldCanvas
                  mode={canvasMode}
                  theme={theme}
                  onModeChange={onCanvasModeChange}
                />
              </div>

              {/* Left / Bottom Info Column */}
              <div className="order-last lg:order-first lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-7 sm:gap-10 lg:min-h-[560px]">
                {/* Header identity */}
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[12px] font-medium tracking-tight"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      ML Infrastructure · Google
                    </span>
                  </div>

                  <h1
                    className="font-display font-semibold mt-3 sm:mt-4 m-0"
                    style={{
                      fontSize: 'clamp(1.85rem, 3.6vw, 2.85rem)',
                      lineHeight: 1.06,
                      color: 'var(--ink)',
                    }}
                  >
                    {personalInfo.name}
                  </h1>

                  <p
                    className="mt-2.5 sm:mt-3 text-[15px] sm:text-[17px] leading-relaxed m-0 max-w-[38ch]"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    Software engineer working on rollouts and automated fleet
                    management for Google’s TPU &amp; GPU fleet
                    <span
                      className="caret-blink inline-block w-[1.5px] h-[1em] ml-0.5 align-[-0.14em]"
                      style={{ backgroundColor: 'var(--ink)' }}
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Rhythm-style inline metadata ledger (compact single-row alignment even on 390px mobile) */}
                <dl className="m-0 space-y-2 sm:space-y-2.5 text-[13px] sm:text-[13.5px]">
                  <MetaRow label="Based in">
                    <span>{personalInfo.location}</span>
                  </MetaRow>
                  <MetaRow label="Currently at">
                    <a
                      href="#work"
                      className="vermilion-link inline-flex items-center gap-0.5 font-medium"
                      style={{ textDecoration: 'none' }}
                    >
                      <span>Google</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <span style={{ color: 'var(--ink-muted)' }} className="ml-1.5">
                      Python &amp; Go
                    </span>
                  </MetaRow>
                  <MetaRow label="Previously">
                    <span>Capital One, Raymond James, DeepMotion</span>
                  </MetaRow>
                  <MetaRow label="Studied">
                    <span>CS &amp; Math, UF</span>
                    <span style={{ color: 'var(--ink-muted)' }} className="ml-1.5">
                      (2026)
                    </span>
                  </MetaRow>
                  <MetaRow label="Honors">
                    <span>{personalInfo.honors}</span>
                  </MetaRow>
                  <MetaRow label="Published">
                    <a
                      href={personalInfo.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="vermilion-link inline-flex items-center gap-0.5 font-medium"
                      style={{ textDecoration: 'none' }}
                    >
                      <span>Applied Sciences (2021)</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </MetaRow>
                  <MetaRow label="Also">
                    <span>Olivia Rodrigo superfan</span>
                  </MetaRow>
                </dl>

                {/* Bottom social circle buttons + copy email */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        className="w-11 h-11 sm:w-10 sm:h-10 rounded-full inline-flex items-center justify-center transition-colors duration-150"
                        style={{
                          border: '1px solid var(--hair-strong)',
                          color: 'var(--ink-secondary)',
                          backgroundColor: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--ink)';
                          e.currentTarget.style.backgroundColor = 'var(--sheet-muted)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--ink-secondary)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}

                  <button
                    type="button"
                    onClick={onCopyEmail}
                    className="pill-ghost h-11 sm:h-10 px-4 text-[13px]"
                    aria-label="Copy email address"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetaRow: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[116px_minmax(0,1fr)] items-baseline gap-2.5 sm:gap-3">
    <dt
      className="text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.06em] shrink-0"
      style={{ color: 'var(--ink-muted)' }}
    >
      {label}
    </dt>
    <dd className="m-0 font-normal leading-snug" style={{ color: 'var(--ink)' }}>
      {children}
    </dd>
  </div>
);
