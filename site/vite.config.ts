import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Every generated case-study and note page is its own entry, so each one
// ships as a real static HTML file that search engines can index.
const entries: Record<string, string> = { main: resolve("index.html") };
for (const dir of ["projects", "notes"]) {
  if (!existsSync(dir)) continue;
  for (const slug of readdirSync(dir)) entries[`${dir}-${slug}`] = resolve(dir, slug, "index.html");
}

// Built straight into the repository root, which GitHub Pages serves.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { outDir: "../", emptyOutDir: false, assetsDir: "assets", rollupOptions: { input: entries } },
});
