import { profile } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { Section } from "../layout/Section";
import { ExternalLink } from "../ui/ExternalLink";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <Reveal>
        <h2 className="text-display max-w-3xl font-serif tracking-[-0.03em]">
          {profile.contact.headline}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-fg-muted mt-10 max-w-xl text-lg leading-relaxed md:text-xl">
          {profile.contact.body}
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-col gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="font-serif text-3xl tracking-tight md:text-4xl"
          >
            <span className="border-fg/30 hover:border-fg border-b pb-1 transition-colors">
              {profile.email}
            </span>
          </a>
          <ul className="text-fg-muted flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
