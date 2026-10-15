import { MotionConfig } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import NotesSection from "./sections/NotesSection";
import CredentialsSection from "./sections/CredentialsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <main id="top" className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <NotesSection />
        <CredentialsSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
