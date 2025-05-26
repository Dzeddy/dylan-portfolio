import React from 'react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-yellow-600/20">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        <p>© 2024 {personalInfo.name}. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}; 