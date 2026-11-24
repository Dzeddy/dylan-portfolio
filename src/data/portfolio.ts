import { Github, Linkedin, Mail } from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillGroup, SocialLink } from '../types';

export const personalInfo = {
  name: 'Dylan Zhuang',
  monogram: 'DZ',
  title: 'Software Engineer at Google',
  location: 'Raleigh–Durham, NC',
  tagline: 'SWE @ Google · ML Infrastructure · Olivia Rodrigo Superfan',
  subtitle: 'Rollouts and automated fleet management for Google’s TPU & GPU fleet.',
  education: 'CS & Math, University of Florida',
  graduation: 'May 2026',
  honors: 'Benacquisto Scholar · 3.93 GPA',
  email: 'dylanzhuang1025@gmail.com',
  resumePath: '/resume.pdf',
  githubUrl: 'https://github.com/Dzeddy',
  linkedinUrl: 'https://www.linkedin.com/in/dylan-zhuang/',
  paperUrl: 'https://doi.org/10.3390/app11177772',
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Dzeddy',
    icon: Github,
    label: 'GitHub',
    handle: 'Dzeddy',
  },
  {
    href: 'https://www.linkedin.com/in/dylan-zhuang/',
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'dylan-zhuang',
  },
  {
    href: 'mailto:dylanzhuang1025@gmail.com',
    icon: Mail,
    label: 'Email',
    handle: 'dylanzhuang1025@gmail.com',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Google',
    position: 'Software Engineer · ML Infrastructure',
    duration: 'Summer 2026 – Present',
    displayYear: '2026',
    shortPeriod: 'Summer – Present',
    note: 'Rollouts, release qualification, and automated fleet management for Google’s TPU & GPU fleet. Python and Go.',
    highlights: [
      'Building release qualification, fault-detection tooling, and automated remediation pipelines across large-scale TPU and GPU accelerator fleets.',
      'Focusing on safer ML software rollouts, faster fault isolation, and higher fleet-wide training and inference goodput in Python and Go.',
    ],
  },
  {
    company: 'Capital One',
    position: 'Software Engineering Intern',
    duration: 'May 2025 – August 2025',
    displayYear: '2025',
    shortPeriod: 'May – Aug',
    note: 'GraphQL, Go, and entity resolution pipelines.',
    highlights: [
      'Delivered a Go GraphQL API handling 1,000+ TPS under 10 ms latency for 100K+ daily users.',
      'Cut entity duplicate rates by 70% with a data cleaning pipeline, saving $250K annually across 1,000+ employees.',
      'Introduced PostgreSQL sharding and read replicas, reducing query latency by 60%.',
    ],
  },
  {
    company: 'Raymond James Financial',
    position: 'Software Engineering Intern',
    duration: 'May 2024 – August 2024',
    displayYear: '2024',
    shortPeriod: 'May – Aug',
    note: 'Redis caching and real-time Java/Scala services.',
    highlights: [
      'Integrated Redis as a low-latency caching layer, cutting database load by 40%, trimming API response by 200 ms, and saving $40K+ per year.',
      'Built real-time payment services in Java and Scala with gRPC and Kafka processing 10K+ events per minute.',
      'Improved multi-tenant storage p95 latency by 35–40%.',
    ],
  },
  {
    company: 'DeepMotion',
    position: 'Software Engineering Intern',
    duration: 'May 2023 – August 2023',
    displayYear: '2023',
    shortPeriod: 'May – Aug',
    note: 'OAuth, microservices, and observability.',
    highlights: [
      'Designed REST and gRPC microservices in Java and Scala Core for 100K+ active users on Nomad.',
      'Reduced API latency by 90% (2 s to 200 ms) through query optimization and distributed caching.',
      'Implemented OAuth 2.0 authentication and Prometheus/Grafana observability pipelines.',
    ],
  },
  {
    company: 'University of Florida',
    position: 'Lead Teaching Assistant',
    duration: 'August 2023 – May 2026',
    displayYear: '2023',
    shortPeriod: '2023 – 2026',
    note: 'Advanced Programming Fundamentals, Discrete Math, Computer Organization, and Database Systems.',
    highlights: [
      'Taught JVM optimization, multithreading, distributed SQL, and system design to 300+ students.',
      'Built automated grading infrastructure and gRPC microservice labs, cutting grading turnaround by 60%.',
    ],
  },
  {
    company: 'Florida Atlantic University',
    position: 'Undergraduate ML Researcher',
    duration: 'June 2020 – June 2022',
    displayYear: '2020',
    shortPeriod: '2020 – 2022',
    note: 'Cascade transfer learning for drug-target prediction. Feature Paper, Applied Sciences, 2021.',
    highlights: [
      'Achieved 92% accuracy in drug efficacy prediction using cascade transfer learning across 10 GB+ molecular datasets.',
      'Published Feature Paper in Applied Sciences (2021, 34 citations) and arXiv preprint on eight-class sleep disorder classification.',
    ],
    link: 'https://doi.org/10.3390/app11177772',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'familiar',
    title: 'Familiar',
    year: 'Ongoing',
    kicker: 'Affective AI Therapy.',
    description:
      "For when you need to talk to someone but don't want to talk to someone. Fault-tolerant Go microservices supporting 1,000+ concurrent WebSocket sessions with distributed vector retrieval.",
    tech: ['Go', 'TypeScript', 'React', 'Redis', 'MongoDB', 'Pinecone', 'Kubernetes'],
    link: 'https://familiar.cc',
    displayLink: 'familiar.cc',
    schematic: 'waveform',
  },
  {
    id: 'zettelkasten',
    title: 'Zettelkasten',
    year: 'Ongoing',
    kicker: 'Lightning-fast knowledge management with semantic search.',
    description:
      'Pinecone for semantic search, Redis for the parts that need to be fast. Built for instant associative recall across thousands of personal notes.',
    tech: ['Go', 'React', 'TypeScript', 'MongoDB', 'Redis', 'Pinecone'],
    link: 'https://github.com/Dzeddy/zettelkasten',
    displayLink: 'github.com/Dzeddy/zettelkasten',
    schematic: 'graph',
  },
  {
    id: 'stats-dashboard',
    title: 'Stats Dashboard',
    year: '2024',
    kicker: 'SwampHacks weekend project. Still in production.',
    description:
      'My first deployed full-stack project — a live analytics dashboard backed by Go, Redis caching, MongoDB, and NGINX.',
    tech: ['Go', 'MongoDB', 'Redis', 'React', 'NGINX'],
    link: 'https://dashboard.dzed.cx',
    displayLink: 'dashboard.dzed.cx',
    schematic: 'telemetry',
  },
  {
    id: 'drug-discovery',
    title: 'Deep Learning for Drug Discovery',
    year: '2021',
    kicker: 'Cascade transfer learning for molecules that stick.',
    description:
      'Feature Paper published in Applied Sciences (34 citations). Identifies high-efficacy drug compounds via multi-stage cascade transfer learning.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    link: 'https://doi.org/10.3390/app11177772',
    displayLink: 'doi.org/10.3390/app11177772',
    schematic: 'lattice',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Go', 'C++', 'Java', 'Scala', 'TypeScript', 'Rust', 'SQL'],
  },
  {
    label: 'Infrastructure',
    items: ['TPU/GPU Fleets', 'Kubernetes', 'Docker', 'Terraform', 'Apache Kafka', 'Redis', 'PostgreSQL', 'GCP', 'AWS'],
  },
  {
    label: 'Frameworks',
    items: ['gRPC', 'GraphQL', 'Spring Boot', 'React', 'Apache Spark', 'Delta Lake'],
  },
  {
    label: 'Focus',
    items: [
      'ML infrastructure & fleet reliability',
      'Distributed systems & performance',
      'Algorithms & data structures',
      'Agile in the non-cultish sense',
    ],
  },
];

export const sectionNav = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const;
