import { sitemapGroups, site } from "@/data/site";

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapGroups.tags.map((path) => `  <url>
    <loc>${new URL(path, site.domain).toString()}</loc>
    <lastmod>2024-07-11</lastmod>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
