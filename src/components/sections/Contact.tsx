import { profile } from "../../content/profile";
import { Section } from "../layout/Section";
import { ExternalLink } from "../ui/ExternalLink";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <Reveal>
        <h2 className="max-w-3xl font-serif text-display tracking-[-0.03em]">
          {profile.contact.headline}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
          {profile.contact.body}
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-col gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="font-serif text-3xl tracking-tight md:text-4xl"
          >
            <span className="border-b border-fg/30 pb-1 transition-colors hover:border-fg">
              {profile.email}
            </span>
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <ExternalLink href={s.href}>{s.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
