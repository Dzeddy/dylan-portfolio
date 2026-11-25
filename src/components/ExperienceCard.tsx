import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isFirst?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isFirst = false,
}) => (
  <div
    className={`grid grid-cols-1 sm:grid-cols-[118px_1fr] gap-y-1.5 gap-x-6 pb-6 sm:pb-7 ${
      isFirst ? 'pt-0 sm:pt-1' : 'pt-6 sm:pt-7'
    }`}
    style={{ borderBottom: '1px solid #ECEEF0' }}
  >
    <div
      className="text-[13.5px] sm:text-[14px] tabular sm:pt-0.5"
      style={{ color: '#7C818B' }}
    >
      {experience.period}
    </div>

    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3
          className="m-0 text-[17.5px] sm:text-[18px] font-semibold tracking-[-0.02em]"
          style={{ color: '#0F0F10' }}
        >
          {experience.company}
        </h3>
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-[13.5px] font-medium hover:underline"
            style={{ color: '#0F0F10', textDecoration: 'none' }}
          >
            <span>Paper</span>
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      <div
        className="text-[14.5px] sm:text-[15px] mt-0.5"
        style={{ color: '#52565E' }}
      >
        {experience.position}
      </div>

      <p
        className="mt-2 mb-0 text-[14.5px] sm:text-[15px] leading-[1.58] max-w-[60ch]"
        style={{ color: '#5C616B' }}
      >
        {experience.summary}
      </p>
    </div>
  </div>
);
