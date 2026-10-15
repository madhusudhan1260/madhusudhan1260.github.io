import { ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SubNav from "../components/SubNav";
import PageFooter from "../components/PageFooter";
import { LiveProjectButton } from "../components/Buttons";
import { CASE_STUDIES } from "../content/caseStudies";
import { NOTES } from "../content/notes";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#B600A8] sm:text-sm">{children}</p>;
}

export default function CaseStudyPage({ slug }: { slug: string }) {
  const i = Math.max(0, CASE_STUDIES.findIndex((c) => c.slug === slug));
  const c = CASE_STUDIES[i];
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
  const note = NOTES.find((n) => n.project === c.slug);
  // phone screenshots: show four across when there are exactly four, else three plus a gallery
  const heroCount = c.tall ? (c.gallery.length === 4 ? 4 : 3) : 1;

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]" style={{ overflowX: "clip" }}>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <SubNav />

      <main id="content">
        {/* header */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
          <FadeIn as="p" y={20} className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
            Case study · {c.category} · {c.year}
          </FadeIn>
          <FadeIn as="h1" delay={0.08} y={40} className="hero-heading mt-4 font-black uppercase leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
            {c.name}
          </FadeIn>
          <FadeIn as="p" delay={0.16} className="mt-6 max-w-3xl font-light leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)" }}>
            {c.tagline}
          </FadeIn>
          <FadeIn delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            {c.live && <LiveProjectButton href={c.live} />}
            <a
              href={c.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:py-3.5 sm:text-base"
            >
              <Github className="h-4 w-4" /> Source code
            </a>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10 grid gap-x-10 gap-y-3 border-t border-[#D7E2EA]/15 pt-6 text-sm sm:grid-cols-[auto_1fr]">
            <span className="uppercase tracking-widest text-[#D7E2EA]/65">Role</span>
            <span className="font-light">{c.role}</span>
            <span className="uppercase tracking-widest text-[#D7E2EA]/65">Stack</span>
            <span className="flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <span key={t} className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-xs uppercase tracking-wider">{t}</span>
              ))}
            </span>
          </FadeIn>
        </section>

        {/* hero image */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn y={50}>
            {c.tall ? (
              <div className={`grid gap-3 sm:gap-5 ${heroCount === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3"}`}>
                {c.gallery.slice(0, heroCount).map((src) => (
                  <img key={src} src={src} alt={`${c.name} app screen`} className="w-full rounded-[24px] border border-[#D7E2EA]/10 sm:rounded-[40px]" />
                ))}
              </div>
            ) : (
              <img src={c.gallery[0]} alt={`${c.name} screenshot`} className="w-full rounded-[24px] border border-[#D7E2EA]/10 sm:rounded-[40px]" />
            )}
          </FadeIn>
        </section>

        {/* impact */}
        <section aria-label="Impact" className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/15 md:grid-cols-4">
            {c.metrics.map((m, k) => (
              <FadeIn key={m.label} delay={k * 0.08} className="bg-[#0C0C0C] p-6 sm:p-8">
                <p className="hero-heading font-black leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>{m.value}</p>
                <p className="mt-3 text-sm font-light text-[#D7E2EA]/70">{m.label}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* body */}
        <section className="mx-auto mt-20 grid max-w-6xl gap-16 px-5 sm:mt-28 sm:px-8 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <FadeIn>
            <Label>The problem</Label>
            <p className="font-light leading-relaxed" style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)" }}>{c.problem}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Label>What I built</Label>
            <ul className="flex flex-col gap-4">
              {c.built.map((b) => (
                <li key={b} className="flex gap-3 font-light leading-relaxed text-[#D7E2EA]/85">
                  <Check className="mt-1 h-5 w-5 flex-none text-[#B600A8]" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* architecture */}
        <section className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
          <FadeIn><Label>How it works</Label></FadeIn>
          <ol className="grid gap-3 md:grid-cols-5">
            {c.architecture.map((step, k) => (
              <FadeIn as="li" key={step} delay={k * 0.08} className="relative flex min-h-[120px] flex-col justify-between rounded-[24px] border border-[#D7E2EA]/15 bg-white/[0.02] p-5">
                <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/65">Step {k + 1}</span>
                <span className="mt-4 font-medium leading-snug">{step}</span>
                {k < c.architecture.length - 1 && (
                  <ArrowRight aria-hidden="true" className="absolute -right-[13px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-[#0C0C0C] text-[#B600A8] md:block" />
                )}
              </FadeIn>
            ))}
          </ol>
        </section>

        {/* decisions */}
        <section className="mt-24 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:mt-32 sm:rounded-t-[60px] sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <FadeIn as="h2" y={40} className="mb-14 font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}>
              Key decisions
            </FadeIn>
            {c.decisions.map((d, k) => (
              <FadeIn key={d.title} delay={k * 0.1} className="grid gap-4 py-10 md:grid-cols-[auto_1fr_1.6fr] md:gap-12" style={{ borderTop: "1px solid rgba(12,12,12,0.15)" }}>
                <span className="font-black leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}>{String(k + 1).padStart(2, "0")}</span>
                <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1.1rem, 2vw, 1.8rem)" }}>{d.title}</h3>
                <p className="font-light leading-relaxed opacity-70" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}>{d.body}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* gallery */}
        {c.gallery.length > heroCount && (
          <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 sm:-mt-14 sm:rounded-t-[60px] sm:px-8 sm:pt-28">
            <div className="mx-auto max-w-6xl">
              <FadeIn><Label>More screens</Label></FadeIn>
              <div className={c.tall ? "grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3" : "grid gap-4 sm:gap-6 md:grid-cols-2"}>
                {c.gallery.slice(heroCount).map((src, k) => (
                  <FadeIn key={src} delay={(k % 3) * 0.08}>
                    <img src={src} alt={`${c.name} screen`} loading="lazy" className="w-full rounded-[20px] border border-[#D7E2EA]/10 sm:rounded-[32px]" />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* related note + next project */}
        <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-5 sm:mt-28 sm:px-8 md:grid-cols-2">
          {note && (
            <FadeIn>
              <a href={`/notes/${note.slug}/`} className="group flex h-full flex-col justify-between gap-8 rounded-[32px] border border-[#D7E2EA]/15 p-8 transition-colors hover:border-[#D7E2EA]/50">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/65">Read the note · {note.readMins} min</span>
                <span className="flex items-end justify-between gap-4 text-2xl font-medium leading-tight">
                  {note.title}
                  <ArrowUpRight className="h-6 w-6 flex-none transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </a>
            </FadeIn>
          )}
          <FadeIn delay={0.1} className={note ? "" : "md:col-span-2"}>
            <a href={`/projects/${next.slug}/`} className="group flex h-full flex-col justify-between gap-8 rounded-[32px] p-8 text-white" style={{ background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)" }}>
              <span className="text-xs uppercase tracking-widest text-white/70">Next case study</span>
              <span className="flex items-end justify-between gap-4 text-3xl font-black uppercase leading-none sm:text-4xl">
                {next.name}
                <ArrowRight className="h-7 w-7 flex-none transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </FadeIn>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
