import { profile } from "../../content/profile";
import { ExternalLink } from "../ui/ExternalLink";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 py-16">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-fg-muted md:flex-row md:items-center md:justify-between">
          <p>
            Built by Jared. Check out the{" "}
            <ExternalLink href="https://github.com/acrankyturtle/portfolio">
              source code.
            </ExternalLink>
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <ExternalLink href={s.href}>{s.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
