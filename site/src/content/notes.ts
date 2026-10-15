export type Note = {
  slug: string;
  title: string;
  date: string;
  readMins: number;
  tags: string[];
  project: string; // case-study slug
  body: ({ h: string } | { p: string } | { list: string[] })[];
};

export const NOTES: Note[] = [
  {
    slug: "navlog-to-flight-plan",
    title: "One data model, thirteen flight plans",
    date: "Oct 2026",
    readMins: 3,
    tags: ["Aviation", "Python", "Architecture"],
    project: "navlog-converter",
    body: [
      { p: "At Pravahya I built the NavLog Converter: you upload a ForeFlight navlog export and get back an operational flight plan (OFP) laid out exactly the way a particular operator prints it. The interesting part wasn't the PDF. It was what happened when the number of layouts kept growing." },
      { h: "The trap: one converter per format" },
      { p: "The obvious first version reads the navlog and draws the PDF in one pass. That works for one operator. For the second you copy it and tweak it. By the fifth, a parsing fix has to be made five times, and the copies quietly drift apart." },
      { h: "Split parsing from rendering" },
      { p: "So the tool runs in two stages joined by one contract:" },
      { list: [
        "The parser reads the ForeFlight HTML export and produces structured JSON: route, waypoints, fuel figures, alternates, winds and ATC details.",
        "Each template takes that JSON and decides only how to print it: which fuel lines appear, which blocks exist and whether the page is A4 or Letter.",
      ] },
      { p: "Adding an operator now means adding a template. The parser doesn't change, which is how the converter reached thirteen aircraft and fleet templates without becoming harder to maintain." },
      { h: "Why deterministic matters" },
      { p: "A flight plan is a working document. A fuel figure that's twenty units out isn't 'close enough'; it's wrong. There's no guessing anywhere in the numbers path: the same navlog always produces the same plan, and that's what makes it trustworthy enough to print." },
      { h: "What I'd tell my earlier self" },
      { p: "Find the seam in the problem early. Here it was 'what the data is' versus 'how this customer wants it to look'. Once that boundary was explicit, every new request became small." },
    ],
  },
  {
    slug: "verifying-ownership-claims",
    title: "Deciding who really owns a lost phone",
    date: "Oct 2026",
    readMins: 3,
    tags: ["Product", "JavaScript", "MERN"],
    project: "smart-lost-and-found",
    body: [
      { p: "On most campuses, lost-and-found runs on WhatsApp groups. The hardest problem isn't finding items; it's that anyone can reply 'that's mine'. When I built Smart Lost & Found, verifying ownership was the core of the design." },
      { h: "Hide the proof in plain sight" },
      { p: "When someone reports a found item, they also record private details that never appear publicly and are never searchable: a scratch, a sticker, what's inside the case. Someone claiming the item has to describe a unique feature without seeing those details." },
      { h: "Weighted evidence" },
      { p: "A verification helper compares the claim against the private details and the linked reports, and scores four things:" },
      { list: [
        "The claimant's unique feature against the private details: 50 points",
        "A consistent location (same place or nearby): 20 points",
        "Consistent dates (lost before found, within 14 days): 15 points",
        "A linked lost report that Smart Match also rates highly: 15 points",
      ] },
      { p: "The result is shown as Strong, Some or Weak evidence, with a percentage." },
      { h: "Advise, don't decide" },
      { p: "The score never accepts or rejects a claim by itself. Staff see the found report, the claimant's answers and the hidden details side by side, then make the call. An explainable score that supports a human is far easier to trust, and to defend, than an automatic verdict." },
    ],
  },
  {
    slug: "grounded-transit-assistant",
    title: "An AI bus assistant that refuses to guess",
    date: "Oct 2026",
    readMins: 3,
    tags: ["AI", "Transit", "FastAPI"],
    project: "namma-bus",
    body: [
      { p: "Namma Bus has an assistant that answers questions like 'Where is my 500D?' or 'Will I get a seat?'. The easy way to build that is to hand the question to a language model and print the reply. The problem is that a fluent wrong answer about a bus is worse than no answer: you miss the bus." },
      { h: "Answer from telemetry, not imagination" },
      { p: "Every answer is built from the same live data the map uses: vehicle positions, trip updates and the crowd model. The assistant detects the intent (where, when, seats, stops), pulls the matching data, and phrases only what that data supports." },
      { h: "Know how fresh the data is" },
      { p: "Each feed is tracked as realtime, delayed, stale or unavailable, and the app labels simulated demo data explicitly. The assistant carries the same awareness, so an answer built on stale data says so instead of presenting a guess as a live position." },
      { h: "Conversations, not single questions" },
      { p: "People ask follow-ups: 'Where is 500D?' then 'Show me its stops.' The assistant resolves 'its' to the bus from the previous turn, and answers deep-link straight into the live map for that vehicle." },
      { h: "The takeaway" },
      { p: "Grounding is a product decision as much as a technical one. Deciding what the assistant is allowed to say, and being honest about data quality, matters more than how clever the wording sounds." },
    ],
  },
];
