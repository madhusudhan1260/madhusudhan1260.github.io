import { Bus, Code2, Database, Plane, type LucideIcon } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import { ContactButton } from "../components/Buttons";
import { RESUME } from "../data";

const ABOUT =
  "I'm a Computer Science student at Alliance University and a Python Developer intern at Pravahya, where I build aviation software that turns raw flight data into airline-ready flight plans. I love shipping full-stack products end to end, from React front ends to Flask, FastAPI and Node.js back ends. Let's build something incredible together!";

/* glossy 3D-style tiles, one for each world I build software for */
function Orb({ Icon, from, to, className }: { Icon: LucideIcon; from: string; to: string; className: string }) {
  return (
    <div className={`float-slow ${className}`}>
      <div
        className="grid aspect-square w-full place-items-center rounded-[28%]"
        style={{
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), transparent 32%), linear-gradient(145deg, ${from}, ${to})`,
          boxShadow: `inset -10px -14px 24px rgba(0,0,0,0.35), inset 8px 8px 18px rgba(255,255,255,0.25), 0 30px 60px -20px ${to}`,
          transform: "rotate(-8deg)",
        }}
      >
        <Icon className="h-[42%] w-[42%] text-white drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" strokeWidth={1.8} />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[90px] sm:left-[2%] sm:w-[120px] md:left-[4%] md:w-[150px]">
        <Orb Icon={Plane} from="#3b82f6" to="#1e1b4b" className="" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] w-[70px] sm:left-[6%] sm:w-[100px] md:left-[10%] md:w-[130px]">
        <Orb Icon={Database} from="#14b8a6" to="#064e3b" className="[animation-delay:1.2s]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] w-[90px] sm:right-[2%] sm:w-[120px] md:right-[4%] md:w-[150px]">
        <Orb Icon={Code2} from="#B600A8" to="#3b0764" className="[animation-delay:0.6s]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] w-[80px] sm:right-[6%] sm:w-[110px] md:right-[10%] md:w-[140px]">
        <Orb Icon={Bus} from="#f97316" to="#7c2d12" className="[animation-delay:1.8s]" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            About me
          </FadeIn>
          <AnimatedText
            text={ABOUT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>
        <FadeIn className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton href="#contact" />
          <a
            href={RESUME}
            download
            className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
          >
            Download Résumé
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
