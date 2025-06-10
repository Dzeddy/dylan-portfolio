import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
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

export const ComingSoonCard: React.FC = () => {
  return (
    <div className="bg-gray-900 border-2 border-gray-600 rounded-lg p-4 sm:p-6 flex flex-col h-full items-center justify-center opacity-60">
      <Clock size={48} className="text-gray-400 mb-4" />
      <h3 className="text-lg sm:text-xl font-bold text-gray-400 mb-3">Coming Soon</h3>
      <p className="text-gray-500 text-sm sm:text-base text-center mb-4 flex-grow">
        More exciting projects are on the way. Stay tuned!
      </p>
      <div className="flex items-center text-gray-500 text-sm sm:text-base">
        <Clock size={14} className="mr-2 sm:w-4 sm:h-4" />
        In Development
      </div>
    </div>
  );
}; 