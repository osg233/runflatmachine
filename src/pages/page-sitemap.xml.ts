import { lastmods, sitemapGroups, site } from "@/data/site";

export function GET() {
  return new Response(urlset(sitemapGroups.pages), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

function urlset(paths: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => url(path)).join("\n")}
</urlset>`;
}

function url(path: string) {
  return `  <url>
    <loc>${new URL(path, site.domain).toString()}</loc>
    <lastmod>${lastmods[path] ?? "2025-11-24"}</lastmod>
  </url>`;
}
