# BABU — your quality street café · Website

Premium static website for **Babu Coffee & More – Naga City Subdivision**,
built from the café's real brand (Instagram `@babucoffeeeee` "your quality
street café 🧡") and its verified Foodpanda menu.

## Pages
| File | Purpose |
|------|---------|
| `index.html`  | Home — hero, signature sips, menu preview, story, gallery strip, hours, testimonials, CTA |
| `menu.html`   | Full menu with category filter + search (JS-rendered from `data.js`) |
| `about.html`  | Brand story, philosophy, what makes BABU different |
| `gallery.html`| Visual gallery (art-directed placeholders for real photos) |
| `order.html`  | Ordering landing — Foodpanda CTA + ways to order + popular picks |
| `visit.html`  | Location, hours, directions, map, contact + socials |

## Files
- `style.css` — complete design system (tokens, type, components, responsive, a11y)
- `main.js`   — nav drawer, scroll-reveal, sticky header, year
- `data.js`   — menu, categories, and Foodpanda reviews (single source of truth)
- `assets/og-image.svg` — social share card
- `robots.txt`, `sitemap.xml`

## Run it
Open `index.html` in a browser, or serve the folder:
```
npx serve .
```

## Before launch
- Replace the illustrated `div.media` / `card__media` tiles with real café
  photography (keep `alt`/caption text).
- Update `robots.txt` + `sitemap.xml` from `REPLACE-WITH-YOUR-DOMAIN.com`.
- Confirm the placeholder business email, and double-check prices against
  the live Foodpanda menu (they may change).
- Replace `assets/og-image.svg` with a raster `og-image.png` (1200×630) for
  best social sharing.

## Notes
All facts (name, tagline, address, hours, prices, best-sellers, ratings and
review quotes) are taken from the café's public Foodpanda / Instagram pages.
Nothing factual was invented; anything unverifiable is a clearly-labelled
placeholder.
