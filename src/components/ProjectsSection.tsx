import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/portfolio';
import { C, Reveal, Rule, Mono, SectionHeader } from './design';

const pad = (n: number) => String(n).padStart(2, '0');

const getDisplayLink = (link: string, title: string) => {
  if (link === '#') return `internal — ${title}`;
  return link.replace(/^https?:\/\//, '');
};

export const ProjectsSection: React.FC = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="selected" className="px-6 sm:px-10 md:px-14 pt-12 pb-28 md:pb-40">
      <SectionHeader
        numeral="III."
        title="Selected."
        rightLines={[
          'Always building,',
          "Always learning.",
        ]}
      />

      {/* Featured project — dominant */}
      <Reveal>
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 pt-4 pb-10">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-baseline gap-3">
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: 1,
                  color: C.rust,
                  fontVariationSettings: '"opsz" 144, "wght" 360',
                }}
              >{pad(1)}</span>
              <Mono>/ {pad(projects.length)}</Mono>
            </div>
            <div className="mt-4"><Mono>{featured.year}</Mono></div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                color: C.ink,
                fontVariationSettings: '"opsz" 144, "wght" 440',
                margin: 0,
              }}
            >{featured.title}</h3>
            {featured.kicker && (
              <p
                className="mt-5"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.25rem, 1.9vw, 1.65rem)',
                  lineHeight: 1.3,
                  color: C.stone,
                  fontVariationSettings: '"opsz" 48, "wght" 360',
                  maxWidth: '40ch',
                }}
              >{featured.kicker}</p>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 pb-10">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.6,
                color: C.ink,
                margin: 0,
              }}
            >{featured.description}</p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-6 md:mt-0">
            <Mono>Built with</Mono>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 14,
                lineHeight: 1.55,
                color: C.ink,
                margin: 0,
              }}
            >{featured.tech.join(' · ')}</p>
            <a
              href={featured.link}
              target="_blank"
              rel="noreferrer"
              className="u-link inline-block mt-5"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 14,
                color: C.ink,
              }}
            >→&nbsp;&nbsp;{getDisplayLink(featured.link, featured.title)}</a>
          </div>
        </div>
      </Reveal>

      <Rule />

      {/* Dense list — remaining projects */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {rest.map((project, i) => (
          <li key={project.title}>
            <ProjectCard project={project} index={i + 2} />
            <Rule soft={i !== rest.length - 1} />
          </li>
        ))}
      </ul>
    </section>
  );
};
