import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Eyebrow({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase",
        className,
      )}
      {...rest}
    >
      <span className="h-px w-6 bg-fg-subtle/60" aria-hidden />
      {children}
    </span>
  );
}
