import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Built straight into the repository root, which GitHub Pages serves.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { outDir: "../", emptyOutDir: false, assetsDir: "assets" },
});
