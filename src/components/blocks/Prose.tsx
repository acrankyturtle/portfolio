import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";

type ProseProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "lead";
  reveal?: boolean;
};

export function Prose({
  className,
  size = "default",
  reveal = true,
  children,
  ...rest
}: ProseProps) {
  const content = (
    <div
      className={cn(
        "max-w-2xl space-y-5 leading-relaxed text-fg/90",
        size === "lead" ? "text-lg md:text-xl" : "text-base md:text-lg",
        "[&_a]:text-fg [&_a]:underline [&_a]:decoration-fg-subtle/60 [&_a]:underline-offset-4 [&_a:hover]:decoration-fg",
        "[&_strong]:font-medium [&_strong]:text-fg",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
  return reveal ? <Reveal>{content}</Reveal> : content;
}
