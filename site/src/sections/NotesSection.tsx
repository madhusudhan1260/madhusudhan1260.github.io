import { ArrowUpRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { NOTES } from "../content/notes";

export default function NotesSection() {
  return (
    <section id="notes" className="px-5 pt-24 sm:px-8 sm:pt-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn as="h2" y={40} className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Notes
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <FadeIn key={n.slug} delay={i * 0.1}>
              <a
                href={`/notes/${n.slug}/`}
                className="group flex h-full flex-col gap-6 rounded-[32px] border border-[#D7E2EA]/15 p-7 transition-colors duration-200 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/[0.03]"
              >
                <span className="flex items-center justify-between text-xs uppercase tracking-widest text-[#D7E2EA]/65">
                  {n.date} · {n.readMins} min read
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="text-2xl font-medium leading-tight text-[#D7E2EA]">{n.title}</span>
                <span className="mt-auto flex flex-wrap gap-2">
                  {n.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/70">{t}</span>
                  ))}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
