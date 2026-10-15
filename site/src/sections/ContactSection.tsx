import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";
import { EMAIL, LINKS, RESUME } from "../data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-10 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <FadeIn as="h2" y={40} className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Let&apos;s talk
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="mt-8 max-w-xl font-light leading-relaxed text-[#D7E2EA]/80" style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
          Open to full-stack and web developer internships, freelance builds and hackathon teams. I usually reply within a day.
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 flex w-full max-w-2xl flex-col items-center gap-3 rounded-[32px] border border-[#D7E2EA]/20 p-3 sm:flex-row sm:rounded-full sm:pl-8">
          <a href={`mailto:${EMAIL}`} className="min-w-0 flex-1 break-all text-lg font-medium text-[#D7E2EA] hover:opacity-80 sm:text-left sm:text-xl">
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#0C0C0C] transition-opacity hover:opacity-85 sm:w-auto"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12 w-full max-w-3xl rounded-[32px] border border-[#D7E2EA]/15 p-5 sm:p-8">
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
          >
            <Download className="h-4 w-4" /> Résumé
          </a>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full border border-[#D7E2EA]/20 px-5 py-4 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:border-[#D7E2EA]/60 sm:text-base"
            >
              {l.label}
              <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </FadeIn>
      </div>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#D7E2EA]/15 pt-8 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/65 sm:flex-row sm:text-sm">
        <span>© {new Date().getFullYear()} Madhusudhan Ramshetty</span>
        <span>Bengaluru, India</span>
        <a href="#top" className="hover:text-[#D7E2EA]">Back to top ↑</a>
      </footer>
    </section>
  );
}
