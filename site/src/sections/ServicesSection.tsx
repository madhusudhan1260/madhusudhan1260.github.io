import FadeIn from "../components/FadeIn";
import { SERVICES } from "../data";

const STACK = ["Python", "JavaScript", "TypeScript", "Java", "C / C++", "React", "Node.js", "Flask", "FastAPI", "MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Linux", "Figma"];

export default function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" y={40} className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((s, i) => (
          <FadeIn
            key={s.name}
            delay={i * 0.1}
            className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: "1px solid rgba(12, 12, 12, 0.15)", ...(i === SERVICES.length - 1 ? { borderBottom: "1px solid rgba(12, 12, 12, 0.15)" } : {}) }}
          >
            <span className="w-[1.6em] flex-none font-black leading-none text-[#0C0C0C]" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                {s.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}>
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}

        <FadeIn className="mt-16 sm:mt-20">
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-widest opacity-50">Tech I work with</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {STACK.map((t) => (
              <span key={t} className="rounded-full border border-[#0C0C0C]/15 px-4 py-2 text-sm font-medium uppercase tracking-wider sm:px-5 sm:text-base">
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
      {/* extra room so the projects panel can overlap the rounded edge */}
      <div className="h-10 sm:h-12 md:h-14" />
    </section>
  );
}
