import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Eyebrow } from "../components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="py-40 md:py-56">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="text-display mt-6 font-serif tracking-[-0.03em]">
          Not here.
        </h1>
        <p className="text-fg-muted mt-8 max-w-xl text-lg leading-relaxed">
          The page you were looking for has moved, or never existed.
        </p>
        <Link
          to="/"
          className="text-fg hover:text-accent mt-12 inline-flex items-center gap-2 text-base"
        >
          <span aria-hidden>←</span>
          <span className="border-fg/30 hover:border-fg border-b pb-px">
            Back home
          </span>
        </Link>
      </Container>
    </section>
  );
}
