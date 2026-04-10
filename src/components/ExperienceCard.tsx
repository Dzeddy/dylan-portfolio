import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group border border-zinc-800/50 bg-zinc-900/20 rounded-lg p-6 hover:border-sky-500/30 hover:bg-zinc-900/50 transition-all duration-300 w-full">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="w-12 h-12 bg-zinc-900 rounded-md flex items-center justify-center border border-zinc-800 text-sky-400 font-mono text-sm group-hover:border-sky-500/30 transition-colors">
          {experience.logo}
        </div>
        <div className="flex-1 w-full">
          <h3 className="text-lg font-medium text-zinc-200 mb-1 group-hover:text-sky-400 transition-colors">{experience.company}</h3>
          <p className="text-zinc-400 text-sm mb-1">{experience.position}</p>
          <p className="text-zinc-500 text-xs font-mono mb-4">{experience.duration}</p>
          <ul className="space-y-2 text-sm text-zinc-400">
            {experience.description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-sky-400 mt-1 flex-shrink-0">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
