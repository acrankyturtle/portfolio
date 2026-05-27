import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Contact } from "../components/sections/Contact";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { ProjectsGrid } from "../components/sections/ProjectsGrid";
import { TechStack } from "../components/sections/TechStack";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ProjectsGrid />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}
