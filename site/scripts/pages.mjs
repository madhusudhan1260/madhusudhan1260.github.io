// Generates one HTML entry per case study and note (own title, description,
// canonical URL and share card), plus sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const cfg = JSON.parse(readFileSync("src/content/pages.json", "utf8"));
const SITE = cfg.site;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const base = readFileSync("index.html", "utf8");

function page(dir, kind, p) {
  const url = `${SITE}/${dir}/${p.slug}/`;
  const title = `${p.title} | Madhusudhan Ramshetty`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(<meta property="og:type" content=")[^"]*"/, `$1article"`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/, "")
    .replace(/\s*<link rel="preload" as="image" href="\/avatar.webp"[^>]*>/, "")
    .replace('<div id="root"></div>', `<div id="root" data-page="${kind}" data-slug="${p.slug}"></div>`)
    .replace('src="/src/main.tsx"', 'src="/src/page.tsx"');
  mkdirSync(`${dir}/${p.slug}`, { recursive: true });
  writeFileSync(`${dir}/${p.slug}/index.html`, html);
  return url;
}

rmSync("projects", { recursive: true, force: true });
rmSync("notes", { recursive: true, force: true });
const urls = [`${SITE}/`];
for (const p of cfg.projects) urls.push(page("projects", "project", p));
for (const n of cfg.notes) urls.push(page("notes", "note", n));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`,
);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`generated ${urls.length - 1} pages + sitemap`);
