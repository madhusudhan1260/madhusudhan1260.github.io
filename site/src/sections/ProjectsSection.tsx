import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { MORE_PROJECTS, PROJECTS, type Project } from "../data";

const RADIUS = "rounded-[28px] sm:rounded-[40px] md:rounded-[50px]";

function Images({ p }: { p: Project }) {
  if (p.images.length === 1) {
    return (
      <img src={p.images[0]} alt={`${p.name} screenshot`} loading="lazy" className={`w-full object-cover object-left-top ${RADIUS}`} style={{ height: "clamp(240px, 40vw, 580px)" }} />
    );
  }
  if (p.tall) {
    // phone screenshots read best side by side
    return (
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {p.images.map((src) => (
          <img key={src} src={src} alt={`${p.name} screen`} loading="lazy" className={`w-full object-cover object-top ${RADIUS}`} style={{ height: "clamp(260px, 40vw, 580px)" }} />
        ))}
      </div>
    );
  }
  const [a, b, c] = p.images;
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
        <img src={a} alt={`${p.name} screen`} loading="lazy" className={`w-full object-cover object-top ${RADIUS}`} style={{ height: "clamp(130px, 16vw, 230px)" }} />
        <img src={b} alt={`${p.name} screen`} loading="lazy" className={`w-full object-cover object-top ${RADIUS}`} style={{ height: "clamp(160px, 22vw, 340px)" }} />
      </div>
      <img src={c} alt={`${p.name} screen`} loading="lazy" className={`w-[60%] object-cover object-top ${RADIUS}`} />
    </div>
  );
}

function Card({ p, i, total, progress }: { p: Project; i: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${i * 28}px`, transformOrigin: "top center" }}
        className="relative w-full max-w-6xl rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mb-6 md:mb-8">
          <span className="hero-heading font-black leading-none" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{p.category}</p>
            <h3 className="font-medium uppercase leading-tight text-[#D7E2EA]" style={{ fontSize: "clamp(1.3rem, 3vw, 2.6rem)" }}>
              {p.name}
            </h3>
            <p className="mt-1 hidden max-w-2xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 md:block md:text-base">{p.blurb}</p>
            <ul className="mt-3 hidden flex-wrap gap-2 lg:flex" aria-label="Impact">
              {p.impact.map((m) => (
                <li key={m} className="rounded-full bg-[#B600A8]/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#F0B8EC]">{m}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} source code on GitHub`}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] transition-colors hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:h-14 sm:w-14"
            >
              <Github className="h-5 w-5" />
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} live app`}
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] transition-colors hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:h-14 sm:w-14"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            <a
              href={`/projects/${p.slug}/`}
              className="inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Case Study
            </a>
          </div>
        </div>
        <Images p={p} />
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-10 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn as="h2" y={40} className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Projects
      </FadeIn>

      <div ref={ref}>
        {PROJECTS.map((p, i) => (
          <Card key={p.name} p={p} i={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-6xl sm:mt-32">
        <FadeIn as="h3" className="mb-8 text-center text-2xl font-medium uppercase tracking-widest text-[#D7E2EA] sm:mb-12 sm:text-3xl">
          More things I&apos;ve built
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MORE_PROJECTS.map((m, i) => (
            <FadeIn key={m.name} delay={(i % 4) * 0.08}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-[28px] border border-[#D7E2EA]/15 p-6 transition-colors duration-200 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-medium uppercase leading-tight text-[#D7E2EA]">{m.name}</h4>
                  <ArrowUpRight className="h-5 w-5 flex-none text-[#D7E2EA]/65 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D7E2EA]" />
                </div>
                <p className="flex-1 text-sm font-light leading-relaxed text-[#D7E2EA]/65">{m.desc}</p>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/65">{m.stack}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
