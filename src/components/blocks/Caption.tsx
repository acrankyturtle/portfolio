import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Caption({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <figcaption
      className={cn("text-sm leading-relaxed text-fg-subtle", className)}
      {...rest}
    >
      {children}
    </figcaption>
  );
}
