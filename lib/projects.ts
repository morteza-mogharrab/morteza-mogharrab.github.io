export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  badge: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  href: string;
  githubUrl: string | null;
  isConfidential: boolean;
}

export interface ProjectsData {
  flagship: Project[];
  openSource: Project[];
}

export const PROJECTS: ProjectsData = {
  flagship: [
    {
      id: 'entrek',
      badge: 'Flagship · Enterprise · Confidential',
      title: 'Entrek Engineering Operations Portal',
      description:
        'End-to-end operations platform for a Calgary oil and gas EPCM firm — project management, procurement, invoices, field tickets, AI document extraction, and P&ID engineering drawing analysis. Built solo. In production on AWS.',
      metrics: [
        { value: '$250K+', label: 'Agency replacement value' },
        { value: '14', label: 'Feature modules' },
        { value: '6', label: 'AI extraction engines' },
        { value: 'Solo', label: 'Architect & engineer' },
      ],
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'LangChain', 'OpenAI'],
      href: '/projects/entrek',
      githubUrl: null,
      isConfidential: true,
    },
    {
      id: 'piko',
      badge: 'Enterprise Platform · Mobile · AI Automation',
      title: 'Piko Digital Platform',
      description:
        'Full-stack admin platform and cross-platform mobile app for a social platform scaled to 1,000+ daily active users — plus an AI automation pipeline that cut marketing asset production from $400 to $10 per asset.',
      metrics: [
        { value: '1,000+', label: 'Daily active users' },
        { value: '300%', label: 'Analytics improvement' },
        { value: '97.5%', label: 'Automation cost reduction' },
        { value: '3', label: 'Platforms (iOS · Android · Web)' },
      ],
      tags: ['React Native', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'GraphQL', 'n8n', 'Gemini', 'Docker'],
      href: '/projects/piko',
      githubUrl: null,
      isConfidential: true,
    },
  ],
  openSource: [
    {
      id: 'aer',
      badge: 'Agentic AI · Open Source · Industrial',
      title: 'AER Industrial Compliance Agent',
      description:
        'LangChain agent autonomously auditing Alberta Energy Regulator compliance — 7-tool orchestration with RAG over AER directives. Cuts 2-hour manual audits to under 30 seconds.',
      metrics: [
        { value: '240×', label: 'Faster than manual' },
        { value: '7', label: 'Orchestrated tools' },
        { value: '<30s', label: 'Full audit time' },
        { value: '2,653', label: 'RAG chunks' },
      ],
      tags: ['Python', 'LangChain', 'GPT-4o', 'ChromaDB', 'RAG', 'Pydantic'],
      href: '/projects/aer-agent',
      githubUrl: 'https://github.com/morteza-mogharrab/aer-compliance-agent',
      isConfidential: false,
    },
    {
      id: 'llm',
      badge: 'AI Engineering · Open Source · Production',
      title: 'Multi-Model LLM Document Intelligence',
      description:
        'Production document extraction pipeline — 450+ records/minute, 98%+ accuracy, three switchable LLM backends (OpenAI, Anthropic, Ollama) with zero code changes.',
      metrics: [
        { value: '450+', label: 'Records / minute' },
        { value: '98%+', label: 'Extraction accuracy' },
        { value: '3', label: 'LLM backends' },
        { value: '$0–$0.50', label: 'Per 1K records' },
      ],
      tags: ['Python', 'OpenAI', 'Anthropic', 'Ollama', 'ThreadPoolExecutor', 'Pydantic'],
      href: '/projects/llm-pipeline',
      githubUrl: 'https://github.com/morteza-mogharrab/llm-document-intelligence',
      isConfidential: false,
    },
  ],
};
