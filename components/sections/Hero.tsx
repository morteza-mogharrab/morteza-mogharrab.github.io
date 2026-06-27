'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const METRICS = [
  { value: '1,000+', label: 'Daily active users scaled' },
  { value: '4.0 / 4.0', label: 'MSc GPA · Univ. of Alberta' },
  { value: '240×', label: 'Audit speed-up via AI agent' },
  { value: '$250K+', label: 'Enterprise systems delivered' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 pb-16">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Tagline */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-8"
        >
          // Software Architect · Industrial AI Systems · Alberta, Canada
        </motion.p>

        {/* Name */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-6"
        >
          <span className="text-[var(--text-primary)]">Morteza</span>
          <br />
          <span className="text-[var(--text-secondary)]">Mogharrab</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed mb-10"
        >
          I design and build software that replaces expensive manual workflows in
          Alberta&apos;s industrial sector — from full-stack engineering portals that run
          oil and gas operations, to AI agents that complete compliance audits in
          under 30 seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <Link
            href="#projects"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-200"
          >
            View My Work
          </Link>
          <a
            href="https://linkedin.com/in/morteza-mogharrab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-default)] text-[var(--text-secondary)] text-sm font-medium rounded-lg hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] transition-all duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/morteza-mogharrab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
          >
            github.com/morteza-mogharrab
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {METRICS.map((m) => (
            <div
              key={m.value}
              className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
            >
              <div className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-1 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
