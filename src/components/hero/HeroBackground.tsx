export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[color:var(--brand-secondary)]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[color:var(--brand-accent)]/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_35%)]" />
      <div className="absolute inset-y-0 right-16 hidden w-px bg-gradient-to-b from-transparent via-[color:var(--brand-border)] to-transparent lg:block" />
    </div>
  );
}
