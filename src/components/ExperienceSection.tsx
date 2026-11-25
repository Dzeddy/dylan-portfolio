import React from 'react';
import { experiences } from '../data/portfolio';
import { Reveal } from './design';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection: React.FC = () => (
  <section
    id="experience"
    className="scroll-mt-20 max-w-[1200px] mx-auto px-5 sm:px-9 py-16 sm:py-20"
    style={{ borderTop: '1px solid #ECEEF0' }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
      <Reveal>
        <h2
          className="m-0 text-[28px] sm:text-[32px] font-medium tracking-[-0.035em]"
          style={{ color: '#0F0F10', lineHeight: 1.1 }}
        >
          Experience
        </h2>
        <p
          className="mt-2.5 mb-0 text-[15px] tabular"
          style={{ color: '#646973' }}
        >
          2020 — 2026
        </p>
      </Reveal>

      <div>
        {experiences.map((exp, idx) => (
          <Reveal key={exp.id} delay={idx * 30}>
            <ExperienceCard experience={exp} isFirst={idx === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
