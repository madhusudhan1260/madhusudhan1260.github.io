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
  "nv-live", "lf-01-home", "rq-04-user-map", "hr-og", "lf-06-smart-match", "ka-live",
  "rq-02-user-home", "lf-09-doss-dashboard", "lf-02-found-items", "rq-05-user-map-layers-evacuation", "lf-11-claim-review",
  "lf-03-item-details", "rq-07-user-help", "lf-04-report-lost-item", "rq-08-user-alerts", "lf-05-claim-form",
  "rq-03-user-home-why", "lf-07-my-claims", "rq-06-user-report", "lf-10-doss-claims", "lf-12-claim-review-verification",
].map((n) => `/work/${n}.jpg`);

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
  name: string;
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
    name: "NavLog Converter",
    category: "Aviation · Pravahya",
    blurb: "ForeFlight navlog exports in, operator-formatted OPS flight-plan PDFs out, across 13 aircraft and fleet templates. Live and used for real flight planning.",
    stack: ["React", "Flask", "Python"],
    live: "https://navlog-convertor-website-2-0-me9x.vercel.app",
    code: "https://github.com/madhusudhan1260/Navlog-convertor-website-2.0",
    images: ["/work/nv-live.jpg"],
  },
  {
    name: "Smart Lost & Found",
    category: "Campus · MERN",
    blurb: "The full lost-and-found lifecycle for a college campus: reports, Smart Match scoring, claim verification and a JWT-secured staff dashboard.",
    stack: ["React 19", "Express 5", "MongoDB"],
    code: "https://github.com/madhusudhan1260/smart-lost-and-found",
    images: ["/work/lf-06-smart-match.jpg", "/work/lf-09-doss-dashboard.jpg", "/work/lf-01-home.jpg"],
  },
  {
    name: "RiskN ResQ",
    category: "Climate · Mobile",
    blurb: "Street-level flood early warning that fuses rainfall, Sentinel-1 satellite radar and terrain, with lower-risk routing and community help requests.",
    stack: ["FastAPI", "PostgreSQL", "React Native"],
    code: "https://github.com/madhusudhan1260/RiskN-ResQ",
    images: ["/work/rq-02-user-home.jpg", "/work/rq-08-user-alerts.jpg", "/work/rq-04-user-map.jpg"],
    tall: true,
  },
  {
    name: "HackRadar",
    category: "Developer Tool · Live",
    blurb: "Every hackathon in one dashboard: pluggable collectors for Devpost and MLH, cross-platform de-duplication, skill-match scoring and deadline alerts.",
    stack: ["FastAPI", "React", "Python"],
    live: "https://hack-radar-virid.vercel.app",
    code: "https://github.com/madhusudhan1260/HackRadar",
    images: ["/work/hr-og.jpg"],
  },
];

export const MORE_PROJECTS = [
  { name: "Namma Bus", desc: "Real-time Bengaluru BMTC transit app: live buses, journey planner, QR passes and seat forecasts.", stack: "Expo · TypeScript · FastAPI", href: "https://github.com/madhusudhan1260/Namma_Bus" },
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
