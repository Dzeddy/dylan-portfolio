import React from 'react';
import { skills } from '../data/portfolio';
import { C, Reveal, Rule, SectionHeader } from './design';

const APPARATUS = [
  { label: 'Languages',      items: skills.languages },
  { label: 'Infrastructure', items: skills.technologies },
  { label: 'Frameworks',     items: skills.frameworks },
  { label: 'Thinking',       items: skills.topics },
];

export const SkillsSection: React.FC = () => (
  <section id="apparatus" className="px-6 sm:px-10 md:px-14 pt-12 pb-28 md:pb-40">
    <SectionHeader
      numeral="IV."
      title="Skills."
      rightLines={[
        'My toolbox.',
      ]}
    />

    <Rule />
    <dl style={{ margin: 0 }}>
      {APPARATUS.map(({ label, items }, i) => (
        <Reveal key={label} delay={i * 40}>
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 py-8 md:py-10">
            <dt className="col-span-12 md:col-span-3">
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                  color: C.ink,
                  fontVariationSettings: '"opsz" 48, "wght" 400',
                }}
              >{label}</span>
            </dt>
            <dd className="col-span-12 md:col-span-9 mt-2 md:mt-2" style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                  lineHeight: 1.55,
                  color: C.ink,
                  margin: 0,
                  maxWidth: '52ch',
                }}
              >{items.join(', ')}</p>
            </dd>
          </div>
          <Rule soft={i !== APPARATUS.length - 1} />
        </Reveal>
      ))}
    </dl>
  </section>
);
