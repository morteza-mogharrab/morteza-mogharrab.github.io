import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { TechPill } from '@/components/ui/TechPill';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'AER Compliance Agent — Morteza Mogharrab',
  description:
    'Case study: Autonomous AI agent for AER industrial compliance — 7-tool LangChain orchestration, 240× faster than manual.',
};

const METRICS = [
  { value: '240×', label: 'Faster than manual audit' },
  { value: '7', label: 'Orchestrated tools' },
  { value: '<30s', label: 'Complete audit time' },
  { value: '2,653', label: 'Indexed RAG chunks' },
];

const COMPARISON = [
  { aspect: 'Role', rag: 'Passive Q&A', agent: 'Active task execution' },
  { aspect: 'User input', rag: '"Tell me about X"', agent: '"Audit X and handle it"' },
  { aspect: 'Tools', rag: '1 — vector search', agent: '7+ — search, DB, email, calendar, logs' },
  { aspect: 'Decision making', rag: 'User-driven', agent: 'AI-driven, autonomous' },
  { aspect: 'Actions taken', rag: 'None — just responds', agent: 'Email, schedule, log, report' },
];

const WORKFLOW = [
  { step: '01', title: 'Knowledge retrieval', desc: 'Calls search_aer_directives → Retrieves 365-day calibration requirement from ChromaDB' },
  { step: '02', title: 'Data collection', desc: 'Calls get_facility_equipment → Fetches 4 equipment items with calibration dates' },
  { step: '03', title: 'Compliance analysis', desc: 'Calls check_calibration_compliance → Identifies 2 items overdue (400 and 380 days)' },
  { step: '04', title: 'Report distribution', desc: 'Calls send_compliance_report → Emails full report with specific equipment IDs' },
  { step: '05', title: 'Follow-up planning', desc: 'Calls schedule_follow_up → Creates calendar entry, returns confirmation ID' },
  { step: '06', title: 'Documentation', desc: 'Calls log_maintenance_action ×2 → Creates maintenance entry per violation' },
];

const RESULTS = [
  { metric: 'Complete audit time', manual: '2+ hours', agent: '< 30 seconds' },
  { metric: 'Manual steps', manual: '10–15 steps', agent: '0 — fully autonomous' },
  { metric: 'Report generation', manual: 'Manual compilation', agent: 'Auto-generated and emailed' },
  { metric: 'Follow-up scheduling', manual: 'Manual calendar entry', agent: 'Automatic with confirmation ID' },
  { metric: 'Consistency', manual: 'Varies by analyst', agent: 'Deterministic execution' },
];

const LEARNINGS = [
  {
    title: 'Function calling is the unlock for agents',
    body: 'The agent makes autonomous decisions about tool sequencing. This is fundamentally different from hard-coded logic or simple RAG retrieval, and the difference is not subtle in practice.',
  },
  {
    title: 'Tool descriptions are the interface',
    body: 'Clear, detailed docstrings directly determine agent performance. The LLM reads these descriptions to decide which tool to invoke — ambiguous descriptions cause wrong selection more reliably than any other failure mode.',
  },
  {
    title: 'Temperature 0 is mandatory for compliance',
    body: 'Regulatory domains require deterministic behaviour. Temperature 0 ensures consistent tool selection and prevents creative but incorrect responses.',
  },
  {
    title: 'Pydantic schemas prevent silent failures',
    body: 'When LLMs generate function inputs, validation catches errors before execution. Silent failures in compliance workflows are unacceptable.',
  },
];

