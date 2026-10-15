import { ArrowRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SubNav from "../components/SubNav";
import PageFooter from "../components/PageFooter";
import { NOTES } from "../content/notes";
import { CASE_STUDIES } from "../content/caseStudies";

export default function NotePage({ slug }: { slug: string }) {
  const n = NOTES.find((x) => x.slug === slug) ?? NOTES[0];
  const project = CASE_STUDIES.find((c) => c.slug === n.project);
  const others = NOTES.filter((x) => x.slug !== n.slug);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]" style={{ overflowX: "clip" }}>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <SubNav back="/#notes" backLabel="All notes" />

      <main id="content">
        <article className="mx-auto max-w-3xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
          <FadeIn as="p" y={20} className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
            Note · {n.date} · {n.readMins} min read
          </FadeIn>
          <FadeIn as="h1" delay={0.08} y={40} className="hero-heading mt-4 font-black uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.4rem, 7vw, 84px)" }}>
            {n.title}
          </FadeIn>
          <FadeIn delay={0.16} className="mt-6 flex flex-wrap gap-2">
            {n.tags.map((t) => (
              <span key={t} className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-xs uppercase tracking-wider">{t}</span>
            ))}
          </FadeIn>

          <FadeIn delay={0.24} className="mt-12 flex flex-col gap-6 border-t border-[#D7E2EA]/15 pt-10 text-[1.08rem] font-light leading-[1.8] text-[#D7E2EA]/85 sm:text-[1.15rem]">
            {n.body.map((b, k) =>
              "h" in b ? (
                <h2 key={k} className="mt-6 text-2xl font-medium uppercase leading-tight tracking-wide text-[#D7E2EA] sm:text-3xl">{b.h}</h2>
              ) : "p" in b ? (
                <p key={k}>{b.p}</p>
              ) : (
                <ul key={k} className="flex flex-col gap-3 pl-1">
                  {b.list.map((li) => (
                    <li key={li} className="flex gap-3">
                      <span className="mt-[0.75em] h-1.5 w-1.5 flex-none rounded-full bg-[#B600A8]" />
                      {li}
                    </li>
                  ))}
                </ul>
              ),
            )}
          </FadeIn>

          {project && (
            <FadeIn className="mt-16">
              <a href={`/projects/${project.slug}/`} className="group flex items-center justify-between gap-6 rounded-[32px] p-8 text-white" style={{ background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)" }}>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/70">See the project</span>
                  <span className="mt-2 block text-3xl font-black uppercase leading-none">{project.name}</span>
                </span>
                <ArrowRight className="h-7 w-7 flex-none transition-transform group-hover:translate-x-1" />
              </a>
            </FadeIn>
          )}

          <FadeIn className="mt-16">
            <p className="mb-4 text-sm uppercase tracking-widest text-[#D7E2EA]/65">More notes</p>
            <ul>
              {others.map((o) => (
                <li key={o.slug} className="border-t border-[#D7E2EA]/15">
                  <a href={`/notes/${o.slug}/`} className="group flex items-center justify-between gap-4 py-5 text-lg font-medium hover:opacity-80">
                    {o.title}
                    <ArrowRight className="h-5 w-5 flex-none opacity-50 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </article>
      </main>

      <PageFooter />
    </div>
  );
}
