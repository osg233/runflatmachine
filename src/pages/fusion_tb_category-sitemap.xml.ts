import { sitemapGroups, site } from "@/data/site";

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapGroups.fusion.map((path) => `  <url>
    <loc>${new URL(path, site.domain).toString()}</loc>
    <lastmod>2025-11-21</lastmod>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
