import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import { ContactButton } from "../components/Buttons";
import HeroVisual from "../components/HeroVisual";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const AVATAR = "/avatar.webp";

export default function HeroSection() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  return (
    <section className="relative flex h-screen min-h-[560px] flex-col" style={{ overflowX: "clip" }}>
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20 flex justify-between gap-3 px-6 pt-6 md:px-10 md:pt-8">
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className="text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
          >
            {n.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[12.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[13.5vw] md:-mt-2 md:text-[14vw] lg:text-[14.5vw]"
        >
          Hi, i&apos;m madhu
        </FadeIn>
      </div>

      {/* 3D avatar; falls back to the animated laptop if the image can't load */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <div className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
              {avatarFailed ? (
                <HeroVisual />
              ) : (
                <img
                  src={AVATAR}
                  alt="3D avatar"
                  width={1040}
                  height={1126}
                  fetchPriority="high"
                  className="h-auto w-full select-none"
                  draggable={false}
                  onError={() => setAvatarFailed(true)}
                />
              )}
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          a full-stack developer building fast, reliable web apps for real-world problems
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
