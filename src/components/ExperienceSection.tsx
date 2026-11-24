import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { Reveal, SectionHeader } from './design';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="work" className="scroll-mt-20 py-10 sm:py-16 px-4 sm:px-8">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          title="Work"
          subtitle="Production infrastructure, backend systems, teaching, and ML research."
          meta="2020 — 2026 · Tap a row to expand"
        />

        <Reveal delay={60}>
          <div className="gallery-sheet overflow-hidden">
            <ul className="list-none m-0 p-0">
              {experiences.map((exp, i) => (
                <li
                  key={`${exp.company}-${exp.displayYear}`}
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--hair)',
                  }}
                >
                  <ExperienceCard
                    experience={exp}
                    isCurrent={i === 0}
                    expanded={expandedIndex === i}
                    onToggle={() =>
                      setExpandedIndex((prev) => (prev === i ? null : i))
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
