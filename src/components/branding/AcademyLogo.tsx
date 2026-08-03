import Link from "next/link";
import { BrandName } from "@/components/branding/BrandName";
import { Logo } from "@/components/branding/Logo";

export function AcademyLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:ring-offset-2 ${className}`.trim()}
      aria-label="Tumbuleke Academy home"
    >
      <Logo />
      <BrandName />
    </Link>
  );
}
