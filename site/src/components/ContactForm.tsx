import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { EMAIL } from "../data";

/* No third-party form service: the message is composed into the visitor's
   own mail app, so nothing is stored anywhere and nothing can be spammed. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const from = String(f.get("email") || "").trim();
    const topic = String(f.get("topic") || "");
    const msg = String(f.get("message") || "").trim();
    const subject = `${topic} — from ${name}`;
    const body = `${msg}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-[20px] border border-[#D7E2EA]/20 bg-white/[0.03] px-5 py-4 text-base font-light text-[#D7E2EA] placeholder:text-[#D7E2EA]/60 outline-none transition-colors focus:border-[#B600A8] focus:bg-white/[0.05]";

  return (
    <form onSubmit={submit} className="grid w-full gap-3 text-left sm:grid-cols-2" aria-label="Contact form">
      <label className="flex flex-col gap-2">
        <span className="pl-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">Your name</span>
        <input name="name" required autoComplete="name" placeholder="Priya Sharma" className={field} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="pl-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">Your email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="priya@company.com" className={field} />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="pl-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">About</span>
        <select name="topic" className={`${field} appearance-none`} defaultValue="Job / internship opportunity">
          <option className="bg-[#0C0C0C]">Job / internship opportunity</option>
          <option className="bg-[#0C0C0C]">Freelance project</option>
          <option className="bg-[#0C0C0C]">Hackathon team</option>
          <option className="bg-[#0C0C0C]">Just saying hi</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="pl-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">Message</span>
        <textarea name="message" required rows={5} placeholder="Tell me about the role or project…" className={`${field} resize-y`} />
      </label>
      <div className="flex flex-col items-center gap-3 sm:col-span-2 sm:flex-row sm:justify-between">
        <p className="text-sm font-light text-[#D7E2EA]/55" aria-live="polite">
          {sent ? "Your email app should have opened with the message ready to send." : "Opens your email app with everything filled in."}
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
            boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
            outline: "2px solid white",
            outlineOffset: "-3px",
          }}
        >
          <Send className="h-4 w-4" /> Send message
        </button>
      </div>
    </form>
  );
}
