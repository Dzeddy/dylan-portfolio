import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isCurrent?: boolean;
  expanded: boolean;
  onToggle: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isCurrent = false,
  expanded,
  onToggle,
}) => {
  return (
    <div
      className="transition-colors duration-150"
      style={{
        backgroundColor: expanded ? 'var(--sheet-muted)' : 'transparent',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full text-left px-5 sm:px-9 py-5 sm:py-7 transition-colors duration-150"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        {/* Mobile-first clean stacked layout (<md) */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="font-display font-semibold text-[17px] tracking-tight truncate"
                style={{ color: 'var(--ink)' }}
              >
                {experience.company}
              </span>
              {isCurrent && (
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}
                  title="Current role"
                />
              )}
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span
                className="font-mono-meta text-[12.5px]"
                style={{ color: 'var(--ink-muted)' }}
              >
                {experience.displayYear}
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-200"
                style={{
                  color: 'var(--ink-muted)',
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
          </div>

          <div
            className="text-[13px] mt-1"
            style={{ color: 'var(--ink-secondary)' }}
          >
            <span>{experience.position}</span>
            <span className="mx-1.5" style={{ color: 'var(--ink-muted)' }}>
              ·
            </span>
            <span style={{ color: 'var(--ink-muted)' }}>
              {experience.shortPeriod}
            </span>
          </div>

          <p
            className="m-0 mt-2.5 text-[14px] leading-relaxed"
            style={{ color: 'var(--ink-secondary)' }}
          >
            {experience.note}
          </p>
        </div>

        {/* Desktop Swiss 12-column ledger (md+) */}
        <div className="hidden md:grid grid-cols-12 gap-x-6 items-baseline">
          <div className="col-span-2">
            <div
              className="font-mono-meta text-[14px] font-medium"
              style={{ color: 'var(--ink)' }}
            >
              {experience.displayYear}
            </div>
            <div
              className="text-[12px] mt-0.5"
              style={{ color: 'var(--ink-muted)' }}
            >
              {experience.shortPeriod}
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex items-center gap-2">
              <span
                className="font-display font-semibold text-[18px] tracking-tight"
                style={{ color: 'var(--ink)' }}
              >
                {experience.company}
              </span>
              {isCurrent && (
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}
                  title="Current role"
                />
              )}
            </div>
            <div
              className="text-[13.5px] mt-0.5"
              style={{ color: 'var(--ink-secondary)' }}
            >
              {experience.position}
            </div>
          </div>

          <div className="col-span-5">
            <p
              className="m-0 text-[14.5px] leading-relaxed"
              style={{ color: 'var(--ink-secondary)' }}
            >
              {experience.note}
            </p>
          </div>

          <div className="col-span-1 flex justify-end self-center">
            <ChevronDown
              size={16}
              className="transition-transform duration-200"
              style={{
                color: 'var(--ink-muted)',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </div>
        </div>
      </button>

      {/* Expandable details */}
      {expanded && experience.highlights.length > 0 && (
        <div className="px-5 sm:px-9 pb-6 sm:pb-7 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <div
              className="pt-4 space-y-2.5"
              style={{ borderTop: '1px solid var(--hair)' }}
            >
              {experience.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-[13.5px] sm:text-[14px] leading-relaxed"
                  style={{ color: 'var(--ink)' }}
                >
                  <span
                    className="mt-2 inline-block w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--accent)' }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
              {experience.link && (
                <div className="pt-1.5">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer"
                    className="vermilion-link inline-flex items-center gap-1 text-[13px] font-medium"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Read publication</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
