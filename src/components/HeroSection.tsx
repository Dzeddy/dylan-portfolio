import React from 'react';
import { C, Reveal, Mono, Rule } from './design';

export const HeroSection: React.FC = () => (
  <section id="top" className="px-6 sm:px-10 md:px-14 pt-20 md:pt-28 pb-28 md:pb-36">
    <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-10">

      {/* Folio — left margin */}
      <Reveal className="col-span-12 md:col-span-3 md:pt-6" delay={40}>
        <Mono>№ 01 — Opening</Mono>
        <div className="mt-2"><Mono>Spring, 2026</Mono></div>
      </Reveal>

      {/* Name — dominant */}
      <Reveal className="col-span-12 md:col-span-9" delay={0}>
        <h1
          className="font-normal"
          style={{
            fontFamily: "'Fraunces', 'Times New Roman', serif",
            fontSize: 'clamp(4.25rem, 14.5vw, 12.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.025em',
            color: C.ink,
            fontVariationSettings: '"opsz" 144, "SOFT" 0, "wght" 420',
            margin: 0,
          }}
        >
          Dylan<br />
          <span
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 380',
            }}
          >Zhuang.</span>
        </h1>
      </Reveal>

      {/* Description — asymmetric, tucked right */}
      <div className="col-span-12 md:col-span-5 md:col-start-8">
        <Reveal delay={220}>
          <Rule />
          <p
            className="mt-6 text-lg md:text-[19px]"
            style={{
              fontFamily: "'Instrument Sans', system-ui, sans-serif",
              lineHeight: 1.52,
              color: C.ink,
            }}
          >
            CS&nbsp;+&nbsp;math at the University of Florida, Benacquisto Scholar. Previous SWE Intern @ Capital One. Olivia Rodrigo Superfan.
          </p>
          <p
            className="mt-5 text-[15px] md:text-[16px]"
            style={{
              fontFamily: "'Instrument Sans', system-ui, sans-serif",
              lineHeight: 1.6,
              color: C.stone,
            }}
          >
            Graduating May 2026. 
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
