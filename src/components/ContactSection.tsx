import React from 'react';
import { personalInfo } from '../data/portfolio';
import { C, Reveal, SectionHeader } from './design';

export const ContactSection: React.FC = () => (
  <section id="contact" className="px-6 sm:px-10 md:px-14 pt-12 pb-20 md:pb-32">
    <SectionHeader
      numeral="V."
      title="Contact."
      rightLines={[
        'Open to first full-time roles,',
        'Summer 2026 onward.',
        'Happy to talk about anything shipped.',
      ]}
    />

    <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
      <Reveal className="col-span-12 md:col-span-10 md:col-start-2" delay={60}>
        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            display: 'inline-block',
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 7vw, 5.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: C.ink,
            fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 360',
            textDecoration: 'underline',
            textUnderlineOffset: '0.12em',
            textDecorationThickness: '1px',
            wordBreak: 'break-word',
            transition: 'color 180ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C.rust; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.ink; }}
        >{personalInfo.email}</a>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href="https://github.com/Dzeddy"
            target="_blank"
            rel="noreferrer"
            className="u-link"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: C.ink }}
          >GitHub · Dzeddy</a>
          <a
            href="https://www.linkedin.com/in/dylan-zhuang/"
            target="_blank"
            rel="noreferrer"
            className="u-link"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: C.ink }}
          >LinkedIn · dylan-zhuang</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="u-link"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: C.ink }}
          >Résumé (PDF)</a>
        </div>
      </Reveal>
    </div>
  </section>
);
