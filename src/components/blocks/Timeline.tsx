import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";

export type TimelineItem = {
  period: string;
  title: string;
  subtitle?: string;
  body?: ReactNode;
  bullets?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-12 md:space-y-16", className)}>
      {items.map((item, i) => (
        <Reveal key={`${item.title}-${i}`} delay={i * 0.05}>
          <li className="grid grid-cols-1 gap-4 md:grid-cols-[180px_1fr] md:gap-10">
            <div className="text-fg-subtle text-sm font-medium tracking-wide md:pt-1">
              {item.period}
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="text-fg-muted mt-1 text-sm">{item.subtitle}</p>
                ) : null}
              </div>
              {item.body ? (
                <div className="text-fg/90 leading-relaxed">{item.body}</div>
              ) : null}
              {item.bullets && item.bullets.length > 0 ? (
                <ul className="text-fg-muted ml-4 list-disc space-y-1.5 leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
