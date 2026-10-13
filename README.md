# Shaheer Shaikh — Portfolio (HTML / CSS / JS)

## Colors & fonts (one place)
`css/tokens.css`
- `--brand` (#0048a9), `--black`, `--white` — the whole site uses these.
- `--font-heading` (Poppins) and `--font-body` (Inter). To change a font, also edit
  the Google Fonts `@import` line at the top of the same file.

## Content
- `js/data.js` — contact info, all 30 projects, testimonials, blog list, logo.
  Add a project = add one line to `PROJECTS` (`featured: true` puts it in the home slider).
- `js/bot.js` — the chatbot's answers (English + Roman Urdu). Each topic has
  keywords and an `en` / `ur` reply — edit or add topics there.
- Menu links: `NAV` in `js/main.js`. Page text is in each `.html`; articles in `/blog`;
  one page per service in `/services`.
- Hero animation (the website being built): the `SITES` list in `js/main.js`.

## Project screenshots (full page)
By default every card shows a live full-page screenshot of the real website,
generated automatically (`shots: "live"` in `js/data.js`). The first time a
site is shown, the preview can take a few seconds to appear.

For your own WebP screenshots (faster, never change):
```
npm i playwright sharp
npx playwright install chromium
node tools/take-screenshots.mjs
```
This saves `assets/shots/<slug>.webp` for all 30 projects. Then set
`shots: "local"` in `js/data.js`. Re-run for one site: `node tools/take-screenshots.mjs qulfiwala`.

## Logos, profile photo, CV
Loaded from the old site (`assetBase` in `js/data.js`). To host them yourself,
copy `icons/`, `profile.jpg` and `Shaheer-CV.pdf` from the old project into
`/assets` and set `assetBase: "assets"`.

## Currency
Prices are written in USD. Visitors automatically see them in their own currency
(Pakistan → PKR, UK → GBP, UAE → AED, Saudi → SAR, Europe → EUR, etc.), detected
from their time zone, with live exchange rates from open.er-api.com. Visitors can
also switch currency (footer and pricing page). Edit the list of currencies,
rounding and fallback rates in `CURRENCY` in `js/data.js`.

## Contact form
Set `formEndpoint` in `js/data.js` (e.g. a free Formspree URL) to receive
messages by email. Without it, the form opens the visitor's email app.

## Deploy
Upload the folder to Vercel/Netlify. `vercel.json` gives clean URLs and caching.
If you use a new domain, update it in `sitemap.xml`, `robots.txt` and the
`<link rel="canonical">` tags (search for `shaheer-portfolio-theta`).
