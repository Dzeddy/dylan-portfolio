import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Microscope, BookOpen } from 'lucide-react';
import { ExperienceItem, ProjectItem, TimelineItem, SocialLink, EnhancedTimelineItem } from '../types';

export const personalInfo = {
  name: 'Dylan Zhuang',
  title: 'Incoming SWE Intern @ Capital One',
  education: 'CS + Math @ University of Florida - Benacquisto Scholar',
  role: 'TA @ UF CISE',
  email: 'dylanzhuang1025@gmail.com',
  graduation: 'June 2026'
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
    company: 'Your Company?',
    position: 'Software Engineer',
    duration: 'Coming Soon',
    description: [
      'Ready to tackle your next big challenge with innovative solutions and expertise in distributed systems, Go, and full-stack development. Could this be the perfect match? Let\'s find out! 🚀'
    ],
    logo: '?'
  },
  {
    company: 'Capital One',
    position: 'Software Engineering Intern',
    duration: 'May 2025 - August 2025',
    description: [
    ],
    logo: 'C1'
  },
  {
    company: 'Raymond James Financial',
    position: 'Software Engineering Intern',
    duration: 'May 2024 - August 2024',
    description: [
    ],
    logo: 'RJ'
  },
  {
    company: 'DeepMotion',
    position: 'Software Engineering Intern',
    duration: 'May 2023 - August 2023',
    description: [
    ],
    logo: 'DM'
  },
  {
    company: 'Florida Atlantic University',
    position: 'Undergraduate Researcher',
    duration: 'June 2020 - June 2022',
    description: [
    ],
    logo: 'FAU'
  },
  {
    company: 'University of Florida',
    position: 'Teaching Assistant - Software Engineering',
    duration: 'August 2023 - Present',
    description: [
    ],
    logo: 'UF'
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Zettelkasten – Connected Knowledge Platform',
    description: 'Full-stack knowledge management platform that transforms notes into an interlinked knowledge graph.',
    tech: ['Go', 'React', 'TypeScript', 'MongoDB', 'Redis', 'Pinecone', 'OpenAI Embeddings', 'WebSockets'],
    link: 'https://github.com/Dzeddy/zettelkasten'
  },
  {
    title: 'Stats Dashboard - SwampHacks Project',
    description: 'High-performance gaming statistics dashboard with microservice architecture, serving 200+ monthly users with 2ms average latency.',
    tech: ['Go', 'MongoDB', 'Redis', 'React', 'NGINX'],
    link: 'https://dashboard.dzed.cx'
  },
  {
    title: 'Distributed Caching System',
    description: 'Built during Raymond James internship - Java and Redis-based caching system improving query response times by 40%.',
    tech: ['Java', 'Redis', 'Spring Boot', 'Apache Kafka'],
    link: '#'
  },
  {
    title: 'Drug Discovery ML Pipeline',
    description: 'Research project using cascade transfer learning for identifying high efficacy drug compounds. Published in Applied Sciences journal.',
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
  languages: ['Java', 'Python', 'Go', 'C++', 'C#', 'SQL', 'JavaScript'],
  technologies: ['AWS', 'Docker', 'Redis', 'MySQL', 'PostgreSQL', 'Amazon Aurora', 'Jenkins'],
  frameworks: ['Spring Boot', 'React', 'JUnit', 'Maven', 'Express'],
  topics: ['Distributed Systems', 'Agile Development', 'Object-Oriented Design', 'Data Structures & Algorithms']
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