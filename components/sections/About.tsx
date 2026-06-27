import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';

const STACK_GROUPS = [
  {
    label: 'Core Engineering',
    items: 'React · TypeScript · Python · FastAPI · Java Spring Boot · PostgreSQL · Docker',
  },
  {
    label: 'AI & Data',
    items: 'LangChain · RAG Pipelines · ChromaDB · OpenAI · Anthropic · Tesseract OCR',
  },
  {
    label: 'Infrastructure',
    items: 'AWS (EC2 · RDS · S3 · Route 53) · Nginx · Alembic · CI/CD',
  },
];

const PARAGRAPHS = [
  "I'm Mort — a software architect based in Calgary, specializing in AI-powered operational platforms for Alberta's engineering and industrial sector.",
  'I hold a Master\'s in Computing Science from the University of Alberta (4.0 GPA), but my actual education happened building things. At Piko Digital, I owned the entire engineering platform — Spring Boot microservices, React and React Native frontends, PostgreSQL, GraphQL — scaling it to 1,000+ daily active users as the sole engineer responsible for the full stack.',
  'At Entrek Engineering, I designed and built their complete internal operations portal from scratch — project management, procurement, bid spreads, invoices, field tickets, AI document extraction, cloud infrastructure — deployed to production on AWS in under three months. The system handles the day-to-day operations of a Calgary oil and gas engineering firm. I was the only developer.',
  "That's the work I'm built for: taking a complex operational problem, understanding it deeply, and shipping a production system that makes expensive manual work unnecessary. I don't need a team to do it, and I don't need the requirements to be perfect before I start.",
  "Outside of software: I've spent years as a community music director, played piano and synthesizer since I was a teenager, and received the University of Alberta's Graduate Community Engagement Award in 2025 for volunteer work with elderly and disabled communities. Some things matter more than shipping velocity.",
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeader number="01" label="About" headline="I build the software, then I build it right." />
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 mt-12">
          {/* Left: body copy */}
          <div className="space-y-5">
            {PARAGRAPHS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">{p}</p>
              </FadeIn>
            ))}
          </div>

          {/* Right: tech stack + recognition */}
          <FadeIn delay={0.1} className="space-y-6">
            {STACK_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-2">
                  {group.label}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {group.items}
                </p>
              </div>
            ))}

            {/* Recognition */}
            <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-2">
                Recognition
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Graduate Community Engagement Award
              </p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                University of Alberta · Mar 2025
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
