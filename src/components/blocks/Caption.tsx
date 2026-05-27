import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Caption({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <figcaption
      className={cn("text-fg-subtle text-sm leading-relaxed", className)}
      {...rest}
    >
      {children}
    </figcaption>
  );
}
