import React from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { ThemeMode } from '../types';
import { Reveal } from './design';
import { OrbitalBackdrop } from './OrbitalBackdrop';

interface ContactSectionProps {
  theme: ThemeMode;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme,
  copiedEmail,
  onCopyEmail,
}) => (
  <section id="contact" className="scroll-mt-20 py-10 sm:py-20 px-4 sm:px-8">
    <div className="max-w-[1180px] mx-auto">
      <Reveal>
        <div className="gallery-sheet relative overflow-hidden px-5 sm:px-12 py-14 sm:py-28 text-center">
          <OrbitalBackdrop theme={theme} />

          <div className="relative z-10 max-w-[540px] mx-auto">
            <h2
              className="font-display font-semibold m-0"
              style={{
                fontSize: 'clamp(2.15rem, 5.4vw, 4rem)',
                lineHeight: 1.04,
                color: 'var(--ink)',
              }}
            >
              Say hello.
            </h2>

            <p
              className="mt-3.5 sm:mt-4 mb-0 text-[15px] sm:text-[17px] leading-relaxed"
              style={{ color: 'var(--ink-secondary)' }}
            >
              Always happy to talk ML infrastructure, distributed systems, or
              anything shipped.
            </p>

            {/* Antigravity-style CTAs: full-width thumb-friendly pills on mobile, dual inline pills on desktop */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="pill-cta px-5 sm:px-6 py-3.5 sm:py-3 text-[13.5px] sm:text-[14px]"
                style={{ textDecoration: 'none' }}
              >
                <span className="truncate">{personalInfo.email}</span>
                <ArrowUpRight size={15} className="shrink-0" />
              </a>

              <button
                type="button"
                onClick={onCopyEmail}
                className="pill-ghost px-5 py-3.5 sm:py-3 text-[13.5px] sm:text-[14px]"
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} style={{ color: 'var(--accent)' }} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} style={{ color: 'var(--ink-muted)' }} />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quiet external links */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px]">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="vermilion-link inline-flex items-center gap-0.5 font-medium py-1"
                style={{ textDecoration: 'none' }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="vermilion-link inline-flex items-center gap-0.5 font-medium py-1"
                style={{ textDecoration: 'none' }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                className="vermilion-link inline-flex items-center gap-0.5 font-medium py-1"
                style={{ textDecoration: 'none' }}
              >
                <span>Résumé (PDF)</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
