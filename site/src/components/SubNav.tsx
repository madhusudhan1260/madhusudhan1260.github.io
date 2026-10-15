import { ArrowLeft } from "lucide-react";
import { ContactButton } from "./Buttons";

export default function SubNav({ back = "/#projects", backLabel = "All projects" }: { back?: string; backLabel?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D7E2EA]/10 bg-[#0C0C0C]/80 backdrop-blur-md">
      <nav aria-label="Site" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href={back} className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:opacity-80">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {backLabel}
        </a>
        <a href="/" className="hero-heading hidden text-xl font-black uppercase tracking-tight sm:block">Madhusudhan</a>
        <ContactButton href="/#contact" className="!px-6 !py-2.5 !text-xs">Hire me</ContactButton>
      </nav>
    </header>
  );
}
