import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { ToolkitSection } from './ToolkitSection';
import { Footer } from './Footer';

export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#0F0F10]">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolkitSection />
      </main>
      <Footer />
    </div>
  );
};
