import { useEffect, useRef, useState } from "react";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
const CACHE = "mr-contrib-v1";
const COLORS = ["rgba(215,226,234,0.07)", "#4A1247", "#7A0F73", "#B600A8", "#F062E6"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* Contribution calendar drawn from public data, so it matches the site
   theme instead of embedding someone else's light-mode image. */
export default function ContributionGrid() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  // on narrow screens start scrolled to the most recent weeks
  useEffect(() => {
    if (days && scroller.current) scroller.current.scrollLeft = scroller.current.scrollWidth;
  }, [days]);

  useEffect(() => {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE) || "null");
      if (c && Date.now() - c.t < 3_600_000) return setDays(c.d);
    } catch { /* storage unavailable */ }
    fetch("https://github-contributions-api.jogruber.de/v4/madhusudhan1260?y=last")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j: { contributions: Day[] }) => {
        setDays(j.contributions);
        try { localStorage.setItem(CACHE, JSON.stringify({ t: Date.now(), d: j.contributions })); } catch { /* ignore */ }
      })
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  // pad the start so each column is a Sunday-to-Saturday week
  const weeks: (Day | null)[][] = [];
  if (days?.length) {
    const lead = new Date(days[0].date + "T00:00:00").getDay();
    const cells: (Day | null)[] = [...Array(lead).fill(null), ...days];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  }
  const grid: (Day | null)[][] = days ? weeks : Array.from({ length: 53 }, () => Array(7).fill(null));
  const total = days?.reduce((n, d) => n + d.count, 0) ?? 0;
  const active = days?.filter((d) => d.count > 0).length ?? 0;

  return (
    <div className="mt-4 overflow-hidden rounded-[32px] border border-[#D7E2EA]/15 p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest">GitHub activity · past year</p>
          <p className="mt-1 text-sm font-light text-[#D7E2EA]/60">
            {days ? `${total.toLocaleString("en-IN")} contributions across ${active} active days` : "Loading…"}
          </p>
        </div>
        <a href="https://github.com/madhusudhan1260" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA]">
          @madhusudhan1260 ↗
        </a>
      </div>

      <div ref={scroller} className="overflow-x-auto pb-2" role="img" aria-label={`${total} GitHub contributions in the past year`}>
        <div className="min-w-[620px]">
          <div className="mb-1.5 grid gap-[3px] text-[10px] uppercase tracking-wider text-[#D7E2EA]/65" style={{ gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))` }}>
            {grid.map((w, i) => {
              const first = w.find(Boolean) as Day | undefined;
              const d = first ? new Date(first.date + "T00:00:00") : null;
              return (
                <span key={i} className="overflow-visible whitespace-nowrap">
                  {d && d.getDate() <= 7 ? MONTHS[d.getMonth()] : ""}
                </span>
              );
            })}
          </div>
          <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`, gridTemplateRows: "repeat(7, auto)" }}>
            {grid.flatMap((w, i) =>
              Array.from({ length: 7 }, (_, k) => {
                const d = w[k] as Day | null | undefined;
                return (
                  <span
                    key={`${i}-${k}`}
                    title={d ? `${d.count} on ${d.date}` : undefined}
                    className="block aspect-square w-full rounded-[3px]"
                    style={{ background: d ? COLORS[d.level] : "transparent", opacity: days ? 1 : 0.4 }}
                  />
                );
              }),
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-wider text-[#D7E2EA]/65">
        Less
        {COLORS.map((c) => (
          <span key={c} className="h-[11px] w-[11px] rounded-[3px]" style={{ background: c }} />
        ))}
        More
      </div>
    </div>
  );
}
