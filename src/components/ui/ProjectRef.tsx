import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { ProjectMeta } from "../../content/projects/types";

type Props = {
  project: ProjectMeta;
  children?: ReactNode;
};

export function ProjectRef({ project, children }: Props) {
  return (
    <Link to={`/projects/${project.slug}`}>{children ?? project.title}</Link>
  );
}
