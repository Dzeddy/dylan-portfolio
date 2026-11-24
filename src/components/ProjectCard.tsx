import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectSchematic: React.FC<{ kind: ProjectItem['schematic'] }> = ({ kind }) => {
  const strokeMain = 'var(--hair-strong)';
  const strokeAccent = 'var(--accent)';

  if (kind === 'waveform') {
    return (
      <svg
        viewBox="0 0 220 56"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-12"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="28" x2="220" y2="28" stroke={strokeMain} strokeWidth="1" />
        <path
          d="M0 28 C 20 28, 28 10, 46 10 C 64 10, 68 46, 86 46 C 104 46, 112 8, 132 8 C 152 8, 158 42, 178 42 C 194 42, 202 28, 220 28"
          stroke={strokeAccent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="132" cy="8" r="2.5" fill={strokeAccent} />
        <circle cx="46" cy="10" r="2" fill="var(--ink-muted)" />
      </svg>
    );
  }

  if (kind === 'graph') {
    return (
      <svg
        viewBox="0 0 220 56"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-12"
        fill="none"
        aria-hidden="true"
      >
        <line x1="8" y1="36" x2="62" y2="16" stroke={strokeMain} strokeWidth="1" />
        <line x1="62" y1="16" x2="112" y2="34" stroke={strokeAccent} strokeWidth="1.35" />
        <line x1="62" y1="16" x2="138" y2="12" stroke={strokeMain} strokeWidth="1" />
        <line x1="112" y1="34" x2="176" y2="24" stroke={strokeMain} strokeWidth="1" />
        <line x1="138" y1="12" x2="176" y2="24" stroke={strokeMain} strokeWidth="1" />
        <line x1="8" y1="36" x2="112" y2="34" stroke={strokeMain} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="8" cy="36" r="3" fill="var(--ink-muted)" />
        <circle cx="62" cy="16" r="3.5" fill={strokeAccent} />
        <circle cx="112" cy="34" r="3.5" fill={strokeAccent} />
        <circle cx="138" cy="12" r="2.5" fill="var(--ink-muted)" />
        <circle cx="176" cy="24" r="3" fill="var(--ink-muted)" />
      </svg>
    );
  }

  if (kind === 'telemetry') {
    const bars = [18, 26, 20, 34, 28, 42, 36, 48, 30, 38, 46, 24, 34, 40];
    return (
      <svg
        viewBox="0 0 220 56"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-12"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="50" x2="210" y2="50" stroke={strokeMain} strokeWidth="1" />
        {bars.map((h, idx) => {
          const x = 4 + idx * 14.5;
          const highlight = idx === 7 || idx === 10;
          return (
            <line
              key={idx}
              x1={x}
              y1={50}
              x2={x}
              y2={50 - h}
              stroke={highlight ? strokeAccent : strokeMain}
              strokeWidth={highlight ? '2.5' : '1.75'}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  // lattice (molecular transfer learning)
  return (
    <svg
      viewBox="0 0 220 56"
      preserveAspectRatio="xMinYMid meet"
      className="w-full h-12"
      fill="none"
      aria-hidden="true"
    >
      <polygon points="22,12 40,22 40,40 22,50 4,40 4,22" stroke={strokeMain} strokeWidth="1.2" />
      <polygon points="58,12 76,22 76,40 58,50 40,40 40,22" stroke={strokeMain} strokeWidth="1.2" />
      <polygon points="94,12 112,22 112,40 94,50 76,40 76,22" stroke={strokeAccent} strokeWidth="1.4" />
      <line x1="112" y1="22" x2="140" y2="14" stroke={strokeAccent} strokeWidth="1.2" />
      <line x1="112" y1="40" x2="148" y2="44" stroke={strokeMain} strokeWidth="1.2" />
      <circle cx="140" cy="14" r="3" fill={strokeAccent} />
      <circle cx="148" cy="44" r="2.5" fill="var(--ink-muted)" />
      <circle cx="94" cy="12" r="2.5" fill={strokeAccent} />
    </svg>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const num = String(index).padStart(2, '0');

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="gallery-sheet group flex flex-col justify-between h-full p-5 sm:p-9 transition-transform duration-200 hover:-translate-y-0.5"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div>
        {/* Quiet top line: number & year */}
        <div className="flex items-center justify-between gap-4">
          <span
            className="font-mono-meta text-[12px]"
            style={{ color: 'var(--ink-muted)' }}
          >
            {num}
          </span>
          <span
            className="font-mono-meta text-[12px]"
            style={{ color: 'var(--ink-muted)' }}
          >
            {project.year}
          </span>
        </div>

        {/* Procedural schematic strip */}
        <div className="my-6 opacity-85 group-hover:opacity-100 transition-opacity duration-200">
          <ProjectSchematic kind={project.schematic} />
        </div>

        {/* Title + editorial kicker */}
        <h3
          className="font-display font-semibold text-[22px] sm:text-[25px] m-0"
          style={{ color: 'var(--ink)', lineHeight: 1.15 }}
        >
          {project.title}
        </h3>

        <p
          className="font-editorial italic text-[16px] sm:text-[17px] mt-1.5 mb-0"
          style={{ color: 'var(--ink-secondary)', lineHeight: 1.35 }}
        >
          {project.kicker}
        </p>

        <p
          className="text-[14.5px] leading-relaxed mt-4 mb-0"
          style={{ color: 'var(--ink-secondary)' }}
        >
          {project.description}
        </p>
      </div>

      {/* Footer: quiet tech list + vermilion external link */}
      <div
        className="mt-7 pt-5 flex flex-col gap-3"
        style={{ borderTop: '1px solid var(--hair)' }}
      >
        <div
          className="text-[12.5px] leading-relaxed"
          style={{ color: 'var(--ink-muted)' }}
        >
          {project.tech.join(' · ')}
        </div>

        <div className="inline-flex items-center gap-1 text-[13.5px] font-medium vermilion-link">
          <span>{project.displayLink}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </a>
  );
};

export const ComingSoonCard: React.FC = () => null;
