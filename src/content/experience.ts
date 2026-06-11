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
      "Full-stack development with ASP.NET, Blazor, .NET, Entity Framework, TypeScript/React, Azure, and DevOps",
      "Designed and maintained reliable REST APIs across web, mobile, and internal services, with thorough unit tests and documentation",
      "Built the self-scheduling mobile API, efficiently filtering thousands of shifts to surface eligible openings for caregivers",
      "Helped build the client portal from the ground up, including its frontend, backing API, internal services, and speccing, designing, and developing a number of endpoints",
      "Co-developed the messaging platform from scratch, and led implementation of full-text search",
      "Refactored legacy DateTimeOffset code to NodaTime, modeling time semantically to clarify the code and eliminate timezone bugs",
      "Clean Git versioning following conventional commits, with regular peer code review",
      "Maintain cloud infrastructure with Terraform and Terragrunt",
    ],
  },
  {
    company: "Circom Technologies, Inc",
    role: "Telecom Technician / Programmer",
    period: "2012 — Present",
    location: "Derry, PA",
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
    role: "Electrical Contractor",
    period: "2018 — 2020",
    location: "Greensburg, PA",
    summary: "",
    highlights: [
      "Install, maintain, and upgrade electrical systems and wiring (indoor/outdoor lighting, three phase 480 Volt industrial equipment, controls, etc.)",
      "Install technology related devices (TVs, video surveillance)",
      "Implement and construct electrical circuits according to schematics",
    ],
  },
];
