import React from 'react';
import { projects } from '../data/portfolio';
import { Reveal } from './design';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const featured = projects.find((p) => p.featured) || projects[0];
  const secondary = projects.filter((p) => p.id !== featured.id);

  return (
    <section
      id="projects"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-5 sm:px-9 py-16 sm:py-20"
      style={{ borderTop: '1px solid #ECEEF0' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
        <Reveal>
          <h2
            className="m-0 text-[28px] sm:text-[32px] font-medium tracking-[-0.035em]"
            style={{ color: '#0F0F10', lineHeight: 1.1 }}
          >
            Projects
          </h2>
          <p
            className="mt-2.5 mb-0 text-[15px] leading-[1.55] max-w-[26ch]"
            style={{ color: '#646973' }}
          >
            Real shipped products and published research.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-5 sm:gap-6">
          <Reveal delay={40}>
            <ProjectCard project={featured} variant="featured" />
          </Reveal>

          <div className="flex flex-col gap-4">
            {secondary.map((project, i) => (
              <Reveal key={project.id} delay={70 + i * 40}>
                <ProjectCard project={project} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
