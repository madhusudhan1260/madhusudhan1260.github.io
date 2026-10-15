import { EMAIL } from "../data";
import { ContactButton } from "./Buttons";

export default function PageFooter() {
  return (
    <footer className="mt-24 rounded-t-[40px] border-t border-[#D7E2EA]/10 px-5 pb-10 pt-16 text-center sm:rounded-t-[60px] sm:px-8">
      <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}>
        Let&apos;s talk
      </h2>
      <p className="mx-auto mt-5 max-w-md font-light text-[#D7E2EA]/75">Open to full-stack and web developer roles, internships and freelance builds.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ContactButton href={`mailto:${EMAIL}`}>Email me</ContactButton>
        <a href="/" className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm">
          Back to portfolio
        </a>
      </div>
      <p className="mt-16 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/65">© {new Date().getFullYear()} Madhusudhan Ramshetty · Bengaluru</p>
    </footer>
  );
}
