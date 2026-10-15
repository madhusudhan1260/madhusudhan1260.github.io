export const EMAIL = "madhuusudhann01@gmail.com";
export const RESUME = "/Madhusudhan_Ramshetty_Resume.pdf";

export const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/madhusudhan1203/" },
  { label: "GitHub", href: "https://github.com/madhusudhan1260" },
  { label: "LeetCode", href: "https://leetcode.com/u/madhusudhan_1260/" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/madhusudhanBTEC1" },
];

/* Real screenshots of my own projects, scrolled through the marquee */
export const MARQUEE = [
  "nv-live", "nb-ai", "lf-01-home", "rq-04-user-map", "hr-og", "nb-tickets", "lf-06-smart-match", "ka-live",
  "rq-02-user-home", "lf-09-doss-dashboard", "nb-planner", "lf-02-found-items",
  "rq-05-user-map-layers-evacuation", "lf-11-claim-review", "nb-home", "lf-03-item-details", "rq-07-user-help",
  "lf-04-report-lost-item", "rq-08-user-alerts", "lf-05-claim-form", "rq-03-user-home-why", "lf-12-claim-review-verification",
].map((n) => `/shots/${n}.webp`);

export const EXPERIENCE = [
  {
    role: "Python Developer",
    company: "Pravahya Consulting Pvt Ltd",
    type: "Internship",
    dates: "May 2026 – Present",
    place: "Bengaluru South, Karnataka · Hybrid",
    points: [
      "Built the NavLog Converter, a React + Flask web app that turns ForeFlight navlog exports into operator-formatted OPS flight-plan PDFs across 13 aircraft and fleet templates.",
      "Built an FDTL (Flight Duty Time Limitations) module that tracks crew duty and rest hours and flags compliance issues.",
    ],
    skills: ["Python", "Flask", "React", "PDF generation", "Developer tools"],
  },
  {
    role: "Full Stack Engineer",
    company: "ShikshaVertex",
    type: "Part-time",
    dates: "Apr 2026 – Aug 2026",
    place: "Bommanahalli, Karnataka · Hybrid",
    points: ["Part-time full-stack engineering role, working across front-end and back-end features."],
    skills: [] as string[],
  },
];

export const SERVICES = [
  {
    name: "Full-Stack Web Apps",
    desc: "End-to-end products with React on the front and Flask, FastAPI or Node.js behind it, from first sketch to a deployed URL.",
  },
  {
    name: "Backend & REST APIs",
    desc: "Clean, well-structured APIs with authentication, validation and solid data models on MySQL, PostgreSQL or MongoDB.",
  },
  {
    name: "Aviation & Ops Software",
    desc: "Tools where the output must be exactly right: flight-plan generation, crew duty-time compliance and print-accurate PDFs.",
  },
  {
    name: "AI Integrations",
    desc: "LLM-powered features that stay grounded in real data, from assistants and smart matching to interview and study tools.",
  },
  {
    name: "Responsive UI Engineering",
    desc: "Fast, accessible interfaces that work on every screen, with attention to layout, typography and user experience.",
  },
];

export type Project = {
  slug: string;
  name: string;
  impact: string[];
  category: string;
  blurb: string;
  stack: string[];
  live?: string;
  code: string;
  images: [string] | [string, string, string];
  tall?: boolean; // right-hand image is a phone screenshot
};

