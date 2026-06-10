import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";

type Entry = {
  title: string;
  description: string;
};

export type ProblemSolutionItem = {
  /** The prior limitation. Omit for capabilities that are brand new. */
  problem?: Entry;
  solution: Entry;
};

type ProblemSolutionProps = {
  items: ProblemSolutionItem[];
  /** Column header shown above the problem column (desktop only). */
  beforeLabel?: string;
  /** Column header shown above the solution column (desktop only). */
  afterLabel?: string;
  /** Placeholder shown in the problem column for brand-new capabilities. */
  newLabel?: string;
  className?: string;
};

const rowGrid =
  "grid grid-cols-1 gap-3 md:grid-cols-[1fr_2.5rem_1fr] md:items-stretch md:gap-4";

function Arrow() {
  return (
    <div
      className="flex items-center justify-center text-fg-subtle"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 rotate-90 md:rotate-0"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export function ProblemSolution({
  items,
  beforeLabel,
  afterLabel,
  newLabel = afterLabel ? `New to ${afterLabel}` : "New",
  className,
}: ProblemSolutionProps) {
  return (
    <div className={cn("space-y-14 md:space-y-4", className)}>
      {beforeLabel || afterLabel ? (
        <div className={cn(rowGrid, "hidden md:grid")}>
          <p className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
            {beforeLabel}
          </p>
          <span />
          <p className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
            {afterLabel}
          </p>
        </div>
      ) : null}

      {items.map((item, i) => (
        <Reveal key={item.solution.title} delay={i * 0.05}>
          <div className={rowGrid}>
            {item.problem ? (
              <div className="rounded-xl border border-dashed border-border bg-bg/40 px-5 py-4">
                <p className="text-sm font-medium text-fg/80">
                  {item.problem.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {item.problem.description}
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-xl border border-dashed border-border px-5 py-4">
                <span className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
                  {newLabel}
                </span>
              </div>
            )}

            <Arrow />

            <div className="rounded-xl border border-border bg-surface px-5 py-4 shadow-sm">
              <p className="font-medium text-fg">{item.solution.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                {item.solution.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
