# Shaheer Shaikh — Portfolio (HTML / CSS / JS)

## Colors & fonts (one place)
`css/tokens.css`
- `--brand` (#0048a9), `--black`, `--white` — the whole site uses these.
- `--font-heading` (Poppins) and `--font-body` (Inter). To change a font, also edit
  the Google Fonts `@import` line at the top of the same file.

## Content
- `js/data.js` — contact info, 30 client projects + 8 custom-coded demos, education, testimonials, blog list, services menu.
  Add a project = add one line to `PROJECTS` (`featured: true` puts it in the home slider).
- `js/bot.js` — the chatbot's answers (English + Roman Urdu). Each topic has
  keywords and an `en` / `ur` reply — edit or add topics there.
- Menu links: `NAV` in `js/main.js`. Page text is in each `.html`; articles in `/blog`;
  one page per service in `/services`.
- Hero animation (the website being built): the `SITES` list in `js/main.js`.

## Project screenshots
By default, client sites show an automatic screenshot of the live website and
the custom-coded demos show a live mini version of themselves. A short
screenshot appears first; a long full-page screenshot replaces it once the
screenshot service has made it (the very first time this can take up to a
minute). Every preview scrolls through the whole site — on hover with a mouse,
and automatically while it is on screen on phones and tablets.

If a site uses scroll animations, parts of the automatic long screenshot can
come out blank. Your own screenshots (below) don't have that problem, because
the tool scrolls through each page before capturing it.

For your own WebP screenshots of everything (faster, never change):
```
npm i playwright sharp
npx playwright install chromium
node tools/take-screenshots.mjs
```
This saves `assets/shots/<slug>.webp` (desktop) and `<slug>-m.webp` (mobile) for
all 38 projects. Then set `shots: "local"` in `js/data.js`.
Re-run for one site: `node tools/take-screenshots.mjs qulfiwala`.

## Custom-coded demos
`/demos` holds 8 working, hand-coded demos:
- Websites: Aurum Estates (real estate), Ember & Oak (restaurant), Pulse Fitness (gym), Northwind Studio (agency)
- Web apps: LeadFlow CRM, Metrica analytics dashboard, BookEasy booking system, SunWise solar funnel

Each demo has a project page in `/projects/<slug>.html` that shows the live demo
inside this site's header and footer, with a Desktop / Tablet / Mobile switch.
Portfolio cards for demos open that page. Edit demo descriptions and feature
lists in `PROJECTS` (js/data.js); the project pages were generated from that data.

## Education
Edit `EDUCATION` in `js/data.js`. Fill in the school/college name and years
for Matriculation and Intermediate — empty fields are hidden automatically.

## Add your own project images (one place)
Open `js/data.js` and find `PROJECT_IMAGES`. Every project is listed there:
```
"qulfiwala": { desktop: "assets/shots/qulfiwala.webp", mobile: "assets/shots/qulfiwala-m.webp" },
```
Put the files in `assets/shots/` (or use a full https:// link). The image is then
used everywhere that project appears — portfolio, home slider, phone slider,
industries, case studies, service pages and project pages. Leave "" to use the
automatic preview. Images are never cropped at the sides; tall full-page
screenshots scroll on hover.

To create all screenshots at once: `node tools/take-screenshots.mjs` (see the
file for setup), then set `shots: "local"` in `js/data.js`.

## Logos, profile photo, CV
Loaded from the old site (`assetBase` in `js/data.js`). To host them yourself,
copy `icons/`, `profile.jpg` and `Shaheer-CV.pdf` from the old project into
`/assets` and set `assetBase: "assets"`. The header "Hire me" button downloads
`Shaheer-CV.pdf` — replace that file to update your CV.

## Currency
Prices are written in USD. Visitors automatically see them in their own currency
(Pakistan → PKR, UK → GBP, UAE → AED, Saudi → SAR, Europe → EUR, etc.), detected
from their time zone, with live exchange rates from open.er-api.com. Visitors can
also switch currency (footer and pricing page). Edit the list of currencies,
rounding and fallback rates in `CURRENCY` in `js/data.js`.

## Contact form
Messages are sent to shaheershaikh392@gmail.com through FormSubmit (free).
The very first submission sends an activation email to that inbox — click
"Activate Form" once. Change the address in `formEndpoint` in `js/data.js`.

## Booking button
"Book a free call" buttons open WhatsApp with a booking message. Paste a
Calendly or GoHighLevel calendar link into `booking` in `js/data.js` to send
visitors straight to your calendar.

## Deploy
Upload the folder to Vercel/Netlify. `vercel.json` gives clean URLs and caching.
If you use a new domain, update it in `sitemap.xml`, `robots.txt` and the
`<link rel="canonical">` tags (search for `tech-vantage.vercel.app`).
