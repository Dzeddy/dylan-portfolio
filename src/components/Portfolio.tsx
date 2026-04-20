import React from 'react';
import {
  Navigation,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer
} from './index';
import { C, Reveal, Mono } from './design';

const PullQuote: React.FC = () => (
  <section className="px-6 sm:px-10 md:px-14 py-20 md:py-32">
    <div className="grid grid-cols-12">
      <Reveal className="col-span-12 md:col-span-10 md:col-start-2">
        <blockquote
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.25rem, 6vw, 5rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.015em',
            color: C.ink,
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "wght" 340',
            margin: 0,
            textIndent: '-0.4em',
          }}
        >
          &ldquo;Most of what I&rsquo;m proud of is infrastructure.
          It&rsquo;s either faster than what came before or
          it&rsquo;s wrong, and either way nobody writes
          a blog post about it.&rdquo;
        </blockquote>
        <div className="mt-6 md:mt-10 flex items-center gap-3">
          <div style={{ width: 32, height: 1, background: C.ink }} />
          <Mono style={{ color: C.ink }}>A working principle</Mono>
        </div>
      </Reveal>
    </div>
  </section>
);

export const Portfolio: React.FC = () => {
  return (
    <div
      style={{
        background: C.paper,
        color: C.ink,
        minHeight: '100vh',
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { border-radius: 0 !important; box-shadow: none !important; }
        ::selection { background: ${C.ink}; color: ${C.paper}; }
        .u-link { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; transition: color 180ms ease; }
        .u-link:hover { color: ${C.rust}; }
        a { color: inherit; }
      `}</style>
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <PullQuote />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
