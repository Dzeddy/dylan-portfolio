import React from 'react';
import { projects } from '../data/portfolio';
import { Reveal, SectionHeader } from './design';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 py-12 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="Shipped products, developer tools, and published machine learning work."
          meta={`${String(projects.length).padStart(2, '0')} Selected`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 55}>
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
