import React from 'react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-zinc-600 font-mono text-xs">
          Built with React & Tailwind by {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};