export const PROJECTS: Project[] = [
  {
    slug: "navlog-converter",
    impact: ["13 fleet templates", "Live in production", "Internship project"],
    name: "NavLog Converter",
    category: "Aviation · Pravahya",
    blurb: "ForeFlight navlog exports in, operator-formatted OPS flight-plan PDFs out, across 13 aircraft and fleet templates. Deployed and live.",
    stack: ["React", "Flask", "Python"],
    live: "https://navlog-convertor-website-2-0-me9x.vercel.app",
    code: "https://github.com/madhusudhan1260/Navlog-convertor-website-2.0",
    images: ["/shots/nv-live.webp"],
  },
  {
    slug: "namma-bus",
    impact: ["302 backend tests passing", "HMAC-signed QR tickets", "Telemetry-grounded AI"],
    name: "Namma Bus",
    category: "Mobility · Real-time",
    blurb: "A real-time BMTC transit platform for Bengaluru: live buses, a journey planner, seat forecasts, QR passes with a conductor validator, and an assistant that answers only from live data.",
    stack: ["Expo", "TypeScript", "FastAPI"],
    code: "https://github.com/madhusudhan1260/Namma_Bus",
    images: ["/shots/nb-home.webp", "/shots/nb-ai.webp", "/shots/nb-tickets.webp"],
    tall: true,
  },
  {
    slug: "smart-lost-and-found",
    impact: ["0–100 explainable matching", "4-check claim verification", "JWT staff portal"],
    name: "Smart Lost & Found",
    category: "Campus · MERN",
    blurb: "The full lost-and-found lifecycle for a college campus: reports, Smart Match scoring, claim verification and a JWT-secured staff dashboard.",
    stack: ["React 19", "Express 5", "MongoDB"],
    code: "https://github.com/madhusudhan1260/smart-lost-and-found",
    images: ["/shots/lf-06-smart-match.webp", "/shots/lf-09-doss-dashboard.webp", "/shots/lf-01-home.webp"],
  },
  {
    slug: "riskn-resq",
    impact: ["Sentinel-1 satellite radar", "15-min rainfall refresh", "EN · HI · KN"],
    name: "RiskN ResQ",
    category: "Climate · Mobile",
    blurb: "Street-level flood early warning that fuses rainfall, Sentinel-1 satellite radar and terrain, with lower-risk routing and community help requests.",
    stack: ["FastAPI", "PostgreSQL", "React Native"],
    code: "https://github.com/madhusudhan1260/RiskN-ResQ",
    images: ["/shots/rq-02-user-home.webp", "/shots/rq-08-user-alerts.webp", "/shots/rq-04-user-map.webp"],
    tall: true,
  },
  {
    slug: "hackradar",
    impact: ["Cross-platform de-duplication", "Re-ingests every 6 h", "Live on Vercel"],
    name: "HackRadar",
    category: "Developer Tool · Live",
    blurb: "Every hackathon in one dashboard: pluggable collectors for Devpost and MLH, cross-platform de-duplication, skill-match scoring and deadline alerts.",
    stack: ["FastAPI", "React", "Python"],
    live: "https://hack-radar-virid.vercel.app",
    code: "https://github.com/madhusudhan1260/HackRadar",
    images: ["/shots/hr-og.webp"],
  },
];

export const MORE_PROJECTS = [
  { name: "FDTL Management System", desc: "Crew-duty planning with Flight Duty Time Limit compliance checks and violation tracking.", stack: "React · Recharts", href: "https://github.com/madhusudhan1260/FDTL-NEW" },
  { name: "Campus Safety Reporter", desc: "Framework-free Java 21 server that routes campus safety reports, emergencies first.", stack: "Java · JDBC · MySQL", href: "https://github.com/madhusudhan1260/campus-safety" },
  { name: "Campusly", desc: "Campus portal for hackathons, internships, health check-ins and a lost-and-found board.", stack: "Flask · Gemini", href: "https://github.com/madhusudhan1260/new--campusly" },
  { name: "AI Interview Taker", desc: "Mock interviews with AI questions, answer evaluation, resume ATS parsing and a study plan.", stack: "Flask · JWT · JS", href: "https://github.com/madhusudhan1260/AI-INTERVIEW-TAKER" },
  { name: "Kalendra", desc: "A clean, fast calendar for events, birthdays and tasks. No build step, no backend.", stack: "HTML · CSS · JS", href: "https://madhusudhan1260.github.io/kalendra/" },
  { name: "MoneyJar", desc: "Personal finance dashboard with spending insights and UPI statement import. Installable PWA.", stack: "Flask · PWA", href: "https://github.com/madhusudhan1260/moneyjar" },
  { name: "Daybreak", desc: "An iPhone-style planner in one HTML file: schedule, reminders, work log and alarms.", stack: "HTML · JS", href: "https://github.com/madhusudhan1260/daybreak" },
];

export const EDUCATION = [
  { title: "B.Tech, Computer Science & Engineering", where: "Alliance University, Bengaluru", meta: "2024 – 2028 · CGPA 8.2" },
  { title: "12th Grade (PUC)", where: "Narayana PU College, Hulimavu", meta: "2024 · 90%" },
  { title: "10th Grade (SSLC)", where: "Narayana E-Techno School, Hulimavu", meta: "2022 · 80%" },
];

export const ACHIEVEMENTS = [
  { title: "3rd Place, HackerRank Hackathon", meta: "Award" },
  { title: "Oracle Agentic AI Foundations Associate", meta: "Oracle · Certification" },
  { title: "AI Tools & Claude Workshop", meta: "Be10X · Certification" },
  { title: "CodeVeda 2026 Hackathon", meta: "Alliance School of Advanced Computing" },
  { title: "Google DeepMind Bangalore, AWS, MLH, Paytm & Orchestrate hackathons", meta: "Participant" },
];
