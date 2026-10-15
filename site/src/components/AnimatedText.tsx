import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* invisible placeholder keeps layout stable; the animated copy sits on top */}
      <span className="invisible">{char === " " ? " " : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === " " ? " " : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = text.split(" ");
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const chars = (wi < words.length - 1 ? word + " " : word).split("");
        return (
          // words stay unbroken so lines only wrap between words
          <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
            {chars.map((c, ci) => {
              const start = index / total;
              const end = start + 1 / total;
              index++;
              return <Char key={ci} char={c} progress={scrollYProgress} range={[start, end]} />;
            })}
          </span>
        );
      })}
    </p>
  );
}
