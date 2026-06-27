interface MetricCardProps {
  value: string;
  label: string;
  size?: 'default' | 'small';
}

export function MetricCard({ value, label, size = 'default' }: MetricCardProps) {
  return (
    <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div
        className={
          size === 'small'
            ? 'text-xl font-semibold text-[var(--text-primary)] tracking-tight'
            : 'text-2xl font-semibold text-[var(--text-primary)] tracking-tight'
        }
      >
        {value}
      </div>
      <div className="text-xs text-[var(--text-tertiary)] mt-1 leading-tight">{label}</div>
    </div>
  );
}
