import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function SecondaryButton({ children, className = "", href, ...props }: SecondaryButtonProps) {
  const sharedClassName = `inline-flex items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition-all duration-200 hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:ring-offset-2 ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} type="button" {...props}>
      {children}
    </button>
  );
}
