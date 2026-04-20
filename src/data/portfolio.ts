import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Microscope, BookOpen } from 'lucide-react';
import { ExperienceItem, ProjectItem, TimelineItem, SocialLink, EnhancedTimelineItem } from '../types';

export const personalInfo = {
  name: 'Dylan Zhuang',
  title: 'Previous SWE Intern @ Capital One',
  education: 'CS + Math @ University of Florida - Benacquisto Scholar',
  role: 'Full-time: May 2026',
  email: 'dylanzhuang1025@gmail.com',
  graduation: 'May 2026'
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Dzeddy',
    icon: Github,
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/dylan-zhuang/',
    icon: Linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'mailto:dylanzhuang1025@gmail.com',
    icon: Mail,
    label: 'Email'
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Capital One',
    position: 'Software Engineering Intern',
    duration: 'May 2025 – August 2025',
    displayYear: '2025',
    shortPeriod: 'May – Aug',
    note: "GraphQL and Go.",
    description: [],
    logo: 'C1'
  },
  {
    company: 'Raymond James Financial',
    position: 'Software Engineering Intern',
    duration: 'May 2024 – August 2024',
    displayYear: '2024',
    shortPeriod: 'May – Aug',
    note: 'Redis and Java',
    description: [],
    logo: 'RJ'
  },
  {
    company: 'DeepMotion',
    position: 'Software Engineering Intern',
    duration: 'May 2023 – August 2023',
    displayYear: '2023',
    shortPeriod: 'May – Aug',
    note: "OAuth and observability.",
    description: [],
    logo: 'DM'
  },
  {
    company: 'University of Florida',
    position: 'Teaching Assistant',
    duration: 'August 2023 – 2025',
    displayYear: '2023',
    shortPeriod: '– 2025',
    note: "Advanced Programming Fundamentals, Discrete Math, and Computer Organization",
    description: [],
    logo: 'UF'
  },
  {
    company: 'Florida Atlantic University',
    position: 'Undergraduate Researcher',
    duration: 'June 2020 – June 2022',
    displayYear: '2020',
    shortPeriod: '– 2022',
    note: 'Cascade transfer learning for drug-target prediction. First paper, Applied Sciences, 2021.',
    description: [],
    logo: 'FAU'
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Familiar',
    year: 'ongoing',
    kicker: 'Affective AI Therapy.',
    description: 'For when you need to talk to someone but don\'t want to talk to someone.',
    tech: ['Go', 'Vite', 'TypeScript', 'MongoDB', 'Redis', 'Pinecone', 'OpenAI Embeddings'],
    link: 'familiar.cc'
  },
  {
    title: 'Zettelkasten',
    year: 'ongoing',
    kicker: 'Lightning fast knowledge management with semantic search.',
    description: 'Pinecone for semantic search, Redis for the parts that need to be fast.',
    tech: ['Go', 'React', 'TypeScript', 'MongoDB', 'Redis', 'Pinecone', 'OpenAI Embeddings'],
    link: 'https://github.com/Dzeddy/zettelkasten'
  },
  {
    title: 'Stats Dashboard',
    year: '2024',
    kicker: 'SwampHacks weekend project. Still in production.',
    description: 'My first deployed full-stack project',
    tech: ['Go', 'MongoDB', 'Redis', 'React', 'NGINX'],
    link: 'https://dashboard.dzed.cx'
  },
  {
    title: 'Deep Learning for Drug Discovery',
    year: '2022',
    kicker: 'Cascade transfer learning for molecules that stick.',
    description: "Published in Applied Sciences.",
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    link: 'https://doi.org/10.3390/app11077772'
  }
];

export const timeline: TimelineItem[] = [
  { date: '2025', title: 'Capital One Bank Tech Internship', side: 'left' },
  { date: '2024', title: 'Raymond James SWE Internship', side: 'right' },
  { date: '2023', title: 'DeepMotion SWE Internship', side: 'left' },
  { date: '2023', title: 'Started as TA at UF', side: 'right' },
  { date: '2022', title: 'Began CS + Math at UF', side: 'left' },
  { date: '2020-2022', title: 'Research at FAU', side: 'right' }
];

export const enhancedTimeline: EnhancedTimelineItem[] = [
  {
    id: 1,
    date: '2025',
    title: 'Capital One SWE Internship',
    company: 'Capital One',
    type: 'work',
    icon: Briefcase,
    description: 'Building GraphQL systems and serverless solutions using Go',
    technologies: ['Go', 'GraphQL', 'AWS Lambda', 'gqlgen'],
    achievements: [],
    side: 'left'
  },
  {
    id: 2,
    date: '2024',
    title: 'Raymond James SWE Internship',
    company: 'Raymond James Financial',
    type: 'work',
    icon: Code,
    description: 'Developed high-performance microservices and caching systems',
    technologies: ['Java', 'Spring Boot', 'Redis'],
    achievements: [],
    side: 'right'
  },
  {
    id: 3,
    date: '2023',
    title: 'DeepMotion SWE Internship',
    company: 'DeepMotion',
    type: 'work',
    icon: Code,
    description: 'Implemented authentication systems and monitoring infrastructure',
    technologies: ['OAuth 2.0', 'Prometheus', 'Grafana'],
    achievements: [],
    side: 'left'
  },
  {
    id: 4,
    date: '2023',
    title: 'Started as TA at UF',
    company: 'University of Florida',
    type: 'education',
    icon: BookOpen,
    description: 'Teaching Assistant for Software Engineering course',
    achievements: [],
    side: 'right'
  },
  {
    id: 5,
    date: '2022',
    title: 'Began CS + Math at UF',
    company: 'University of Florida',
    type: 'education',
    icon: GraduationCap,
    description: 'Benacquisto Scholar pursuing dual degree',
    achievements: [],
    side: 'left'
  },
  {
    id: 6,
    date: '2020-2022',
    title: 'Research at FAU',
    company: 'Florida Atlantic University',
    type: 'research',
    icon: Microscope,
    description: 'Published research on ML for drug discovery and sleep disorder classification',
    technologies: ['Python', 'TensorFlow', 'Data Analysis'],
    achievements: [],
    side: 'right'
  }
];

export const skills = {
  languages: ['Go', 'Java', 'Python', 'C++', 'C#', 'SQL', 'JavaScript', 'TypeScript'],
  technologies: ['AWS', 'Docker', 'Redis', 'MySQL', 'PostgreSQL', 'Amazon Aurora', 'Jenkins'],
  frameworks: ['Spring Boot', 'React', 'JUnit', 'Maven', 'Express'],
  topics: ['Distributed systems', 'Object-oriented design', 'Algorithms & data structures', 'Agile in the non-cultish sense']
};

export const education = {
  school: 'University of Florida',
  degree: 'Bachelor of Science in Computer Science and Mathematics',
  location: 'Gainesville, FL',
  graduation: 'June 2026',
  gpa: '3.93/4.0',
  scholarship: 'Benacquisto Scholar',
  coursework: ['Advanced Algorithms', 'Distributed Systems', 'Cloud Computing', 'Database Systems', 'Machine Learning Applications']
};
