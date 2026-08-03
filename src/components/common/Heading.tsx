import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  align?: "left" | "center" | "right";
};

export function Heading({
  children,
  as: Component = "h2",
  size = "md",
  className = "",
  align = "left",
}: HeadingProps) {
  const sizeMap = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
    xl: "text-5xl sm:text-6xl",
  } as const;

  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const;

  return (
    <Component className={`${sizeMap[size]} ${alignMap[align]} font-semibold tracking-tight text-[color:var(--brand-text-primary)] ${className}`.trim()}>
      {children}
    </Component>
  );
}
