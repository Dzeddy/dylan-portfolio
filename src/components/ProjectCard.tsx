import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { ProjectItem } from '../types';

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="group bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-6 hover:border-sky-500/30 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium text-zinc-200 group-hover:text-sky-400 transition-colors">{project.title}</h3>
        <a href={project.link} className="text-zinc-500 hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech, i) => (
          <span key={i} className="font-mono text-xs text-sky-400/80">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const ComingSoonCard: React.FC = () => {
  return (
    <div className="bg-zinc-900/10 border border-zinc-800/30 border-dashed rounded-lg p-6 flex flex-col h-full items-center justify-center opacity-60">
      <Clock size={24} className="text-zinc-600 mb-3" />
      <h3 className="text-zinc-500 font-medium mb-2">Coming Soon</h3>
      <p className="text-zinc-600 text-sm text-center">In Development</p>
    </div>
  );
};
