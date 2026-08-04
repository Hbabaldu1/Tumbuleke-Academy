export default function PlaceholderPage({ title = "Coming Soon" }: { title?: string }) {
  return (
    <div className="min-h-[50vh] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-[24px] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">Tumbuleke Academy</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          This route is reserved for the next milestone of the platform experience. Authentication is now implemented and ready to be extended.
        </p>
      </div>
    </div>
  );
}
