import { Link } from "react-router-dom";
import { getAdjacentProject } from "../../content/projects";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Eyebrow";

export function ProjectFooter({ currentSlug }: { currentSlug: string }) {
  const next = getAdjacentProject(currentSlug);
  if (!next || next.meta.slug === currentSlug) return null;

  return (
    <section className="border-border/60 mt-32 border-t py-24 md:py-32">
      <Container width="wide">
        <Reveal>
          <Link
            to={`/projects/${next.meta.slug}`}
            className="group block"
          >
            <Eyebrow>Next Project</Eyebrow>
            <div className="mt-6 flex items-baseline justify-between gap-6">
              <h3 className="font-serif text-4xl tracking-tight md:text-6xl">
                <span className="group-hover:text-fg text-fg-muted transition-colors">
                  {next.meta.title}
                </span>
              </h3>
              <span
                aria-hidden
                className="text-fg-subtle group-hover:text-fg text-xl transition-all group-hover:translate-x-1"
              >
                →
              </span>
            </div>
            <p className="text-fg-muted mt-4 max-w-xl">{next.meta.tagline}</p>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
