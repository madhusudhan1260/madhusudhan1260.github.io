import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { MARQUEE } from "../data";

function Row({ images, offset, dir }: { images: string[]; offset: number; dir: 1 | -1 }) {
  const tripled = [...images, ...images, ...images];
  const x = dir === 1 ? offset - 200 : -(offset - 200);
  return (
    <div className="flex gap-3" style={{ transform: `translateX(${x}px)`, willChange: "transform", marginLeft: dir === 1 ? "-60%" : "-20%" }}>
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] flex-none rounded-2xl object-cover object-top"
          style={{ background: "#16161a" }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <section ref={ref} aria-label="Screenshots of my projects" className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" style={{ overflowX: "clip" }}>
      <div className="flex flex-col gap-3">
        <Row images={MARQUEE.slice(0, 11)} offset={offset} dir={1} />
        <Row images={MARQUEE.slice(11)} offset={offset} dir={-1} />
      </div>
    </section>
  );
}
