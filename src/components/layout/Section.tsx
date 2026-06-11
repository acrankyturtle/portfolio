import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";
import { fadeUp, staggerChildren } from "../../lib/motion";
import { Eyebrow } from "../ui/Eyebrow";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  heading?: ReactNode;
  description?: ReactNode;
  width?: "default" | "wide" | "narrow";
  spacing?: "default" | "tight";
  bare?: boolean;
  children: ReactNode;
};

export function Section({
  eyebrow,
  heading,
  description,
  width = "default",
  spacing = "default",
  bare = false,
  className,
  children,
  ...rest
}: SectionProps) {
  const reduced = useReducedMotion();
  const hasHeader = !bare && (eyebrow || heading || description);

  return (
    <section
      className={cn(
        spacing === "tight" ? "py-20 md:py-28" : "py-28 md:py-44",
        className,
      )}
      {...rest}
    >
      <Container width={width}>
        {hasHeader ? (
          reduced ? (
            <header className="mb-16 max-w-2xl md:mb-24">
              {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
              {heading ? (
                <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
                  {heading}
                </h2>
              ) : null}
              {description ? (
                <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                  {description}
                </p>
              ) : null}
            </header>
          ) : (
            <motion.header
              className="mb-16 max-w-2xl md:mb-24"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {eyebrow ? (
                <motion.div variants={fadeUp}>
                  <Eyebrow>{eyebrow}</Eyebrow>
                </motion.div>
              ) : null}
              {heading ? (
                <motion.h2
                  variants={fadeUp}
                  className="mt-4 font-serif text-4xl tracking-tight md:text-5xl"
                >
                  {heading}
                </motion.h2>
              ) : null}
              {description ? (
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-lg leading-relaxed text-fg-muted"
                >
                  {description}
                </motion.p>
              ) : null}
            </motion.header>
          )
        ) : null}
        {children}
      </Container>
    </section>
  );
}
