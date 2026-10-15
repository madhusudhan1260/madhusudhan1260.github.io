import { motion } from "framer-motion";
import { useMemo, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({ children, as = "div", delay = 0, duration = 0.7, x = 0, y = 30, className, style }: Props) {
  // motion.create builds a motion component for any tag; memoised so it isn't recreated each render
  const Comp = useMemo(() => motion.create(as), [as]);
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Comp>
  );
}
