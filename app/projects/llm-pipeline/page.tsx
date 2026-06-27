import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { TechPill } from '@/components/ui/TechPill';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'LLM Document Intelligence — Morteza Mogharrab',
  description:
    'Case study: Production document extraction pipeline — 450+ records/minute, 98%+ accuracy, three switchable LLM backends.',
};

const METRICS = [
  { value: '450+', label: 'Records / minute' },
  { value: '98%+', label: 'Extraction accuracy' },
  { value: '3', label: 'LLM backends' },
  { value: '$0–$0.50', label: 'Per 1K records' },
];

const CHALLENGES = [
  {
    title: 'Rate limiting at scale',
    body: 'Cloud APIs throttle at 50–500 requests/minute. Naive concurrent implementations hit limits within seconds and fail silently.',
  },
  {
    title: 'Cost management',
    body: 'Processing 10K documents costs $5–$50 depending on backend. Without routing logic, cloud bills spiral unpredictably.',
  },
  {
    title: 'Reliability under failure',
    body: 'Network timeouts, API 429s, and malformed responses are guaranteed in production. Systems that don\'t handle them corrupt output silently.',
  },
  {
    title: 'Vendor lock-in',
    body: 'Single-provider dependency creates risk. API deprecations and price changes require re-engineering instead of a configuration change.',
  },
];

const BACKENDS = [
  { backend: 'OpenAI GPT-4o-mini', throughput: '450 req/min', cost: '$0.50', bestFor: 'High-volume batch' },
  { backend: 'Anthropic Claude Sonnet', throughput: '45 req/min', cost: '$3.00', bestFor: 'Research-intensive' },
  { backend: 'Ollama (Qwen 2.5-32B)', throughput: 'Hardware-bound', cost: '$0', bestFor: 'Privacy-sensitive' },
];

const ACCURACY = [
  { backend: 'Ollama (Qwen 2.5-32B)', accuracy: '98.1%' },
  { backend: 'OpenAI (GPT-4o-mini)', accuracy: '99.2%' },
  { backend: 'Anthropic (Claude Sonnet)', accuracy: '99.5%' },
];

const RESULTS = [
  { metric: 'Processing time (1K docs)', manual: '~100 hours', system: '~3 minutes', improvement: '2,000× faster' },
  { metric: 'Cost per 1K docs', manual: '$2,000 (labour)', system: '$0.50 (OpenAI) / $0 (Ollama)', improvement: '99.98% reduction' },
  { metric: 'Extraction accuracy', manual: '~95% (human error)', system: '98%+ validated', improvement: '+3%' },
  { metric: 'Throughput', manual: '10/hour', system: '450/minute', improvement: '2,700× increase' },
];

const LEARNINGS = [
  {
    title: 'More workers is not always faster',
    body: '20 workers underperforms 10 for I/O-bound LLM calls due to thread-switch overhead. Optimal worker count is empirically 2× CPU cores — always measure, never assume linearity.',
  },
  {
    title: 'Token budgets bind harder than request counts',
    body: 'Rate limit errors on well-tuned request counts usually trace to the token-per-minute cap. Dual enforcement on both constraints is necessary.',
  },
  {
    title: 'LLMs require defensive parsing',
    body: 'Without strict schema enforcement and fuzzy matching, ~2% of responses fail to parse on first attempt. Design for this — assume models will deviate.',
  },
  {
    title: 'Prompt examples improve compliance 20%+',
    body: 'Adding a single well-formed output example to the system prompt reduced first-pass parse failures by over 20% across all three backends.',
  },
];

