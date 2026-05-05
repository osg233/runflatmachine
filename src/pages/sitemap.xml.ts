import { lastmods, sitemapGroups, site } from "@/data/site";

const allUrls: { path: string; priority: string; changefreq: string }[] = [
  // Core pages
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/products/", priority: "0.9", changefreq: "monthly" },
  { path: "/blog/", priority: "0.8", changefreq: "weekly" },
  { path: "/frequenty-asked-questions/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact-us/", priority: "0.7", changefreq: "monthly" },
  // Product pages
  ...sitemapGroups.products.map((p) => ({ path: p, priority: "0.9", changefreq: "monthly" })),
  // Blog posts
  ...sitemapGroups.posts.map((p) => ({ path: p, priority: "0.7", changefreq: "yearly" })),
  // Categories
  ...sitemapGroups.categories.map((p) => ({ path: p, priority: "0.6", changefreq: "monthly" })),
  // Tags
  ...sitemapGroups.tags.map((p) => ({ path: p, priority: "0.5", changefreq: "monthly" })),
  // Authors
  ...sitemapGroups.authors.map((p) => ({ path: p, priority: "0.4", changefreq: "monthly" })),
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${new URL(path, site.domain).toString()}</loc>
    <lastmod>${lastmods[path] ?? "2025-11-24"}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
