import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { personalInfo, socialLinks } from '../data/portfolio';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <div className="relative z-10 w-full max-w-4xl text-left sm:text-center mt-20">
        <div className="mb-8">
          <p className="text-sky-400 font-mono text-sm mb-4 tracking-wider">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-zinc-100 tracking-tight">
            {personalInfo.name}.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-zinc-500 tracking-tight">
            I build things for the web.
          </h2>
          <div className="text-base sm:text-lg text-zinc-400 space-y-2 max-w-2xl mx-auto font-light">
            <p>{personalInfo.title}</p>
            <p>{personalInfo.education}</p>
            <p>Graduating {personalInfo.graduation}</p>
          </div>
        </div>

        <SocialLinks links={socialLinks} className="mb-16 justify-start sm:justify-center" />
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#experience" aria-label="Scroll to experience section">
          <ChevronDown size={24} className="text-zinc-500 hover:text-sky-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
