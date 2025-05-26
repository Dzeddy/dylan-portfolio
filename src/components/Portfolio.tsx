import React from 'react';
import {
  Navigation,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer
} from './index';

export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}; 