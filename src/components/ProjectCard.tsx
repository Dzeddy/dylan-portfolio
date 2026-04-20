import React from 'react';
import { ProjectItem } from '../types';
import { C, Reveal, Mono } from './design';

const pad = (n: number) => String(n).padStart(2, '0');

const getDisplayLink = (link: string, title: string) => {
  if (link === '#') return `internal — ${title}`;
  return link.replace(/^https?:\/\//, '');
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <Reveal delay={(index - 2) * 40}>
    <a
      href={project.link}
      target={project.link.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      className="group"
    >
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 py-10 md:py-14">

        {/* Number */}
        <div className="col-span-3 md:col-span-1">
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: 'italic',
              fontSize: 22,
              color: C.stone,
              fontVariationSettings: '"opsz" 48, "wght" 360',
            }}
          >{pad(index)}</span>
        </div>

        {/* Title + kicker */}
        <div className="col-span-9 md:col-span-5">
          <h3
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: C.ink,
              fontVariationSettings: '"opsz" 96, "wght" 420',
              margin: 0,
            }}
          >{project.title}</h3>
          {project.kicker && (
            <p
              className="mt-2"
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: 'italic',
                fontSize: 17,
                color: C.stone,
                fontVariationSettings: '"opsz" 32, "wght" 360',
                margin: 0,
              }}
            >{project.kicker}</p>
          )}
        </div>

        {/* Body */}
        <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.55,
              color: C.ink,
              margin: 0,
            }}
          >{project.description}</p>
        </div>

        {/* Meta — year, tech, link */}
        <div className="col-span-12 md:col-span-2 mt-4 md:mt-0 md:text-right">
          <div><Mono>{project.year}</Mono></div>
          <div
            className="mt-3"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12,
              lineHeight: 1.5,
              color: C.stone,
            }}
          >{project.tech.join(' · ')}</div>
          <div
            className="mt-3"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 13,
              color: C.ink,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
            }}
          >→&nbsp;&nbsp;{getDisplayLink(project.link, project.title)}</div>
        </div>
      </div>
    </a>
  </Reveal>
);

export const ComingSoonCard: React.FC = () => null;
