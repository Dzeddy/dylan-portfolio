import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { Timeline } from './Timeline';
import { experiences, enhancedTimeline } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  // Create mobile-specific ordering: Capital One, Raymond James, UF, FAU
  const getMobileOrderedExperiences = () => {
    const orderedCompanies = ['Capital One', 'Raymond James Financial', 'University of Florida', 'Florida Atlantic University'];
    return orderedCompanies
      .map(company => experiences.find(exp => exp.company === company))
      .filter((exp): exp is NonNullable<typeof exp> => exp !== undefined);
  };

  const mobileOrderedExperiences = getMobileOrderedExperiences();

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Experience
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Mobile: Use strict ordering (Capital One, Raymond James, UF, FAU) */}
          <div className="lg:hidden contents">
            {mobileOrderedExperiences.map((experience, index) => (
              <ExperienceCard key={`mobile-${index}`} experience={experience} />
            ))}
          </div>
          
          {/* Desktop: Use original ordering */}
          <div className="hidden lg:contents">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`desktop-${index}`} experience={experience} />
            ))}
          </div>
        </div>

        <Timeline items={enhancedTimeline} />
      </div>
    </section>
  );
}; 