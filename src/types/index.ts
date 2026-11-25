export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  summary: string;
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  featured?: boolean;
}

export interface ToolkitRow {
  label: string;
  value: string;
}
