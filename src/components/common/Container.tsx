import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & ComponentPropsWithoutRef<"div">;

export function Container({ children, className = "", as: Component = "div", ...rest }: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
