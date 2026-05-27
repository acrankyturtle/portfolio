export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "True Helix",
    role: "Software Developer III",
    period: "2022 — 2026",
    location: "Delmont, PA",
    summary:
      "Full-stack engineer developing scheduling tools across web and mobile",
    highlights: [
      "Full stack web development using technologies including ASP.NET, Blazor, Azure, DevOps, Entity Framework, .NET, TypeScript/React",
      "Designed, developed, and maintained reliable REST APIs for web app, mobile app, and internal services",
      "Created smooth interactive web apps that update in real time",
      "Clean versioning using Git following conventional commits specification and best practices",
      "Maintain cloud infrastructure using Terraform with Terragrunt",
      "Other developer duties such as code review, peer programming, documentation, unit tests, on-boarding, etc.",
    ],
  },
  {
    company: "Circom Technologies, Inc",
    role: "Telecom Technician / Programmer",
    period: "2012 — Present",
    location: "New York, NY",
    summary: "Design, install, and maintain structured communications cabling",
    highlights: [
      "Maintain and establish friendly & professional customer relations",
      "Troubleshoot wiring or complex technology issues",
      "Manage projects from initial sale to project completion",
      "Install technology related devices (video surveillance, TVs, phone systems)",
      "Phone system installation, configuration, and programming",
      "Develop and sell custom .NET software",
      "Set up and maintain the company computer network using multiple devices running both Windows & Linux, including router and NAS configuration",
    ],
  },
  {
    company: "Vertosick Construction & Design",
    role: "Electrical & Telecom Contractor",
    period: "2018 — 2020",
    location: "",
    summary: "",
    highlights: [
      "Install, maintain, and upgrade electrical systems and wiring (indoor/outdoor lighting, three phase 480 Volt industrial equipment, controls, etc.)",
      "Install technology related devices (TVs, video surveillance)",
      "Implement and construct electrical circuits according to schematics",
    ],
  },
];
