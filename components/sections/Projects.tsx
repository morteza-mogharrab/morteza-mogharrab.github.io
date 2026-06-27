'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCardFlagship } from '@/components/ui/ProjectCard';
import { TechPill } from '@/components/ui/TechPill';
import { PROJECTS } from '@/lib/projects';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as number[] },
  },
};

export function Projects() {
  const openSourceRef = useRef(null);
  const openSourceInView = useInView(openSourceRef, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeader number="02" label="Projects" headline="Selected work" />
          <p className="text-[var(--text-secondary)] text-base mt-4 mb-12">
            Production systems built for real operations, real users, and real constraints — not demos.
          </p>
        </FadeIn>

        {/* Flagship cards — full width, stacked */}
        <div className="space-y-4 mb-10">
          {PROJECTS.flagship.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCardFlagship project={project} />
            </FadeIn>
          ))}
        </div>

        {/* Open source — compact 2-column cards, no full case study */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)]">
              Open Source
            </p>
            <div className="h-px flex-1 bg-[var(--border-subtle)]" />
          </div>
        </FadeIn>

        <motion.div
          ref={openSourceRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={openSourceInView ? 'visible' : 'hidden'}
        >
          {PROJECTS.openSource.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <div className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5 transition-colors duration-200 hover:bg-[var(--bg-hover)] hover:border-[var(--border-strong)]">
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] leading-tight pr-4">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <Link
                      href={project.href}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Title + description */}
                <Link href={project.href}>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] tracking-tight mb-1.5 hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Key metrics — inline, small */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  {project.metrics.slice(0, 3).map((m, i) => (
                    <div key={i} className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-[var(--text-primary)]">{m.value}</span>
                      <span className="text-xs text-[var(--text-tertiary)]">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
