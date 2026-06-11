import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../content/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ease } from "../../lib/motion";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative pt-32 pb-24 md:pt-48 md:pb-40">
      <Container>
        <motion.div style={reduced ? undefined : { opacity, y }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease }}
          >
            <Eyebrow>{profile.hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-8 max-w-4xl font-serif text-display tracking-[-0.03em]"
          >
            {profile.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl"
          >
            {profile.hero.intro}
          </motion.p>

          <motion.a
            href="#projects"
            aria-label="Scroll to projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="group mt-24 inline-flex items-center gap-3 text-xs tracking-[0.18em] text-fg-subtle uppercase transition-colors hover:text-fg"
          >
            <span>Scroll</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              aria-hidden
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path
                d="M6 2V10M6 10L2.5 6.5M6 10L9.5 6.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
