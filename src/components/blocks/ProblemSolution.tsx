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
    <div className="text-fg-subtle flex items-center justify-center" aria-hidden>
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
    <div className={cn("space-y-3 md:space-y-4", className)}>
      {beforeLabel || afterLabel ? (
        <div className={cn(rowGrid, "hidden md:grid")}>
          <p className="text-fg-subtle text-xs font-medium tracking-[0.18em] uppercase">
            {beforeLabel}
          </p>
          <span />
          <p className="text-fg-subtle text-xs font-medium tracking-[0.18em] uppercase">
            {afterLabel}
          </p>
        </div>
      ) : null}

      {items.map((item, i) => (
        <Reveal key={item.solution.title} delay={i * 0.05}>
          <div className={rowGrid}>
            {item.problem ? (
              <div className="border-border bg-bg/40 rounded-xl border border-dashed px-5 py-4">
                <p className="text-fg/80 text-sm font-medium">
                  {item.problem.title}
                </p>
                <p className="text-fg-muted mt-1 text-sm leading-relaxed">
                  {item.problem.description}
                </p>
              </div>
            ) : (
              <div className="border-border flex items-center justify-center rounded-xl border border-dashed px-5 py-4">
                <span className="text-fg-subtle text-xs font-medium tracking-[0.18em] uppercase">
                  {newLabel}
                </span>
              </div>
            )}

            <Arrow />

            <div className="border-border bg-surface rounded-xl border px-5 py-4 shadow-sm">
              <p className="text-fg font-medium">{item.solution.title}</p>
              <p className="text-fg-muted mt-1 text-sm leading-relaxed">
                {item.solution.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
