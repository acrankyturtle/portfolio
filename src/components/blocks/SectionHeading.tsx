import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  children,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <header className={cn("max-w-2xl", className)}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
          {children}
        </h3>
        {description ? (
          <p className="text-fg-muted mt-4 text-lg leading-relaxed">
            {description}
          </p>
        ) : null}
      </header>
    </Reveal>
  );
}
