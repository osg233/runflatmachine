import { site } from "@/data/site";

const sitemaps = [
  ["post-sitemap.xml", "2025-11-24"],
  ["page-sitemap.xml", "2025-12-16"],
  ["product-sitemap.xml", "2025-11-21"],
  ["category-sitemap.xml", "2025-11-24"],
  ["post_tag-sitemap.xml", "2024-07-11"],
  ["fusion_tb_category-sitemap.xml", "2025-11-21"],
  ["element_category-sitemap.xml", "2021-10-19"],
  ["author-sitemap.xml", "2025-11-19"],
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    ([file, lastmod]) => `  <sitemap>
    <loc>${site.domain}/${file}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
