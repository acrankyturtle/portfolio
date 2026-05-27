import CaptionTool, { meta as captionToolMeta } from "./caption_tool.tsx";
import Cardboard, { meta as cardboardMeta } from "./cardboard";
import CrankyKeypad, { meta as crankyKeypadMeta } from "./cranky_keypad";
import HaloTimer, { meta as haloTimerMeta } from "./halo_timer";
import Pingometer, { meta as pingometerMeta } from "./pingometer";
import type { Project } from "./types";

export const projects: Project[] = [
  { meta: cardboardMeta, Component: Cardboard },
  { meta: pingometerMeta, Component: Pingometer },
  { meta: captionToolMeta, Component: CaptionTool },
  { meta: crankyKeypadMeta, Component: CrankyKeypad },
  { meta: haloTimerMeta, Component: HaloTimer },
];

export function getProjectBySlug(
  slug: string | undefined,
): Project | undefined {
  if (!slug) return undefined;
  return projects.find((p) => p.meta.slug === slug);
}

export function getOrderedProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (!!a.meta.featured === !!b.meta.featured)
      return (b.meta.endYear ?? b.meta.year) - (a.meta.endYear ?? a.meta.year);
    return a.meta.featured ? -1 : 1;
  });
}

export function getAdjacentProject(slug: string): Project | undefined {
  const ordered = getOrderedProjects();
  const idx = ordered.findIndex((p) => p.meta.slug === slug);
  if (idx === -1) return undefined;
  return ordered[(idx + 1) % ordered.length];
}
