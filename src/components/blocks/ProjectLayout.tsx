import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ProjectLayoutProps = HTMLAttributes<HTMLDivElement>;

export function ProjectLayout({
  className,
  children,
  ...rest
}: ProjectLayoutProps) {
  return (
    <div className={cn("space-y-24 md:space-y-32", className)} {...rest}>
      {children}
    </div>
  );
}
