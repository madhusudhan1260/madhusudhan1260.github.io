import { Award, GraduationCap } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { ACHIEVEMENTS, EDUCATION } from "../data";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="mt-24 rounded-t-[40px] bg-white px-5 pb-32 pt-20 text-[#0C0C0C] sm:mt-32 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn as="h2" y={40} className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Credentials
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-16">
        {[
          { title: "Education", Icon: GraduationCap, items: EDUCATION.map((e) => ({ a: e.title, b: e.where, c: e.meta })) },
          { title: "Achievements", Icon: Award, items: ACHIEVEMENTS.map((a) => ({ a: a.title, b: a.meta, c: "" })) },
        ].map(({ title, Icon, items }, col) => (
          <FadeIn key={title} delay={col * 0.12}>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-medium uppercase tracking-widest sm:text-2xl">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
              {title}
            </h3>
            <ul>
              {items.map((it) => (
                <li key={it.a} className="py-5" style={{ borderTop: "1px solid rgba(12, 12, 12, 0.15)" }}>
                  <p className="text-lg font-medium leading-snug">{it.a}</p>
                  <p className="mt-1 font-light opacity-60">{it.b}</p>
                  {it.c && <p className="mt-1 text-sm font-medium uppercase tracking-wider opacity-80">{it.c}</p>}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
