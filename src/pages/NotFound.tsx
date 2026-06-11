import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Eyebrow } from "../components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="py-40 md:py-56">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 font-serif text-display tracking-[-0.03em]">
          Not here.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
          The page you were looking for has moved, or never existed.
        </p>
        <Link
          to="/"
          className="mt-12 inline-flex items-center gap-2 text-base text-fg hover:text-accent"
        >
          <span aria-hidden>←</span>
          <span className="border-b border-fg/30 pb-px hover:border-fg">
            Back home
          </span>
        </Link>
      </Container>
    </section>
  );
}
