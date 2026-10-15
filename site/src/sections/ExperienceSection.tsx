import { Briefcase, MapPin } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { EXPERIENCE } from "../data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 pb-24 pt-10 sm:px-8 sm:pb-28 md:px-10 md:pb-36">
      <FadeIn as="h2" y={40} className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Experience
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {EXPERIENCE.map((job, i) => (
          <FadeIn
            key={job.company}
            delay={i * 0.1}
            className="grid gap-6 border-t border-[#D7E2EA]/15 py-10 last:border-b md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-14"
          >
            <div>
              <p className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">{job.dates}</p>
              <h3 className="mt-3 font-medium uppercase leading-tight text-[#D7E2EA]" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.3rem)" }}>
                {job.role}
              </h3>
              <p className="mt-2 flex items-center gap-2 text-lg font-light text-[#D7E2EA]">
                <Briefcase className="h-4 w-4 flex-none opacity-60" />
                {job.company} · {job.type}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-light text-[#D7E2EA]/60">
                <MapPin className="h-4 w-4 flex-none" />
                {job.place}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-4 font-light leading-relaxed text-[#D7E2EA]/80" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}>
                    <span className="mt-[0.7em] h-1.5 w-1.5 flex-none rounded-full bg-[#B600A8]" />
                    {p}
                  </li>
                ))}
              </ul>
              {job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span key={s} className="rounded-full border border-[#D7E2EA]/25 px-4 py-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/80">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
