import { experience } from "../../content/experience";
import { Timeline } from "../blocks/Timeline";
import { Section } from "../layout/Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" heading="Where I've worked">
      <Timeline
        items={experience.map((e) => ({
          period: e.period,
          title: e.role,
          subtitle: e.location ? `${e.company} · ${e.location}` : e.company,
          body: e.summary ? <p>{e.summary}</p> : undefined,
          bullets: e.highlights,
        }))}
      />
    </Section>
  );
}
