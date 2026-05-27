import { getOrderedProjects } from "../../content/projects";
import { Section } from "../layout/Section";
import { ProjectCard } from "../project/ProjectCard";

export function ProjectsGrid() {
  const projects = getOrderedProjects();
  return (
    <Section
      id="projects"
      width="wide"
      eyebrow="Personal Projects"
      heading="Projects, recent first."
      description="A small collection of personal work. Each opens into a longer write-up with screenshots and context."
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.meta.slug} meta={p.meta} index={i} />
        ))}
      </div>
    </Section>
  );
}
