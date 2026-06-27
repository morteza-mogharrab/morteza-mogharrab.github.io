export function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-xs text-[var(--text-tertiary)] font-mono">
      {label}
    </span>
  );
}
