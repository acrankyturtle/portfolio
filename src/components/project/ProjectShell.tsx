import type { ReactNode } from "react";
import type { ProjectMeta } from "../../content/projects/types";
import { Container } from "../layout/Container";
import { ProjectFooter } from "./ProjectFooter";
import { ProjectHeader } from "./ProjectHeader";

type ProjectShellProps = {
  meta: ProjectMeta;
  children: ReactNode;
};

export function ProjectShell({ meta, children }: ProjectShellProps) {
  return (
    <article>
      <ProjectHeader meta={meta} />
      <Container width="wide" className="pb-16">
        {children}
      </Container>
      <ProjectFooter currentSlug={meta.slug} />
    </article>
  );
}
