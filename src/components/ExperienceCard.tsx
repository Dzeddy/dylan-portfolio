import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-gray-900 border-2 border-yellow-600 rounded-lg p-4 sm:p-6 md:p-8 hover:border-yellow-500 transition-all duration-300 hover:transform hover:-translate-y-1 w-full">
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-yellow-600/30 mb-3 sm:mb-0">
          <span className="text-yellow-500 font-bold text-lg sm:text-xl">{experience.logo}</span>
        </div>
        <div className="flex-1 w-full">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-500 mb-1">{experience.company}</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-2">{experience.position}</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-3">{experience.duration}</p>
          <ul className="text-gray-300 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            {experience.description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-yellow-500 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; 