import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { TechPill } from '@/components/ui/TechPill';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Entrek Engineering Portal — Morteza Mogharrab',
  description:
    'Case study: End-to-end operations platform for a Calgary oil and gas engineering firm — built solo, deployed to AWS.',
};

const METRICS = [
  { value: '$250K+', label: 'Agency replacement value' },
  { value: '8', label: 'Domain modules' },
  { value: '6', label: 'AI extraction pipelines' },
  { value: '< 3 months', label: 'Time to production' },
  { value: '1', label: 'Engineer (solo)' },
];

const MODULES = [
  { module: 'Projects', functionality: 'Project lifecycle, status, deliverables', ai: '✓ PIF extraction' },
  { module: 'Procurement', functionality: 'Purchase orders, shipping, vendor quotes', ai: '✓ PO extraction' },
  { module: 'Bid Spread', functionality: 'Vendor proposals, comparison tables, leveling', ai: '✓ Proposal extraction + leveling' },
  { module: 'Invoices', functionality: 'Invoice management, approval workflows', ai: '✓ Invoice extraction' },
  { module: 'Field Tickets', functionality: 'Field operations documentation', ai: '✓ Field ticket extraction' },
  { module: 'Cost Codes', functionality: 'Project cost structure, client mappings', ai: '✓ AI categorization' },
  { module: 'Budget', functionality: 'Budget tracking, burn analysis, reporting', ai: '✓ Budget extraction' },
  { module: 'P&ID Copilot', functionality: 'Engineering drawing analysis, topology', ai: '✓ LLM agent' },
  { module: 'Clients', functionality: 'Client relationship management', ai: '—' },
  { module: 'Vendors', functionality: 'Vendor registry, document vault', ai: '—' },
  { module: 'Documents', functionality: 'Hierarchical folder system', ai: '—' },
  { module: 'Dashboard', functionality: 'KPIs, charts, activity feed', ai: '—' },
  { module: 'Meeting Minutes', functionality: 'Rich text editor, PDF/DOCX export', ai: '—' },
  { module: 'Users', functionality: 'Admin management, RBAC', ai: '—' },
];

const LEARNINGS = [
  {
    title: 'asyncio.gather() is the right tool for batch AI processing',
    body: 'Sequential page processing for a 70-page document takes ~75 seconds. Concurrent batch processing takes ~25 seconds. The math is simple; the implementation requires careful error handling per batch so one page failure doesn\'t fail the entire document.',
  },
  {
    title: 'Feature flags at build time are underused',
    body: 'Injecting feature flags as Docker build arguments means the same codebase powers staging and production with different feature sets. No runtime flag storage, no configuration service, no additional complexity.',
  },
  {
    title: 'AI engines should be completely isolated from business logic',
    body: 'A bug in proposal_engine.py cannot affect bid_spread_router.py because they\'re in separate packages with no shared state. This isolation took discipline to maintain — the temptation to share utility functions is constant. The discipline pays off when debugging at 11pm.',
  },
  {
    title: 'Defensive merging matters for multi-page documents',
    body: 'A 70-page proposal might have the vendor name on page 1 and the total price on page 47. The merge strategy was designed after observing how information distributes across real documents. Generic "take first batch" strategies fail in practice.',
  },
];

const OUTCOMES = [
  { metric: 'Procurement tracking', before: 'Spreadsheets + email', after: 'Unified PO system with AI extraction' },
  { metric: 'Invoice processing', before: 'Manual data entry', after: 'AI extraction in < 30 seconds' },
  { metric: 'Bid evaluation', before: 'Multiple spreadsheets', after: 'Unified comparison with leveling assist' },
  { metric: 'Field documentation', before: 'Paper forms', after: 'Digital with AI extraction' },
  { metric: 'Project visibility', before: 'Siloed per person', after: 'Dashboard with real-time KPIs' },
  { metric: 'Document storage', before: 'Email attachments', after: 'Hierarchical vault with search' },
  { metric: 'Engineering drawings', before: 'Static PDF/DXF', after: 'Queryable via LLM agent' },
];

const ADR = [
  {
    q: 'Why Feature-Sliced Design?',
    a: 'Each module needed to be independently deployable, independently testable, and independently understandable. When a bug appears in bid_spread, I need to know it cannot cascade into invoice behavior. FSD enforces this at the filesystem level.',
  },
  {
    q: 'Why FastAPI over Django/Flask?',
    a: 'AsyncIO is mandatory for concurrent AI extraction. Django\'s sync-first architecture would have required workarounds for asyncio.gather(). FastAPI with async endpoint handlers is the correct tool.',
  },
  {
    q: 'Why Alembic for migrations?',
    a: 'A system this complex requires migration tracking. Alembic\'s version-controlled schema changes are non-negotiable for a production system with real data. Dropping and recreating tables is not an option once Entrek has operational data.',
  },
  {
    q: 'Why not a task queue for AI extraction?',
    a: 'The documents are small enough that asyncio.gather() within a single request lifecycle provides sufficient concurrency. A task queue adds operational complexity — Redis, worker processes, monitoring — without meaningful benefit at current scale. Explicit decision to revisit as volume grows.',
  },
];

