import { Bot, Bus, Database, Plane, type LucideIcon } from "lucide-react";

/* Each code line on the laptop screen: [indent, [width, colour]...] */
const LINES: [number, [number, string][]][] = [
  [0, [[34, "#B600A8"], [70, "#7C9CFF"], [24, "#D7E2EA55"]]],
  [14, [[46, "#6EE7D8"], [90, "#D7E2EA55"]]],
  [14, [[28, "#B600A8"], [58, "#FDBA74"], [40, "#D7E2EA55"]]],
  [28, [[64, "#7C9CFF"], [54, "#6EE7D8"]]],
  [28, [[40, "#D7E2EA55"], [72, "#FDBA74"]]],
  [14, [[30, "#B600A8"], [96, "#7C9CFF"]]],
  [0, [[22, "#D7E2EA55"]]],
  [0, [[52, "#6EE7D8"], [44, "#B600A8"], [30, "#D7E2EA55"]]],
];

function Tile({ Icon, from, to, className, delay }: { Icon: LucideIcon; from: string; to: string; className: string; delay: string }) {
  return (
    <div className={`float-slow absolute ${className}`} style={{ animationDelay: delay }}>
      <div
        className="grid aspect-square w-full place-items-center rounded-[28%]"
        style={{
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), transparent 34%), linear-gradient(145deg, ${from}, ${to})`,
          boxShadow: `inset -8px -10px 18px rgba(0,0,0,0.35), inset 6px 6px 14px rgba(255,255,255,0.25), 0 24px 44px -18px ${to}`,
        }}
      >
        <Icon className="h-[46%] w-[46%] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]" strokeWidth={1.8} />
      </div>
    </div>
  );
}

export default function HeroVisual() {
  let y = 118;
  return (
    <div className="relative aspect-[6/5] w-full select-none" aria-hidden="true">
      {/* glow */}
      <div
        className="absolute inset-[6%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(182,0,168,0.5), rgba(118,33,176,0.28) 45%, transparent 70%)" }}
      />

      <svg viewBox="0 0 480 400" className="float-slow relative h-full w-full overflow-visible">
        <defs>
          <linearGradient id="hv-bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#34343F" />
            <stop offset="1" stopColor="#121218" />
          </linearGradient>
          <linearGradient id="hv-base" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4A4A58" />
            <stop offset="0.45" stopColor="#25252E" />
            <stop offset="1" stopColor="#141419" />
          </linearGradient>
          <linearGradient id="hv-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#140A1E" />
            <stop offset="1" stopColor="#07070C" />
          </linearGradient>
          <linearGradient id="hv-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hv-shadow">
            <stop offset="0" stopColor="#000" stopOpacity="0.7" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="240" cy="330" rx="210" ry="22" fill="url(#hv-shadow)" />

        {/* screen */}
        <rect x="82" y="64" width="316" height="214" rx="16" fill="url(#hv-bezel)" stroke="rgba(255,255,255,0.16)" />
        <rect x="94" y="76" width="292" height="190" rx="9" fill="url(#hv-screen)" />
        <circle cx="108" cy="90" r="3.5" fill="#FF5F57" />
        <circle cx="120" cy="90" r="3.5" fill="#FEBC2E" />
        <circle cx="132" cy="90" r="3.5" fill="#28C840" />
        <text x="240" y="93" textAnchor="middle" fontSize="9" fill="#D7E2EA" opacity="0.45" fontFamily="Kanit, sans-serif" letterSpacing="1">
          portfolio.tsx
        </text>

        {LINES.map(([indent, segs], i) => {
          let x = 110 + indent;
          const row = (
            <g key={i} className="hv-line" style={{ animationDelay: `${i * 0.55}s` }}>
              <text x="100" y={y + 3.5} fontSize="7.5" fill="#D7E2EA" opacity="0.25" fontFamily="monospace">
                {i + 1}
              </text>
              {segs.map(([w, c], j) => {
                const r = <rect key={j} x={x} y={y} width={w} height="6" rx="3" fill={c} />;
                x += w + 6;
                return r;
              })}
            </g>
          );
          y += 17;
          return row;
        })}
        <rect x="110" y={y - 1} width="7" height="9" rx="1.5" fill="#B600A8" className="hv-caret" />

        {/* reflection on the glass */}
        <path d="M94 76 h170 l-120 190 h-41 a9 9 0 0 1 -9 -9 Z" fill="url(#hv-sheen)" />

        {/* base */}
        <path d="M44 280 H436 a6 6 0 0 1 5 3 l18 22 a4 4 0 0 1 -3 6.5 H24 a4 4 0 0 1 -3 -6.5 l18 -22 a6 6 0 0 1 5 -3 Z" fill="url(#hv-base)" stroke="rgba(255,255,255,0.14)" />
        <rect x="205" y="280" width="70" height="7" rx="3.5" fill="#0C0C0C" opacity="0.55" />
        <path d="M24 311.5 H456" stroke="rgba(255,255,255,0.12)" />
      </svg>

      <Tile Icon={Plane} from="#3B82F6" to="#1E1B4B" className="left-[0%] top-[4%] w-[17%]" delay="0s" />
      <Tile Icon={Bot} from="#B600A8" to="#3B0764" className="right-[0%] top-[0%] w-[19%]" delay="0.8s" />
      <Tile Icon={Database} from="#14B8A6" to="#064E3B" className="bottom-[14%] left-[-4%] w-[14%]" delay="1.6s" />
      <Tile Icon={Bus} from="#F97316" to="#7C2D12" className="bottom-[20%] right-[-3%] w-[15%]" delay="2.4s" />

      {/* glass status chips */}
      <div className="float-slow absolute left-[14%] top-[-2%] hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md sm:flex" style={{ animationDelay: "1.2s" }}>
        <span className="h-2 w-2 rounded-full bg-[#4ADE80] shadow-[0_0_0_3px_rgba(74,222,128,0.25)]" />
        Open to work
      </div>
      <div className="float-slow absolute bottom-[2%] right-[10%] hidden rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md sm:block" style={{ animationDelay: "2s" }}>
        React · Flask · FastAPI
      </div>
    </div>
  );
}
