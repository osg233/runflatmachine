# Sitemap Assumptions

- The provided screenshot lists `product-sitemap.xml`, but the live URL returned HTTP 404 during the audit on 2026-04-30. The live product detail pages are present in `page-sitemap.xml`, so the rebuild keeps those routes and also generates a new `product-sitemap.xml` for cleaner product classification.
- The live Yoast sitemap index also exposes `avada_portfolio-sitemap.xml`, which appears to contain old Avada template/demo portfolio URLs. That sitemap was not listed in the provided screenshot, so those unrelated demo routes were excluded from the rebuilt buyer-facing site.
- The original route and page title `frequenty-asked-questions` contains a spelling error. It was preserved exactly for sitemap accuracy.
- Theme/template taxonomy URLs from `fusion_tb_category-sitemap.xml` and `element_category-sitemap.xml` are generated as noindex archive routes and excluded from primary navigation.

# Visual Sources

- Reused authentic product and operation assets from the public live website because they show real machine configurations and field/workshop usage.
- Replaced the live site's generic Avada demo visuals and older AI-styled blog imagery with product-led layouts, darker technical framing, and clearer operational photography.
