export interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  type: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string[];
  tags: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  specialization: string;
  period: string;
  gpa: string;
  award: string | null;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'entrek',
    company: 'Entrek Engineering Ltd.',
    title: 'Software Systems & AI Developer',
    type: 'Permanent Full-time',
    location: 'Calgary, Alberta',
    period: 'Apr 2026 – Present',
    isCurrent: true,
    description: [
      'Sole engineer responsible for the complete technical infrastructure of a Calgary oil and gas engineering firm — designed, built, and deployed from zero.',
      'Built a centralized operations portal covering project management, procurement workflows, bid spread analysis, invoice processing, field ticket management, document storage, and client relationship management — production-deployed on AWS.',
      'Implemented AI extraction pipelines for invoices, purchase orders, field tickets, and vendor proposals using OpenAI Vision with concurrent batch processing and structured JSON output.',
      'Built a P&ID Copilot module parsing engineering DXF drawings and running an LLM agent over extracted equipment topology for safety auditing and equipment inventory.',
    ],
    tags: ['Full-Stack', 'Cloud Infrastructure', 'AI Integration', 'Document Processing', 'DevOps'],
  },
  {
    id: 'independent',
    company: 'Independent Practice',
    title: 'Independent Software Engineer & AI Integrator',
    type: 'Self-employed',
    location: 'Edmonton, Alberta',
    period: 'Sep 2025 – Apr 2026',
    isCurrent: false,
    description: [
      "Applied R&D period building domain-specific AI systems for Alberta's industrial sector and delivering proof-of-concept architectures for corporate clients.",
      'AER Compliance Agent: LangChain agentic system orchestrating 7 tools (ChromaDB RAG, equipment DB, email, calendar, maintenance logging) — cut full compliance audit cycles from 2 hours to 30 seconds.',
      'LLM Document Intelligence Pipeline: Hybrid inference engine processing 1,000+ structured records concurrently across OpenAI, Anthropic, and local Ollama — 450+ records/minute with thread-safe rate limiting.',
    ],
    tags: ['Agentic AI', 'LangChain', 'RAG', 'Python', 'ChromaDB'],
  },
  {
    id: 'piko',
    company: 'Piko Digital Ltd.',
    title: 'Full Stack Software Engineer (Core Platform)',
    type: 'Contract Full-time',
    location: 'Edmonton, Alberta',
    period: 'May 2024 – Aug 2025',
    isCurrent: false,
    description: [
      'Sole engineer responsible for the entire platform — microservice architecture, frontend, mobile, data layer, and operations — scaled to 1,000+ daily active users.',
      'Built real-time analytics dashboard aggregating 15+ data sources → 300% increase in platform intelligence.',
      'Automated JWT auth + RBAC user governance → 60% reduction in administrative processing time.',
      'Architected 50+ reusable React Native/TypeScript components for iOS, Android, and web → 40% faster dev cycles.',
      'Built an AI automation pipeline using n8n, Gemini, and GPT-4 Vision — 200+ brand assets/day at 97.5% lower cost than manual production.',
    ],
    tags: ['Spring Boot', 'React', 'React Native', 'TypeScript', 'PostgreSQL', 'GraphQL', 'n8n', 'Docker'],
  },
];

// Only University of Alberta — the credential that matters for this market
export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of Alberta',
    degree: 'Master of Computing Science',
    specialization: 'Multimedia',
    period: 'Sep 2023 – Apr 2025',
    gpa: '4.0 / 4.0',
    award: 'Graduate Community Engagement Award · Mar 2025',
  },
];
