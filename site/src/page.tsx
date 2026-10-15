import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotePage from "./pages/NotePage";
import "./index.css";

const root = document.getElementById("root")!;
const { page, slug = "" } = root.dataset;

createRoot(root).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      {page === "note" ? <NotePage slug={slug} /> : <CaseStudyPage slug={slug} />}
    </MotionConfig>
  </StrictMode>,
);
