import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechPill } from '@/components/ui/TechPill';
import { EXPERIENCE, EDUCATION } from '@/lib/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeader number="03" label="Experience" headline="Work history" />
          <p className="text-[var(--text-secondary)] text-base mt-4 mb-12">
            Five years of production systems — from SMB consulting to enterprise platforms to
            industrial AI. Always end-to-end, always accountable for outcomes.
          </p>
        </FadeIn>

        {/* Experience timeline */}
        <div className="relative ml-4">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 border-l border-[var(--border-subtle)]" />

          <div className="space-y-0">
            {EXPERIENCE.map((entry, i) => (
              <FadeIn key={entry.id} delay={i * 0.06}>
                <div className="relative pl-8 pb-12">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-primary)] ${
                      entry.isCurrent
                        ? 'bg-[var(--text-primary)] animate-pulse-slow'
                        : 'bg-[var(--border-strong)]'
                    }`}
                  />

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1.5">
                    <span className="text-xs text-[var(--text-tertiary)] font-medium">
                      {entry.company}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">·</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{entry.type}</span>
                    <span className="text-xs text-[var(--text-muted)]">·</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{entry.period}</span>
                    <span className="text-xs text-[var(--text-muted)]">·</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{entry.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-medium text-[var(--text-primary)] mb-3">
                    {entry.title}
                  </h3>

                  {/* Description bullets */}
                  <ul className="space-y-1.5">
                    {entry.description.map((line, j) => (
                      <li
                        key={j}
                        className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--text-muted)] flex-shrink-0 mt-1">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {entry.tags.map((tag) => (
                      <TechPill key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={0.1}>
          <div className="mt-4">
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-8">
              Education
            </p>

            <div className="relative ml-4">
              <div className="absolute left-0 top-0 bottom-0 border-l border-[var(--border-subtle)]" />

              <div className="space-y-0">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="relative pl-8 pb-8">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--border-subtle)] border-2 border-[var(--bg-primary)]" />

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
                      <span className="text-xs text-[var(--text-tertiary)] font-medium">
                        {edu.school}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">·</span>
                      <span className="text-xs text-[var(--text-tertiary)]">{edu.period}</span>
                      <span className="text-xs text-[var(--text-muted)]">·</span>
                      <span className="text-xs text-[var(--text-tertiary)]">GPA {edu.gpa}</span>
                    </div>

                    <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">
                      {edu.degree}
                      <span className="font-normal text-[var(--text-secondary)]">
                        {' '} — {edu.specialization}
                      </span>
                    </h3>

                    {edu.award && (
                      <p className="text-xs text-[var(--text-tertiary)]">{edu.award}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
