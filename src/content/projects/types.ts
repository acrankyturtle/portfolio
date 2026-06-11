import type { ComponentType } from "react";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  role?: string;
  year: number;
  endYear?: number;
  tech: string[];
  cover: string;
  coverAlt?: string;
  links?: ProjectLink[];
  featured?: boolean;
};

export type Project = {
  meta: ProjectMeta;
  Component: ComponentType;
};

export function formatYear(
  meta: Pick<ProjectMeta, "year" | "endYear">,
): string {
  return meta.endYear && meta.endYear !== meta.year
    ? `${meta.year}–${meta.endYear}`
    : `${meta.year}`;
}
