import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectShell } from "../components/project/ProjectShell";
import { getProjectBySlug } from "../content/projects";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) return <NotFound />;
  const { meta, Component } = project;
  return (
    <ProjectShell meta={meta}>
      <Component />
    </ProjectShell>
  );
}
