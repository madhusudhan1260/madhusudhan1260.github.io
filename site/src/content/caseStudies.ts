export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  live?: string;
  code: string;
  metrics: { value: string; label: string }[];
  problem: string;
  built: string[];
  architecture: string[];
  decisions: { title: string; body: string }[];
  gallery: string[];
  tall?: boolean;
};

const s = (n: string) => `/shots/${n}.webp`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "navlog-converter",
    name: "NavLog Converter",
    tagline: "ForeFlight navlog exports in, airline-ready operational flight plans out.",
    category: "Aviation",
    year: "2026",
    role: "Built as a Python Developer intern at Pravahya Consulting",
    stack: ["React", "Vite", "Python", "Flask", "PDF generation", "Render", "Vercel"],
    live: "https://navlog-convertor-website-2-0-me9x.vercel.app",
    code: "https://github.com/madhusudhan1260/Navlog-convertor-website-2.0",
    metrics: [
      { value: "13", label: "Aircraft & fleet templates" },
      { value: "A4 / LTR", label: "Print-accurate page sizes" },
      { value: "Live", label: "Deployed on Vercel + Render" },
      { value: "0", label: "Manual edits per plan" },
    ],
    problem:
      "Dispatchers plan flights in ForeFlight, but every operator prints its operational flight plan (OFP) in its own layout: different fuel policy lines, alternates, crew blocks and page sizes. Re-typing a navlog into each operator's format by hand was slow, and a single wrong fuel figure makes a flight plan wrong rather than approximately right.",
    built: [
      "Upload a ForeFlight navlog export and have it parsed automatically into structured flight data",
      "Pick the operator or fleet format; each template prints only the figures that operator actually uses",
      "Generate a downloadable, print-ready PDF covering route, waypoints, fuel, alternates, winds and ATC details",
      "A responsive two-step flow: choose the output format, then fill in only what that template needs",
    ],
    architecture: [
      "React + Vite front end (Vercel)",
      "Flask API with token auth (Render)",
      "Parser: navlog HTML → structured JSON",
      "Template engine: one data model, 13 layouts",
      "PDF renderer → download",
    ],
    decisions: [
      {
        title: "Parse once, render many",
        body: "The parser and the PDF layouts are separate stages joined by one structured data model. Adding an operator means adding a template, not touching the parser, which is how it reached thirteen templates without the parser growing more complex.",
      },
      {
        title: "Two services, on purpose",
        body: "The front end is static and the PDF generation is Python, so they deploy separately: the React app on Vercel and the Flask API on Render. Each scales and redeploys on its own.",
      },
      {
        title: "Exact, not close",
        body: "Flight plans are working documents. The conversion is deterministic, with no guessing or AI in the numbers path, so the same navlog always produces the same plan.",
      },
    ],
    gallery: [s("nv-live")],
  },
  {
    slug: "namma-bus",
    name: "Namma Bus",
    tagline: "A real-time transit platform for Bengaluru's BMTC commuters and crew.",
    category: "Mobility",
    year: "2026",
    role: "Designed and built end to end: mobile app, backend and tests",
    stack: ["Expo", "React Native", "TypeScript", "FastAPI", "Python", "GTFS-Realtime", "Docker"],
    code: "https://github.com/madhusudhan1260/Namma_Bus",
    metrics: [
      { value: "302", label: "Backend tests passing" },
      { value: "26", label: "Test suites" },
      { value: "17", label: "Engine modules monitored" },
      { value: "0", label: "TypeScript errors" },
    ],
    problem:
      "Bengaluru bus riders rarely know where their bus is, whether they'll get a seat, or which route is actually fastest. Paper and app tickets are hard for conductors to verify quickly, and most 'smart' transit assistants will confidently answer with data they don't have.",
    built: [
      "Live buses on a native map along real Bengaluru corridors, with a follow-the-bus camera",
      "A journey planner that compares routes by fastest, lowest fare and most seats",
      "Stop-by-stop seat-availability forecasts with confidence scores",
      "Digital QR passes plus a conductor validator with live onboard tallies",
      "A natural-language assistant (\"Will I get a seat on 500D?\") answered only from live telemetry",
      "Kannada and English, with service alerts and accessibility information",
    ],
    architecture: [
      "Expo / React Native app (phone + web)",
      "FastAPI REST backend",
      "TransitDataProvider: GTFS static + GTFS-RT",
      "Background poller → in-memory snapshots",
      "Journey, crowd, ticket & assistant engines",
    ],
    decisions: [
      {
        title: "A pluggable data provider",
        body: "Everything reads through one TransitDataProvider interface, with GTFS Static and GTFS-Realtime (vehicle positions, trip updates, service alerts) parsers behind it. Swapping the demo feed for an authorised live feed needs no app changes.",
      },
      {
        title: "Tickets that can't be forged",
        body: "Each pass carries an HMAC-SHA256 signature. The validator detects tampering, route mismatches and duplicate scans, and conductors only see the minimum data they need.",
      },
      {
        title: "Honest about its data",
        body: "The app labels data as realtime, delayed, stale or simulated everywhere it appears, and the assistant inherits the same awareness, so it never presents a guess as a live position.",
      },
    ],
    gallery: [s("nb-home"), s("nb-ai"), s("nb-tickets"), s("nb-planner")],
    tall: true,
  },
  {
    slug: "smart-lost-and-found",
    name: "Smart Lost & Found",
    tagline: "The complete lost-and-found lifecycle for a college campus.",
    category: "Campus",
    year: "2026",
    role: "Full-stack build: React front end, Express API and MongoDB schema",
    stack: ["React 19", "Vite", "React Router", "Node.js", "Express 5", "MongoDB", "JWT"],
    code: "https://github.com/madhusudhan1260/smart-lost-and-found",
    metrics: [
      { value: "0–100", label: "Explainable Smart Match score" },
      { value: "4", label: "Evidence checks per claim" },
      { value: "9", label: "Live staff dashboard stats" },
      { value: "12", label: "Screens, desktop & mobile" },
    ],
    problem:
      "Lost items on campus were handled through WhatsApp groups and notice boards. Posts got buried, nobody compared 'lost' posts with 'found' ones, anyone could say 'that's mine', and the office holding found items had no record of who collected what.",
    built: [
      "Report lost or found items with photos and private identifying details",
      "Debounced search, filters and sorting across all reports, where private details are never searchable",
      "Smart Match: a 0–100 score with every factor explained (same category, same colour…)",
      "Ownership claims with proof, and a progress tracker from submitted to resolved",
      "A JWT-secured staff (DOSS) dashboard with claim review, charts and collection records",
    ],
    architecture: [
      "React UI (display + input only)",
      "apiClient: the single place that calls the API",
      "Express REST API + JWT for staff routes",
      "Claim workflow service",
      "MongoDB via Mongoose schemas",
    ],
    decisions: [
      {
        title: "Private details as the proof",
        body: "Finders record details they don't publish. A claimant must describe a unique feature, and the verification helper compares it against those hidden details, which a fake claimant can't see.",
      },
      {
        title: "Weighted evidence, human decision",
        body: "The claim check weighs the unique feature (50), location (20), dates (15) and a matching lost report (15) into Strong, Some or Weak evidence. It advises the staff member; it never accepts a claim on its own.",
      },
      {
        title: "Clear boundaries",
        body: "React only shows data and collects input, one API client makes every request, and Express validates input and runs the claim workflow. Each layer has one job, which kept a large feature set manageable.",
      },
    ],
    gallery: [s("lf-01-home"), s("lf-06-smart-match"), s("lf-09-doss-dashboard"), s("lf-11-claim-review"), s("lf-05-claim-form"), s("lf-02-found-items")],
  },
  {
    slug: "riskn-resq",
    name: "RiskN ResQ",
    tagline: "Hyper-local flood early warning and community response.",
    category: "Climate",
    year: "2026",
    role: "Designed and built the backend, data pipeline and mobile app",
    stack: ["FastAPI", "Pydantic", "PostgreSQL", "React Native", "Expo", "Leaflet", "Shapely"],
    code: "https://github.com/madhusudhan1260/RiskN-ResQ",
    metrics: [
      { value: "15 min", label: "Rainfall refresh, 25-point grid" },
      { value: "10 yrs", label: "Rainfall history per cell" },
      { value: "3", label: "Roles: user, volunteer, admin" },
      { value: "3", label: "Languages: EN · HI · KN" },
    ],
    problem:
      "During urban floods people learn about danger late, when a road is already under water. Warnings are city-wide instead of street-level, and help with medicine, water or evacuation is arranged ad hoc over phone calls.",
    built: [
      "Street-level flood risk for every grid cell, with the reasons behind each estimate",
      "Flood-aware routing that avoids blocked roads and satellite-detected flood areas",
      "Incident reports with photos, help requests and automatic alerts",
      "Volunteer matching by distance, skills and resources",
      "An admin console for incident review, drills, road control and broadcasts",
    ],
    architecture: [
      "Open-Meteo weather, terrain, river & history",
      "Sentinel-1 radar via Planetary Computer",
      "Scheduled ingestion → PostgreSQL cache",
      "Flood intelligence engine → hotspots, alerts, road risk",
      "FastAPI → Expo app (phone + browser)",
    ],
    decisions: [
      {
        title: "Evidence first, reports second",
        body: "Environmental signals (rainfall, satellite water change, terrain, river level) drive the estimate. Community reports count only as capped, verified secondary evidence, so a few posts can't fake a flood.",
      },
      {
        title: "Phones never call satellites",
        body: "The backend fetches every source on a schedule and stores results with their source and timestamp. The app reads processed results from one endpoint, which keeps it fast on weak networks.",
      },
      {
        title: "Honest claims",
        body: "The risk model is a documented rule-based prototype, not a validated prediction, and the repo says exactly what is real, simulated or prototype. Admin drills are labelled as simulated everywhere.",
      },
    ],
    gallery: [s("rq-02-user-home"), s("rq-03-user-home-why"), s("rq-04-user-map"), s("rq-05-user-map-layers-evacuation"), s("rq-07-user-help"), s("rq-08-user-alerts")],
    tall: true,
  },
  {
    slug: "hackradar",
    name: "HackRadar",
    tagline: "Every hackathon in one dashboard, ranked against your skills.",
    category: "Developer tool",
    year: "2026",
    role: "Designed and built the data pipeline, API and dashboard",
    stack: ["Python", "FastAPI", "SQLite / PostgreSQL", "React", "Vite", "Render", "Vercel"],
    live: "https://hack-radar-virid.vercel.app",
    code: "https://github.com/madhusudhan1260/HackRadar",
    metrics: [
      { value: "6 h", label: "Automatic re-ingest cycle" },
      { value: "14+", label: "Auto-classified categories" },
      { value: "7·3·1", label: "Days-before deadline alerts" },
      { value: "Live", label: "Deployed on Render + Vercel" },
    ],
    problem:
      "Hackathons are scattered across Devpost, MLH, Unstop, HackerEarth, Devfolio and more. The same event appears on several sites with different details, and deadlines slip past while you check ten tabs.",
    built: [
      "Pluggable collectors that pull listings from multiple platforms",
      "Normalisation and cross-platform de-duplication of the same event",
      "Classification into AI/ML, Web, Security, Cloud and 10+ more categories",
      "Filters for region, prize bucket (₹), free entry, mode and team size",
      "A skill-based match score, bookmarks and deadline alerts",
    ],
    architecture: [
      "Collectors: Devpost, MLH (+ adapters)",
      "Clean / normalise",
      "De-duplicate across platforms",
      "Classify + tag",
      "Database → React dashboard + notifications",
    ],
    decisions: [
      {
        title: "A pipeline, not a scraper",
        body: "Each stage (collect, normalise, de-duplicate, classify, store) is its own service, so adding a new platform is just a new collector adapter.",
      },
      {
        title: "Security basics done properly",
        body: "Generic login errors prevent user enumeration, five failed attempts lock an account for 15 minutes, and reset codes are hashed, short-lived and rate-limited.",
      },
      {
        title: "Never an empty screen",
        body: "On first run the backend seeds sample hackathons, then re-ingests every six hours, so the dashboard is useful immediately and stays fresh.",
      },
    ],
    gallery: [s("hr-og")],
  },
];
