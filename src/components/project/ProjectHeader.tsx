import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatYear, type ProjectMeta } from "../../content/projects/types";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { ExternalLink } from "../ui/ExternalLink";
import { ease } from "../../lib/motion";

export function ProjectHeader({ meta }: { meta: ProjectMeta }) {
  const hasLinks = meta.links && meta.links.length > 0;
  return (
    <header className="pt-28 pb-16 md:pt-40 md:pb-24">
      <Container width="wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            to="/#projects"
            className="text-fg-muted hover:text-fg mb-8 flex w-fit items-center gap-2 text-sm transition-colors"
          >
            <span aria-hidden>←</span> All projects
          </Link>
          <Eyebrow>
            {meta.role ?? "Solo Project"} · {formatYear(meta)}
          </Eyebrow>
          <h1 className="text-display mt-6 max-w-4xl font-serif tracking-[-0.03em]">
            {meta.title}
          </h1>
          <p className="text-fg-muted mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
            {meta.tagline}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="border-border/60 mt-16 grid grid-cols-1 gap-8 border-t pt-10 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <dt className="text-fg-subtle text-xs font-medium tracking-[0.18em] uppercase">
              Stack
            </dt>
            <dd className="text-fg mt-3 flex flex-wrap gap-x-3 gap-y-1 text-base">
              {meta.tech.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {t}
                  {i < meta.tech.length - 1 ? (
                    <span className="text-fg-subtle/60" aria-hidden>
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </dd>
          </div>
          {hasLinks ? (
            <div>
              <dt className="text-fg-subtle text-xs font-medium tracking-[0.18em] uppercase">
                Links
              </dt>
              <dd className="mt-3 flex flex-col gap-1.5 text-base">
                {meta.links!.map((l) => (
                  <ExternalLink key={l.label} href={l.href}>
                    {l.label}
                  </ExternalLink>
                ))}
              </dd>
            </div>
          ) : (
            <div />
          )}
        </motion.dl>
      </Container>
    </header>
  );
}
