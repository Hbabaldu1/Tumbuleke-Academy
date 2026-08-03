type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
        ✦
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-text-primary)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{description}</p>
    </div>
  );
}
