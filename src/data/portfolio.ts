import { ExperienceItem, ProjectItem, ToolkitRow } from '../types';

export const personalInfo = {
  name: 'Dylan Zhuang',
  role: 'Google ML Infrastructure',
  location: 'Raleigh–Durham',
  locationFull: 'Raleigh–Durham, NC',
  email: 'dylanzhuang1025@gmail.com',
  resumePath: '/resume.pdf',
  githubUrl: 'https://github.com/Dzeddy',
  linkedinUrl: 'https://www.linkedin.com/in/dylan-zhuang/',
  paperUrl: 'https://doi.org/10.3390/app11177772',
};

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
] as const;

export const projects: ProjectItem[] = [
  {
    id: 'familiar',
    title: 'Familiar',
    year: 'Ongoing',
    description:
      'For when you need to talk to someone but don’t want to talk to someone. Go microservices supporting 1,000+ concurrent WebSocket sessions and distributed vector retrieval.',
    tech: ['Go', 'TypeScript', 'React', 'Redis', 'MongoDB', 'Pinecone', 'Kubernetes'],
    link: 'https://familiar.cc',
    image: '/familiar-preview.png',
    featured: true,
  },
  {
    id: 'zettelkasten',
    title: 'Zettelkasten',
    year: 'Ongoing',
    description:
      'Pinecone for semantic search, Redis for the parts that need to be fast.',
    tech: ['Go', 'React', 'TypeScript', 'MongoDB', 'Redis', 'Pinecone'],
    link: 'https://github.com/Dzeddy/zettelkasten',
  },
  {
    id: 'stats-dashboard',
    title: 'Stats Dashboard',
    year: '2024',
    description:
      'SwampHacks weekend project. Still in production.',
    tech: ['Go', 'MongoDB', 'Redis', 'React', 'NGINX'],
    link: 'https://dashboard.dzed.cx',
  },
  {
    id: 'drug-discovery',
    title: 'Deep Learning for Drug Discovery',
    year: '2021',
    description:
      'Cascade transfer learning for molecules that stick. Feature Paper, Applied Sciences (34 citations).',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    link: 'https://doi.org/10.3390/app11177772',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'google',
    company: 'Google',
    position: 'Software Engineer · ML Infrastructure',
    period: '2026 — Now',
    summary:
      'Rollouts, release qualification, and automated fleet management for Google’s TPU and GPU fleet in Python and Go.',
  },
  {
    id: 'capital-one',
    company: 'Capital One',
    position: 'Software Engineering Intern',
    period: '2025',
    summary:
      'Go GraphQL API at 1,000+ TPS (<10 ms latency); entity-resolution pipeline saving $250K/yr; PostgreSQL sharding cutting query latency 60%.',
  },
  {
    id: 'raymond-james',
    company: 'Raymond James Financial',
    position: 'Software Engineering Intern',
    period: '2024',
    summary:
      'Redis cache layer cutting database load 40% and saving $40K+/yr; Java/Scala gRPC and Kafka payment services at 10K+ events/min.',
  },
  {
    id: 'deepmotion',
    company: 'DeepMotion',
    position: 'Software Engineering Intern',
    period: '2023',
    summary:
      'REST and gRPC microservices for 100K+ active users on Nomad; 90% API latency reduction (2 s → 200 ms); OAuth 2.0 and observability.',
  },
  {
    id: 'uf-ta',
    company: 'University of Florida',
    position: 'Lead Teaching Assistant',
    period: '2023 — 2026',
    summary:
      'Taught JVM optimization, multithreading, distributed SQL, and system design to 300+ students across Software Engineering, Computer Organization, and Database Systems.',
  },
  {
    id: 'fau',
    company: 'Florida Atlantic University',
    position: 'Undergraduate ML Researcher',
    period: '2020 — 2022',
    summary:
      'Cascade transfer learning for drug efficacy prediction (92% accuracy). Feature Paper in Applied Sciences (2021, 34 citations).',
    link: 'https://doi.org/10.3390/app11177772',
  },
];

export const toolkitRows: ToolkitRow[] = [
  {
    label: 'Education',
    value: 'B.S. Computer Science & Mathematics, University of Florida (May 2026) · Benacquisto Scholar · 3.93 GPA',
  },
  {
    label: 'Languages',
    value: 'Python, Go, C++, Java, Scala, TypeScript, Rust, SQL',
  },
  {
    label: 'Infrastructure',
    value: 'TPU/GPU Fleets, Kubernetes, Docker, Terraform, Apache Kafka, Redis, PostgreSQL, GCP, AWS',
  },
  {
    label: 'Frameworks',
    value: 'gRPC, GraphQL, Spring Boot, React, Apache Spark, Delta Lake',
  },
  {
    label: 'Focus',
    value: 'ML infrastructure & fleet reliability, distributed systems, algorithms, Agile in the non-cultish sense',
  },
];
