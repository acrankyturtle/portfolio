import { techStack } from "../../content/techStack";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tools"
      heading="Tech I reach for"
      description="The tech I am most comfortable using"
    >
      <div className="space-y-12">
        {techStack.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-6 border-t border-border/60 pt-8 md:grid-cols-[180px_1fr]">
              <h3 className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-serif text-xl tracking-tight text-fg/90 md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
