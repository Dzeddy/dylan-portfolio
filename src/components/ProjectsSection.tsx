import React from 'react';
import { ProjectCard, ComingSoonCard } from './ProjectCard';
import { projects } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
  // Calculate how many coming soon cards are needed to fill to next multiple of 3
  const totalProjects = projects.length;
  const remainder = totalProjects % 3;
  const comingSoonCount = remainder === 0 ? 0 : 3 - remainder;

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {Array.from({ length: comingSoonCount }, (_, index) => (
            <ComingSoonCard key={`coming-soon-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}; 