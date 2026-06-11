import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatYear, type ProjectMeta } from "../../content/projects/types";
import { ease } from "../../lib/motion";
import { Container } from "../layout/Container";
import { ExternalLink } from "../ui/ExternalLink";
import { Eyebrow } from "../ui/Eyebrow";

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
            className="mb-8 flex w-fit items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <span aria-hidden>←</span> All projects
          </Link>
          <Eyebrow>
            {meta.role ?? "Solo Project"} · {formatYear(meta)}
          </Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-display tracking-[-0.03em]">
            {meta.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
            {meta.tagline}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-border/60 pt-10 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <dt className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
              Stack
            </dt>
            <dd className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-base text-fg">
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
              <dt className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
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
