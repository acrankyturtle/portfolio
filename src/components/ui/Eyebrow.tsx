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
        "text-fg-subtle inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase",
        className,
      )}
      {...rest}
    >
      <span className="bg-fg-subtle/60 h-px w-6" aria-hidden />
      {children}
    </span>
  );
}
