import type { AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  arrow?: boolean;
};

export function ExternalLink({
  className,
  children,
  arrow = true,
  ...rest
}: Props) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent",
        className,
      )}
      {...rest}
    >
      <span className="border-b border-dotted border-fg-subtle/40 pb-px transition-colors group-hover:border-fg">
        {children}
      </span>
      {arrow ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M3 9L9 3M9 3H4M9 3V8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ) : null}
    </a>
  );
}
