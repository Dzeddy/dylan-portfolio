import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 border-2 border-yellow-600 rounded-lg p-4 sm:p-6 hover:border-yellow-500 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold text-yellow-500 mb-3">{project.title}</h3>
      <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800 text-yellow-500 text-xs sm:text-sm rounded-full border border-yellow-600/30">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors text-sm sm:text-base">
        View Project <ExternalLink size={14} className="ml-2 sm:w-4 sm:h-4" />
      </a>
    </div>
  );
}; 