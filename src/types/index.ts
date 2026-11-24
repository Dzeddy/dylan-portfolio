import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  displayYear: string;
  shortPeriod: string;
  note: string;
  highlights: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  kicker: string;
  description: string;
  tech: string[];
  link: string;
  displayLink: string;
  schematic: 'waveform' | 'graph' | 'telemetry' | 'lattice';
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  handle: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export type CanvasMode = 'field' | 'orbit';
export type ThemeMode = 'light' | 'dark';
