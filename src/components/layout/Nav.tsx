import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../../content/profile";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Container } from "./Container";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const goToSection = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center gap-2.5 text-sm font-medium tracking-tight text-fg transition-colors hover:text-accent"
          >
            <img
              src="/favicon.svg"
              alt=""
              className="h-6 w-6 drop-shadow-[1px_1px_0.5px_rgba(0,0,0,0.75)] dark:drop-shadow-none"
            />
            {profile.name}
          </Link>

          <nav className="flex items-center gap-1 md:gap-2">
            {!isHome && (
              <Link
                to="/"
                className="rounded-full px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                Home
              </Link>
            )}
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(id);
                }}
                className="hidden rounded-full px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg md:inline-block"
              >
                {label}
              </a>
            ))}
            <ThemeToggle className="ml-2" />
          </nav>
        </div>
      </Container>
    </header>
  );
}
