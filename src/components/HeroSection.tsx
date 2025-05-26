import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { personalInfo, socialLinks } from '../data/portfolio';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center w-full max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight">
            Hello, I'm <span className="text-yellow-500 block sm:inline">{personalInfo.name}</span>
          </h1>
          <div className="text-base sm:text-xl md:text-2xl text-gray-300 space-y-1 sm:space-y-2">
            <p className="break-words">{personalInfo.title}</p>
            <p>{personalInfo.education}</p>
            <p>Graduating {personalInfo.graduation}</p>
            <p>{personalInfo.role}</p>
          </div>
        </div>
        
        <SocialLinks links={socialLinks} className="mb-8 sm:mb-12" />
        
        <a href="#experience" className="inline-block" aria-label="Scroll to experience section">
          <ChevronDown size={28} className="text-yellow-500 animate-bounce sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  );
}; 