import React from 'react';
import { ExperienceItem } from '../types';
import { C, Reveal, Mono } from './design';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => (
  <Reveal delay={index * 40}>
    <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 py-8 md:py-10">

      {/* Year + period */}
      <div className="col-span-4 md:col-span-2">
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(1.75rem, 2.4vw, 2.25rem)',
            lineHeight: 1,
            color: C.ink,
            fontVariationSettings: '"opsz" 48, "wght" 380',
          }}
        >{experience.displayYear || experience.duration.match(/\d{4}/)?.[0] || ''}</div>
        <div className="mt-2">
          <Mono>{experience.shortPeriod || ''}</Mono>
        </div>
      </div>

      {/* Company + role */}
      <div className="col-span-8 md:col-span-4">
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(1.25rem, 1.7vw, 1.5rem)',
            lineHeight: 1.15,
            color: C.ink,
            fontVariationSettings: '"opsz" 48, "wght" 440',
          }}
        >{experience.company}</div>
        <div
          className="mt-1"
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 14,
            color: C.stone,
          }}
        >{experience.position}</div>
      </div>

      {/* Note */}
      <div className="col-span-12 md:col-span-6 mt-2 md:mt-1">
        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.55,
            color: C.ink,
            margin: 0,
          }}
        >{experience.note || ''}</p>
      </div>
    </div>
  </Reveal>
);
