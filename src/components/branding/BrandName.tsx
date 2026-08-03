import { brand } from "@/lib/branding";

export function BrandName({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`.trim()}>
      <span className="text-sm font-semibold tracking-[0.2em] text-[color:var(--brand-primary)] uppercase">
        {brand.platform}
      </span>
      <span className="mt-1 text-xs text-[color:var(--brand-text-secondary)]">
        {brand.organization}
      </span>
    </div>
  );
}
