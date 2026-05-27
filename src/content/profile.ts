export type Social = { label: string; href: string };

export const profile = {
  name: "Jared Waggle",
  email: "jaredwaggle@hotmail.com",
  hero: {
    eyebrow: "Portfolio",
    headline: "Full-stack engineer focused on clean, reliable architecture",
    intro:
      "I've always been driven to build things. That passion found its perfect outlet in software development. Since I started programming in 2005, I've been continually creating, learning, and exploring new technologies -- a passion that extends beyond my career and into my personal projects.",
  },
  contact: {
    headline: "Contact me",
    body: "Open to work, collaborations, and conversations about the craft.",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/acrankyturtle" },
    { label: "Email", href: "mailto:jaredwaggle@hotmail.com" },
  ] satisfies Social[],
} as const;
