export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
  hideOnMobile?: boolean;
}

export interface TimelineItem {
  date: string;
  title: string;
  side: 'left' | 'right';
}

export interface EnhancedTimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  type: 'work' | 'education' | 'research';
  icon: React.ComponentType<any>;
  description: string;
  technologies?: string[];
  achievements?: string[];
  side: 'left' | 'right';
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
} 