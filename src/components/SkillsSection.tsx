import React from 'react';
import { skills } from '../data/portfolio';

export const SkillsSection: React.FC = () => {
  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Technologies', items: skills.technologies },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Concepts', items: skills.topics }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-zinc-200 mb-12 flex items-center gap-4">
        <span className="text-sky-400 font-mono text-lg font-normal">03.</span> Technical Skills
        <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-6">
            <h3 className="text-zinc-300 font-medium mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm rounded-full font-mono hover:border-sky-500/50 hover:text-sky-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
