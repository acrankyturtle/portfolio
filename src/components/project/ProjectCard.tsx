import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatYear, type ProjectMeta } from "../../content/projects/types";
import { cn } from "../../lib/cn";
import { fadeUp } from "../../lib/motion";

type ProjectCardProps = {
  meta: ProjectMeta;
  index?: number;
  className?: string;
};

export function ProjectCard({ meta, index = 0, className }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.05 }}
      className={className}
    >
      <Link
        to={`/projects/${meta.slug}`}
        className="group block focus:outline-none"
      >
        <div
          className={cn(
            "border-border bg-surface relative overflow-hidden rounded-2xl border",
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:border-fg-subtle/50 group-hover:-translate-y-1",
            "group-focus-visible:ring-fg/40 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg",
          )}
        >
          <div
            className="overflow-hidden"
            style={{ aspectRatio: "16 / 10" }}
          >
            <img
              src={meta.cover}
              alt={meta.coverAlt ?? meta.title}
              loading="lazy"
              className="block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <div className="mt-6 flex items-baseline justify-between gap-6">
          <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
            {meta.title}
          </h3>
          <span className="text-fg-subtle font-mono text-sm tabular-nums">
            {formatYear(meta)}
          </span>
        </div>
        <p className="text-fg-muted mt-2 max-w-xl text-base leading-relaxed">
          {meta.tagline}
        </p>
      </Link>
    </motion.div>
  );
}
