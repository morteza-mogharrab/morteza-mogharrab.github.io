import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeader number="04" label="Contact" headline="Let's build something worth building." />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 max-w-lg space-y-4">
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Based in Calgary. Building AI-powered operational software for Alberta&apos;s
              industrial sector — and always open to conversations about hard problems,
              contract work, or what comes next.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              If you&apos;re an engineering firm, environmental consultancy, or industrial
              operator in Alberta with a workflow problem that costs real money, I&apos;d
              like to hear about it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a
              href="mailto:morteza.mgb@gmail.com"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              morteza.mgb@gmail.com
            </a>
            <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
            <a
              href="https://linkedin.com/in/morteza-mogharrab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
            <a
              href="https://github.com/morteza-mogharrab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