export default function EntrekPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back nav */}
          <FadeIn direction="none">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              Back to Portfolio
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Flagship', 'Full-Stack', 'Industrial SaaS', 'Confidential'].map((b) => (
                <span
                  key={b}
                  className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-subtle)] rounded-full px-2.5 py-0.5"
                >
                  {b}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
              Entrek Engineering
              <br />
              Operations Portal
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Centralized operations platform for a Calgary oil and gas EPCM firm — project
              management, procurement, AI document extraction, and cloud infrastructure.
              Designed and built solo. In production on AWS.
            </p>
          </FadeIn>

          {/* Metrics */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-10">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                >
                  <div className="text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-1 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Confidentiality banner */}
          <FadeIn delay={0.15}>
            <div className="border-l-2 border-[var(--border-default)] pl-4 py-1 my-8">
              <p className="text-sm text-[var(--text-tertiary)]">
                Confidential internal system. Architecture, technical decisions, and measurable
                outcomes are documented below. Screenshots and source code are not publicly
                available due to enterprise security requirements.
              </p>
            </div>
          </FadeIn>

          {/* Overview */}
          <FadeIn delay={0.2}>
            <SectionDivider number="01" title="Project Overview" />
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Entrek Engineering Ltd. is a Calgary-based oil and gas engineering and project
                management firm. Prior to this system, their operations ran across spreadsheets,
                email threads, and disconnected tools — managing projects, vendors, clients,
                procurement, field tickets, invoices, and bid evaluations without a unified
                platform.
              </p>
              <p>
                I was engaged as the sole developer to build their entire technical
                infrastructure from zero — architecture, frontend, backend, database, AI
                integration, DevOps, and cloud deployment.
              </p>
              <p>
                The result: a production-grade multi-module web platform deployed on AWS, with a
                React/TypeScript frontend, FastAPI/Python backend, PostgreSQL database, and six
                integrated AI extraction pipelines — delivered in under three months.
              </p>
            </div>
          </FadeIn>

          {/* Architecture */}
          <FadeIn delay={0.05}>
            <SectionDivider number="02" title="System Architecture" />
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  label: 'Frontend',
                  content: `React 19 · TypeScript · Vite · Tailwind CSS\nZustand · TanStack Query · Zod · React Hook Form\nRecharts · Framer Motion · Feature-Sliced Design`,
                },
                {
                  label: 'Backend',
                  content: `Python 3.12 · FastAPI · SQLAlchemy 2.0 · Alembic · Pydantic\nPostgreSQL (AWS RDS) · JWT authentication · RBAC\nAWS S3 (file storage) · APScheduler (notifications)`,
                },
                {
                  label: 'AI & Document Processing',
                  content: `OpenAI GPT-4 Vision · AsyncOpenAI · asyncio.gather()\nTesseract OCR (orientation correction + preprocessing)\nLibreOffice (document conversion) · ODA SDK (DXF/CAD)\npdfplumber · python-docx · pdf2image`,
                },
                {
                  label: 'Infrastructure',
                  content: `AWS EC2 · AWS RDS PostgreSQL · AWS S3 · Route 53 · VPC\nDocker + Docker Compose · Nginx · Let's Encrypt TLS 1.3\nStaging + Production environments\nFeature flags via Vite build arguments`,
                },
              ].map((block) => (
                <div
                  key={block.label}
                  className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-3">
                    {block.label}
                  </p>
                  <pre className="text-xs text-[var(--text-secondary)] whitespace-pre-wrap font-mono leading-relaxed">
                    {block.content}
                  </pre>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Domain Modules */}
          <FadeIn delay={0.05}>
            <SectionDivider number="03" title="Domain Modules" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Module</th>
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Core Functionality</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">AI Engine</th>
                  </tr>
                </thead>
                <tbody>
                  {MODULES.map((row) => (
                    <tr key={row.module} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.module}</td>
                      <td className="py-3 pr-6 text-[var(--text-secondary)]">{row.functionality}</td>
                      <td className="py-3 font-mono text-xs text-[var(--text-tertiary)] whitespace-nowrap">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* AI Document Extraction */}
          <FadeIn delay={0.05}>
            <SectionDivider number="04" title="AI Document Extraction Architecture" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              The most technically demanding aspect of the system. Six separate AI engines handle
              different document types — each with identical architectural patterns but tuned for
              different schemas and document characteristics.
            </p>
            <CodeBlock
              code={`# Concurrent batch processing — 70-page document in ~25s instead of ~75s
async def extract_document(file_path: str) -> dict:
    pages = await load_and_preprocess_pages(file_path)

    # Preprocessing pipeline per page:
    # 1. Orientation correction (pytesseract OSD)
    # 2. Contrast enhancement + sharpening + upscaling
    # 3. Send to GPT-4 Vision

    batches = [pages[i:i+20] for i in range(0, len(pages), 20)]

    # All batches processed concurrently
    results = await asyncio.gather(
        *[process_batch(batch) for batch in batches]
    )

    # Intelligent merge: first-non-null wins for core fields,
    # last-non-null for equipment attributes
    return merge_results(results)`}
            />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mt-4">
              Retry logic: 3-attempt exponential backoff on both JSON parse errors and OpenAI API
              errors. Force-JSON response format prevents free-text deviation. Intelligent result
              merging handles multi-page documents where fields span pages.
            </p>
          </FadeIn>

          {/* P&ID Copilot */}
          <FadeIn delay={0.05}>
            <SectionDivider number="05" title="P&ID Copilot (Engineering Drawing Intelligence)" />
            <div className="space-y-3 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most novel module. Parses DXF CAD files (engineering process-and-instrumentation
                diagrams) using ezdxf, extracts equipment topology, and runs an LLM agent over the
                extracted data for safety auditing, equipment inventory, and Q&A.
              </p>
              <p>
                <span className="text-[var(--text-primary)]">Pipeline:</span> DXF → geometry
                extraction → equipment classification → topology graph → LangChain agent →
                structured output.
              </p>
              <p>
                This is the kind of feature that would take a consultant 3–4 weeks to scope. I
                built it as one module of fourteen.
              </p>
            </div>
          </FadeIn>

          {/* Infrastructure */}
          <FadeIn delay={0.05}>
            <SectionDivider number="06" title="Multi-Environment Infrastructure" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Production and staging environments with complete isolation — separate EC2 instances,
              separate RDS databases, separate S3 buckets. Feature flags injected at Docker build
              time mean the same codebase powers both environments with different feature sets.
              Nginx configured with TLS 1.2/1.3, gzip compression, 600s proxy timeouts for AI
              operations, and 200MB client body size for document uploads.
            </p>
          </FadeIn>

          {/* ADR */}
          <FadeIn delay={0.05}>
            <SectionDivider number="07" title="Architecture Decision Record" />
            <div className="space-y-4">
              {ADR.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                >
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{item.q}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Outcomes */}
          <FadeIn delay={0.05}>
            <SectionDivider number="08" title="Quantitative Outcomes" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Metric</th>
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Before</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">After</th>
                  </tr>
                </thead>
                <tbody>
                  {OUTCOMES.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.metric}</td>
                      <td className="py-3 pr-6 text-[var(--text-tertiary)]">{row.before}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Learnings */}
          <FadeIn delay={0.05}>
            <SectionDivider number="09" title="Engineering Learnings" />
            <div className="grid md:grid-cols-2 gap-4">
              {LEARNINGS.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                >
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Summary cards */}
          <FadeIn delay={0.05}>
            <div className="grid md:grid-cols-3 gap-4 mt-16">
              {[
                {
                  title: 'Solo full-stack ownership',
                  body: 'Complete system designed, built, and deployed by one engineer — frontend, backend, AI pipelines, database, infrastructure, and DevOps.',
                },
                {
                  title: 'Production infrastructure',
                  body: 'AWS EC2, RDS, S3, Route 53 with separate staging and production environments, TLS 1.3, Docker, health checks, and multi-stage builds.',
                },
                {
                  title: 'Industrial domain depth',
                  body: 'Built for oil and gas EPCM operations — bid spreads, field tickets, procurement, P&ID drawings. The domain knowledge is inseparable from the technical execution.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                >
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{card.title}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Tech stack pills */}
          <FadeIn delay={0.05}>
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-4">
                Full Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query',
                  'Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Alembic', 'Pydantic',
                  'OpenAI GPT-4 Vision', 'LangChain', 'Tesseract OCR', 'ezdxf',
                  'PostgreSQL', 'AWS EC2', 'AWS RDS', 'AWS S3', 'Route 53',
                  'Docker', 'Nginx', 'TLS 1.3',
                ].map((tag) => (
                  <TechPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

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
