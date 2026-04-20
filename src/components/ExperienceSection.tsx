import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { experiences } from '../data/portfolio';
import { Rule, SectionHeader } from './design';

export const ExperienceSection: React.FC = () => (
  <section id="work" className="px-6 sm:px-10 md:px-14 pt-12 pb-28 md:pb-40">
    <SectionHeader
      numeral="II."
      title="Work."
      rightLines={[
        'Five places.',
        'Five years.'
      ]}
    />

    <Rule />
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {experiences.map((exp, i) => (
        <li key={i}>
          <ExperienceCard experience={exp} index={i} />
          <Rule soft={i !== experiences.length - 1} />
        </li>
      ))}
    </ul>
  </section>
);
