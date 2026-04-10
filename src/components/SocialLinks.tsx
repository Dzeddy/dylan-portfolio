import React from 'react';
import { SocialLink } from '../types';

export const SocialLinks: React.FC<{ links: SocialLink[]; className?: string }> = ({ links, className = '' }) => {
  return (
    <div className={`flex space-x-6 ${className}`}>
      {links.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-sky-400 transition-colors"
            aria-label={link.label}
          >
            <IconComponent size={22} />
          </a>
        );
      })}
    </div>
  );
};
