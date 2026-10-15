import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import ContributionGrid from "../components/ContributionGrid";

type Gh = { repos: number };
const FALLBACK: Gh = { repos: 24 };
const CACHE = "mr-gh-v2";

/* Live numbers from the public GitHub API, cached for an hour so visitors
   don't burn the 60-requests-per-hour anonymous limit. */
function useGithub(): Gh {
  const [gh, setGh] = useState<Gh>(FALLBACK);
  useEffect(() => {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE) || "null");
      if (c && Date.now() - c.t < 3_600_000) return setGh(c.d);
    } catch { /* storage unavailable */ }
    fetch("https://api.github.com/users/madhusudhan1260")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((user: { public_repos: number }) => {
        const d: Gh = { repos: user.public_repos };
        setGh(d);
        try { localStorage.setItem(CACHE, JSON.stringify({ t: Date.now(), d })); } catch { /* ignore */ }
      })
      .catch(() => { /* keep fallback numbers */ });
  }, []);
  return gh;
}

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setV(to);
    const c = animate(0, to, { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export default function StatsSection() {
  const gh = useGithub();
  const stats = [
    { n: gh.repos, s: "", l: "Public repositories", live: true },
    { n: 20, s: "+", l: "Projects shipped" },
    { n: 7, s: "", l: "Hackathons" },
    { n: 13, s: "", l: "Fleet templates in production" },
  ];

  return (
    <section id="stats" aria-label="By the numbers" className="px-5 pb-24 sm:px-8 sm:pb-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[32px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/15 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.08} className="bg-[#0C0C0C] p-6 sm:p-8 md:p-10">
              <p className="hero-heading font-black leading-none tabular-nums" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}>
                <Count to={s.n} suffix={s.s} />
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
                {s.l}
                {s.live && <span className="rounded-full bg-[#4ADE80]/15 px-2 py-0.5 text-[10px] font-medium text-[#4ADE80]">Live</span>}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <ContributionGrid />
        </FadeIn>
      </div>
    </section>
  );
}
