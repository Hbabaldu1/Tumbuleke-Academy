import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function PrimaryButton({ children, className = "", href, ...props }: PrimaryButtonProps) {
  const sharedClassName = `inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[color:var(--brand-secondary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:ring-offset-2 ${className}`.trim();

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
