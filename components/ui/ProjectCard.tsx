import Link from 'next/link';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { TechPill } from './TechPill';
import type { Project } from '@/lib/projects';

// ─── Flagship Card ────────────────────────────────────────────────────────────

export function ProjectCardFlagship({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group block">
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] transition-colors duration-200 hover:bg-[var(--bg-hover)] hover:border-[var(--border-strong)] cursor-pointer overflow-hidden">
        {/* Main content */}
        <div className="p-6">
          {/* Top row */}
          <div className="flex items-start justify-between mb-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] leading-tight pr-4">
              {project.badge}
            </span>
            <div className="flex items-center gap-2.5 flex-shrink-0">
              {project.isConfidential && (
                <span className="hidden sm:flex items-center gap-1 text-xs text-[var(--text-muted)] font-mono">
                  <Lock size={10} />
                  Confidential
                </span>
              )}
              <ArrowRight
                size={16}
                className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors duration-200"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 max-w-2xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TechPill key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div className="border-t border-[var(--border-subtle)] px-6 py-4 flex flex-wrap gap-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                {metric.value}
              </span>
              <span className="text-xs text-[var(--text-tertiary)]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────

export function ProjectCardFeatured({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] transition-colors duration-200 hover:bg-[var(--bg-hover)] hover:border-[var(--border-strong)] overflow-hidden">
      {/* Main content */}
      <div className="p-6 flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
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
                onClick={(e) => e.stopPropagation()}
                aria-label="View on GitHub"
              >
                <ExternalLink size={14} />
              </a>
            )}
            <Link
              href={project.href}
              className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label={`View ${project.title} case study`}
            >
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Title */}
        <Link href={project.href}>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight mb-2 hover:text-[var(--accent)] transition-colors duration-200">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Metrics 2×2 grid */}
      <div className="px-6 pb-4 grid grid-cols-2 gap-2">
        {project.metrics.slice(0, 4).map((metric, i) => (
          <div
            key={i}
            className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]"
          >
            <div className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
              {metric.value}
            </div>
            <div className="text-xs text-[var(--text-tertiary)] mt-0.5 leading-tight">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech pills */}
      <div className="px-6 pb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TechPill key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
