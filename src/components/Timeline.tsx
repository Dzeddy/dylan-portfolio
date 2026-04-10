import React from 'react';
import { EnhancedTimelineItem } from '../types';

const TimelineCard: React.FC<{ item: EnhancedTimelineItem }> = ({ item }) => {
  return (
    <div className={`relative mb-12 md:flex ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
      <div className="w-full md:w-[45%] pl-8 md:pl-0">
        <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-6 hover:border-sky-500/30 transition-all duration-300 group">
          <div className="mb-2">
            <span className="text-sky-400 font-mono text-xs">{item.date}</span>
          </div>
          <h3 className="text-lg font-medium text-zinc-200 mb-1 group-hover:text-sky-400 transition-colors">{item.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{item.company}</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.description}</p>

          {item.technologies && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-6">
        <div className="w-3 h-3 bg-black border-2 border-zinc-700 rounded-full z-10 relative"></div>
      </div>
    </div>
  );
};

export const Timeline: React.FC<{ items: EnhancedTimelineItem[] }> = ({ items }) => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-zinc-200 mb-12 flex items-center gap-4">
        <span className="text-sky-400 font-mono text-sm font-normal">02.</span> My Journey
        <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
      </h3>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-zinc-800" />
        {items.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