export default function AERAgentPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back */}
          <FadeIn direction="none">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-12">
              <ArrowLeft size={14} />
              Back to Portfolio
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Agentic AI', 'Open Source', 'Industrial'].map((b) => (
                <span key={b} className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-subtle)] rounded-full px-2.5 py-0.5">
                  {b}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
              AER Industrial Compliance Agent
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">
              Autonomous AI agent for AER industrial compliance — 7-tool LangChain orchestration
              over real Alberta Energy Regulator directives. Replaces a 2-hour manual audit with a
              30-second autonomous workflow.
            </p>
            <a
              href="https://github.com/morteza-mogharrab/aer-compliance-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink size={14} />
              View on GitHub
            </a>
          </FadeIn>

          {/* Metrics */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-10">
              {METRICS.map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <div className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">{m.value}</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-1 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Overview */}
          <FadeIn delay={0.15}>
            <SectionDivider number="01" title="Overview" />
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Traditional RAG systems answer questions. This agent performs work. The shift from
                passive knowledge retrieval to active operational execution is what makes this
                genuinely useful in an industrial compliance context.
              </p>
              <p>
                A compliance officer doesn&apos;t just need answers about AER directives — they need the
                audit done, the report sent, the follow-up scheduled, and the maintenance logged.
                That&apos;s what this agent does: it receives a plain-English instruction and
                autonomously orchestrates 7 tools to complete the full workflow.
              </p>
            </div>
          </FadeIn>

          {/* RAG vs Agent */}
          <FadeIn delay={0.05}>
            <SectionDivider number="02" title="RAG vs. Autonomous Agent" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Aspect</th>
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Traditional RAG</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Autonomous Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.aspect} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.aspect}</td>
                      <td className="py-3 pr-6 text-[var(--text-tertiary)]">{row.rag}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Agent Architecture */}
          <FadeIn delay={0.05}>
            <SectionDivider number="03" title="Agent Architecture" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              The agent receives a goal, reasons about it using GPT-4o function calling, selects
              tools, processes results, and iterates until the goal is achieved. No hardcoded
              decision trees.
            </p>
            <CodeBlock code={`class AERComplianceAgent:
    def __init__(self, api_key: str, model: str = "gpt-4o"):
        self.llm = ChatOpenAI(
            model=model,
            temperature=0,       # Deterministic — critical for compliance
            api_key=api_key
        )
        self.agent = create_tool_calling_agent(
            self.llm,
            audit_tools,         # 7 available tools
            self.prompt          # Custom system prompt for AER context
        )
        self.agent_executor = AgentExecutor(
            agent=self.agent,
            tools=audit_tools,
            verbose=True,        # Full tool call transparency
            max_iterations=15,   # Cost cap — prevents runaway execution
            handle_parsing_errors=True
        )`} />

            {/* Tool list */}
            <div className="mt-4 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-3">7 Available Tools</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'search_aer_directives',
                  'get_facility_equipment',
                  'check_calibration_compliance',
                  'send_compliance_report',
                  'schedule_follow_up',
                  'log_maintenance_action',
                  'list_facilities',
                ].map((tool) => (
                  <span key={tool} className="font-mono text-xs text-[var(--code-function)] bg-[var(--code-bg)] border border-[var(--code-border)] rounded px-2 py-0.5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* End-to-end workflow */}
          <FadeIn delay={0.05}>
            <SectionDivider number="04" title="End-to-End Workflow" />
            <div className="mb-4 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <p className="font-mono text-xs text-[var(--text-tertiary)] mb-1">Instruction</p>
              <p className="text-sm text-[var(--text-secondary)] italic">
                &quot;Audit facility FAC-AB-001 for Directive 017 compliance and email results to safety@example.com&quot;
              </p>
            </div>

            <div className="space-y-3">
              {WORKFLOW.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-mono text-xs text-[var(--text-tertiary)] flex-shrink-0 pt-0.5">{item.step}</span>
                  <div>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item.title}</span>
                    <span className="text-sm text-[var(--text-secondary)]"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--text-secondary)] mt-4 leading-relaxed italic border-l-2 border-[var(--border-default)] pl-4">
              Complete compliance audit in under 30 seconds with 6 tool invocations. Zero manual
              intervention.
            </p>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.05}>
            <SectionDivider number="05" title="Results" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Metric</th>
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Manual</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">With Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.metric}</td>
                      <td className="py-3 pr-6 text-[var(--text-tertiary)]">{row.manual}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Learnings */}
          <FadeIn delay={0.05}>
            <SectionDivider number="06" title="Engineering Learnings" />
            <div className="grid md:grid-cols-2 gap-4">
              {LEARNINGS.map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2 leading-snug">{item.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Stack + Quick start */}
          <FadeIn delay={0.05}>
            <SectionDivider number="07" title="Stack & Quick Start" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-2 mb-6">
                  {[
                    { label: 'Agent', content: 'LangChain 0.3.13 · LangChain-OpenAI 0.2.14 · GPT-4o · Pydantic 2.0' },
                    { label: 'RAG', content: 'ChromaDB 0.4.22 · OpenAI Embeddings (text-embedding-3-small)' },
                    { label: 'UI', content: 'Gradio 6.0 · Custom CSS · WCAG 2.1 AA' },
                    { label: 'Other', content: 'Python 3.9+ · pdfplumber · python-dotenv' },
                  ].map((block) => (
                    <div key={block.label}>
                      <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-widest">{block.label}: </span>
                      <span className="text-xs text-[var(--text-secondary)]">{block.content}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'LangChain', 'GPT-4o', 'ChromaDB', 'RAG', 'Pydantic 2.0', 'Gradio 6.0'].map((tag) => (
                    <TechPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <CodeBlock code={`git clone https://github.com/morteza-mogharrab/aer-compliance-agent.git
cd aer-compliance-agent
python3 -m venv venv && source venv/bin/activate
pip install -r requirements_agent.txt
export OPENAI_API_KEY='your-key-here'
python3 agent_app.py   # Web interface → localhost:7860`} />
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-14">
      <span className="font-mono text-sm text-[var(--text-tertiary)]">{number}</span>
      <div className="h-px w-8 bg-[var(--border-default)]" />
      <h3 className="text-lg font-medium text-[var(--text-primary)]">{title}</h3>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-[var(--code-bg)] border border-[var(--code-border)] rounded-lg p-5 overflow-x-auto my-4">
      <code className="font-mono text-sm text-[var(--code-text)] whitespace-pre">{code}</code>
    </pre>
  );
}
