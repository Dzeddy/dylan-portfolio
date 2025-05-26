import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { Timeline } from './Timeline';
import { experiences, enhancedTimeline } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-yellow-500">Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>

        <Timeline items={enhancedTimeline} />
      </div>
    </section>
  );
}; 