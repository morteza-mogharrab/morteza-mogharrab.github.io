interface SectionHeaderProps {
  number: string;
  label: string;
  headline: string;
}

export function SectionHeader({ number, label, headline }: SectionHeaderProps) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-3">
        {number} / {label}
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
        {headline}
      </h2>
    </div>
  );
}
