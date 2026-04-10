import React from 'react';
import { ProjectCard, ComingSoonCard } from './ProjectCard';
import { projects } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
  // Calculate how many coming soon cards are needed to fill to next multiple of 3
  const totalProjects = projects.length;
  const remainder = totalProjects % 3;
  const comingSoonCount = remainder === 0 ? 0 : 3 - remainder;

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-zinc-200 mb-12 flex items-center gap-4">
          <span className="text-sky-400 font-mono text-lg font-normal">02.</span> Projects
          <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {Array.from({ length: comingSoonCount }, (_, index) => (
            <div key={`coming-soon-${index}`} className="hidden sm:block">
              <ComingSoonCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 