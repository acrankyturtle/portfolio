import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { SectionHeading } from "./SectionHeading";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  heading?: ReactNode;
  description?: ReactNode;
  headingClassName?: string;
};

export function Section({
  className,
  eyebrow,
  heading,
  description,
  headingClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <div className={cn("space-y-10", className)} {...rest}>
      {heading || eyebrow ? (
        <SectionHeading
          eyebrow={eyebrow}
          description={description}
          className={headingClassName}
        >
          {heading}
        </SectionHeading>
      ) : null}
      {children}
    </div>
  );
}
