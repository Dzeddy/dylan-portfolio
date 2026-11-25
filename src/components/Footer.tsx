import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => (
  <footer
    id="contact"
    className="scroll-mt-20 max-w-[1200px] mx-auto px-5 sm:px-9 pt-14 pb-16"
    style={{ borderTop: '1px solid #ECEEF0' }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-12 items-baseline">
      <div
        className="text-[14px]"
        style={{ color: '#7C818B' }}
      >
        © 2026 {personalInfo.name} · {personalInfo.locationFull}
      </div>

      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px] font-medium">
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:underline"
          style={{ color: '#0F0F10', textDecoration: 'none' }}
        >
          {personalInfo.email}
        </a>
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 hover:underline"
          style={{ color: '#52565E', textDecoration: 'none' }}
        >
          <span>GitHub</span>
          <ArrowUpRight size={14} />
        </a>
        <a
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 hover:underline"
          style={{ color: '#52565E', textDecoration: 'none' }}
        >
          <span>LinkedIn</span>
          <ArrowUpRight size={14} />
        </a>
        <a
          href={personalInfo.resumePath}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 hover:underline"
          style={{ color: '#52565E', textDecoration: 'none' }}
        >
          <span>Résumé</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </footer>
);