export default function LLMPipelinePage() {
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
              {['AI Engineering', 'Open Source', 'Production'].map((b) => (
                <span key={b} className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-subtle)] rounded-full px-2.5 py-0.5">
                  {b}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
              Multi-Model LLM Document Intelligence
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">
              Production document extraction pipeline — 450+ records/minute, 98%+ accuracy, and
              three switchable LLM backends (OpenAI, Anthropic, Ollama local). Built for
              cost-optimized batch processing at scale.
            </p>
            <a
              href="https://github.com/morteza-mogharrab/llm-document-intelligence"
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
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Modern enterprises process thousands of documents daily. LLM APIs offer powerful NLU,
              but production deployment introduces problems that don&apos;t exist in prototypes: rate
              limits hit within seconds, costs spiral unpredictably, and malformed responses corrupt
              output datasets silently. This system solves each of those problems systematically.
            </p>
          </FadeIn>

          {/* Engineering Challenges */}
          <FadeIn delay={0.05}>
            <SectionDivider number="02" title="The Engineering Challenges" />
            <div className="grid md:grid-cols-2 gap-4">
              {CHALLENGES.map((c, i) => (
                <div key={i} className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{c.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Multi-Backend Strategy */}
          <FadeIn delay={0.05}>
            <SectionDivider number="03" title="Multi-Backend via Strategy Pattern" />
            <CodeBlock code={`class DocumentAnalyzer:
    """Backend-agnostic document processing interface."""
    def analyze_document(self, row_data: dict) -> dict:
        raise NotImplementedError

# Caller code — identical for all three backends
analyzer = get_analyzer(backend=config.BACKEND)  # "openai" | "anthropic" | "ollama"
result = analyzer.analyze_document(row)`} />

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    {['Backend', 'Throughput', 'Cost per 1K', 'Best for'].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BACKENDS.map((row) => (
                    <tr key={row.backend} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.backend}</td>
                      <td className="py-3 pr-6 text-[var(--text-secondary)]">{row.throughput}</td>
                      <td className="py-3 pr-6 text-[var(--text-secondary)]">{row.cost}</td>
                      <td className="py-3 text-[var(--text-tertiary)]">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--text-tertiary)] mt-3 leading-relaxed">
              At scale (10K docs/day), switching from OpenAI to Ollama saves ~$1,825/year with no code changes.
            </p>
          </FadeIn>

          {/* Rate Limiter */}
          <FadeIn delay={0.05}>
            <SectionDivider number="04" title="Thread-Safe Token Bucket Rate Limiter" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Token bucket algorithm with threading.Lock for mutual exclusion and sliding deque
              window for accurate per-minute rate calculation. Dual enforcement on both request
              count AND estimated token consumption — requests per minute is often not the binding
              constraint.
            </p>
            <CodeBlock code={`class ThreadSafeRateLimiter:
    def __init__(self, max_per_minute: int, tokens_per_request: int,
                 max_tokens_per_minute: int):
        self.lock = Lock()
        self.timestamps = deque()
        # Enforce the binding constraint — whichever limit hits first
        safe_rate = min(
            max_per_minute,
            int((max_tokens_per_minute / tokens_per_request) * 0.85)
        )
        self.safe_rate = safe_rate

    def acquire(self):
        with self.lock:
            now = time.monotonic()
            while self.timestamps and now - self.timestamps[0] >= 60:
                self.timestamps.popleft()
            if len(self.timestamps) >= self.safe_rate:
                sleep_for = 60 - (now - self.timestamps[0])
                time.sleep(sleep_for)
            self.timestamps.append(time.monotonic())`} />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
              Zero rate limit errors in production, validated across 5,000+ requests. Maintaining 85% of
              theoretical maximum throughput.
            </p>
          </FadeIn>

          {/* Four-Layer Validation */}
          <FadeIn delay={0.05}>
            <SectionDivider number="05" title="Four-Layer Output Validation" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              LLMs occasionally deviate from required output format. Production systems cannot
              silently accept corrupted extractions.
            </p>
            <div className="space-y-3">
              {[
                { n: '01', title: 'Format validation', desc: 'Check for exactly 9 pipe-separated fields. Miscount triggers immediate retry with reinforced prompt.' },
                { n: '02', title: 'Type validation', desc: 'Integers must be integers, enums must match schema. Coerce where safe ("85" → 85), reject where not.' },
                { n: '03', title: 'Range validation', desc: 'Clamp scores to 0–100. Out-of-range values clamped with warning, not rejected.' },
                { n: '04', title: 'Fuzzy matching', desc: '"ontario", "ON", and "Ontario" all resolve correctly. Case-insensitive enum matching prevents unnecessary failures.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="font-mono text-xs text-[var(--text-tertiary)] flex-shrink-0">{item.n}</span>
                  <div>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item.title} — </span>
                    <span className="text-sm text-[var(--text-secondary)]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Parse accuracy */}
            <div className="mt-6 overflow-x-auto">
              <table className="text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-16 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Backend</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">First-pass accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {ACCURACY.map((row) => (
                    <tr key={row.backend} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-16 text-[var(--text-secondary)]">{row.backend}</td>
                      <td className="py-3 text-[var(--text-primary)] font-medium">{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.05}>
            <SectionDivider number="06" title="Results" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    {['Metric', 'Manual', 'With System', 'Improvement'].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.metric}</td>
                      <td className="py-3 pr-6 text-[var(--text-tertiary)]">{row.manual}</td>
                      <td className="py-3 pr-6 text-[var(--text-secondary)]">{row.system}</td>
                      <td className="py-3 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Learnings */}
          <FadeIn delay={0.05}>
            <SectionDivider number="07" title="Engineering Learnings" />
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
            <SectionDivider number="08" title="Stack & Quick Start" />
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python 3.9+', 'OpenAI SDK', 'Anthropic SDK', 'Ollama', 'pandas', 'tiktoken', 'ThreadPoolExecutor', 'Pydantic'].map((tag) => (
                    <TechPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <CodeBlock code={`git clone https://github.com/morteza-mogharrab/llm-document-intelligence.git
cd llm-document-intelligence && pip install -r requirements.txt
cp env.example .env  # Add your API key

python src/document_analyzer_openai.py    # GPT-4o-mini
python src/document_analyzer_anthropic.py # Claude Sonnet
python src/document_analyzer_ollama.py    # Local (free)`} />
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
