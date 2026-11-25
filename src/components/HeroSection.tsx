import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { KineticFieldCanvas } from './KineticFieldCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100vh-72px)] max-h-[860px] flex items-center justify-center px-5 sm:px-9 py-16 sm:py-24 bg-white"
    >
      <KineticFieldCanvas />

      <div className="relative z-10 max-w-[780px] mx-auto text-center">
        <p
          className="m-0 text-[13.5px] sm:text-[15px] font-medium tracking-[-0.01em]"
          style={{ color: '#4B5058' }}
        >
          <span className="hidden sm:inline">{personalInfo.name} · </span>
          {personalInfo.role} ·{' '}
          <span className="whitespace-nowrap">{personalInfo.location}</span>
        </p>

        <h1
          className="mt-5 mb-0 font-medium tracking-[-0.045em]"
          style={{
            fontSize: 'clamp(2.5rem, 5.8vw, 4.65rem)',
            lineHeight: 1.02,
            color: '#0F0F10',
            textWrap: 'balance',
          }}
        >
          ML infrastructure for TPU and GPU fleets
        </h1>

        <p
          className="mt-6 mb-0 mx-auto max-w-[540px] text-[15.5px] sm:text-[17px] leading-[1.58]"
          style={{ color: '#5C616B', textWrap: 'balance' }}
        >
          Software engineer working on rollouts, release qualification, and
          automated fleet management in Python and Go. UF CS &amp; Math&nbsp;’26.
          Olivia Rodrigo superfan.
        </p>

        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="pill-black px-6 py-3.5 text-[14.5px] sm:text-[15px]"
            style={{ textDecoration: 'none' }}
          >
            <span className="truncate">{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="pill-light px-6 py-3.5 text-[14.5px] sm:text-[15px]"
            style={{ textDecoration: 'none' }}
          >
            <span>Résumé (PDF)</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
