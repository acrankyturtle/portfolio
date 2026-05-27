/**
 * Template for a new project page.
 *
 * To add a project:
 *   1. Copy this file to ./my-project.tsx
 *   2. Update `meta` and the default export body
 *   3. Add assets to src/assets/<my-project>/
 *   4. Register the project in ./index.ts
 */

import cover from "../../assets/default.svg";
import { ImageCard } from "../../components/blocks/ImageCard";
import { ProjectLayout } from "../../components/blocks/ProjectLayout";
import { Prose } from "../../components/blocks/Prose";
import type { ProjectMeta } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: ProjectMeta = {
  slug: "my-project",
  title: "",
  tagline: "",
  year: 2026,
  tech: [],
  cover,
  // links: [{ label: "Live", href: "https://..." }],
  // featured: true,
};

export default function MyProject() {
  return (
    <ProjectLayout>
      <ImageCard src={cover} alt="" frame="shadow" />
      <Prose size="lead">
        <p></p>
      </Prose>
    </ProjectLayout>
  );
}
