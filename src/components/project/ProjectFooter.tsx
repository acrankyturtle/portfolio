import { Link } from "react-router-dom";
import { getAdjacentProject } from "../../content/projects";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

export function ProjectFooter({ currentSlug }: { currentSlug: string }) {
  const next = getAdjacentProject(currentSlug);
  if (!next || next.meta.slug === currentSlug) return null;

  return (
    <section className="mt-32 border-t border-border/60 py-24 md:py-32">
      <Container width="wide">
        <Reveal>
          <Link to={`/projects/${next.meta.slug}`} className="group block">
            <Eyebrow>Next Project</Eyebrow>
            <div className="mt-6 flex items-baseline justify-between gap-6">
              <h3 className="font-serif text-4xl tracking-tight md:text-6xl">
                <span className="text-fg-muted transition-colors group-hover:text-fg">
                  {next.meta.title}
                </span>
              </h3>
              <span
                aria-hidden
                className="text-xl text-fg-subtle transition-all group-hover:translate-x-1 group-hover:text-fg"
              >
                →
              </span>
            </div>
            <p className="mt-4 max-w-xl text-fg-muted">{next.meta.tagline}</p>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
