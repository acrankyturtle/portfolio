import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp } from "../../lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  variants?: Variants;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  variants = fadeUp,
  amount = 0.2,
  once = false,
  transition,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition ?? { delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
