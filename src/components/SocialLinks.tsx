import React from 'react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex justify-center space-x-4 sm:space-x-6 ${className}`}>
      {links.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-yellow-500 transition-colors p-2"
            aria-label={link.label}
          >
            <IconComponent size={20} className="sm:w-6 sm:h-6" />
          </a>
        );
      })}
    </div>
  );
}; 