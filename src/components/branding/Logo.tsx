import { brand } from "@/lib/branding";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] p-2.5 text-white shadow-sm ${className}`.trim()}>
      <svg
        viewBox="0 0 48 48"
        className="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="6" y="6" width="36" height="36" rx="10" fill="currentColor" opacity="0.2" />
        <path
          d="M16 14h16v4H16zm0 8h10v4H16zm0 8h16v4H16z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function LogoMark() {
  return <Logo />;
}

export function brandLabel() {
  return brand.platform;
}
