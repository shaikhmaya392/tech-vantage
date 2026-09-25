# Tech Vantage Now — Website

A modern, creative, SEO-friendly marketing website for **Tech Vantage Now**, a US-based digital design & marketing agency. Built with Next.js (App Router), Tailwind CSS and rich scroll animations.

## ✨ Features

- **Next.js 14 (App Router)** — server-rendered, fast, SEO-first
- **Tailwind CSS** design system — brand colors `#0f66b8`, `#000`, `#fff`
- **Fonts:** Poppins (headings) + Inter (body) via `next/font`
- **Animations:** Framer Motion (reveals, stagger), GSAP (hero), Lenis (smooth scroll), Swiper (testimonials/sliders)
- **Fully responsive** and accessible (reduced-motion aware)
- **SEO:** per-page metadata, Open Graph + Twitter cards, JSON-LD structured data (Organization, LocalBusiness, Service, FAQ, Breadcrumb, Article), auto `sitemap.xml` + `robots.txt`, dynamic OG image
- **Forms:** React Hook Form + Zod validation

## 🗂️ Pages (18)

Home · About · Services (overview) · 6 service detail pages · Portfolio (filterable) · Case study detail · Pricing · Blog · Blog post · Contact · Get a Quote · FAQ · Privacy Policy · Terms · 404

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (+ generates sitemap/robots)
npm start        # serve production build
```

## 🧱 Structure

```
src/
├── app/            # routes (App Router) + layout, metadata, opengraph-image
├── components/
│   ├── layout/     # Navbar, Footer, SmoothScroll
│   ├── sections/   # Home + shared page sections
│   └── ui/         # Buttons, cards, Reveal, Accordion, Counter, forms…
├── data/           # site, services, portfolio, blog, testimonials, pricing, faq
└── lib/            # seo helpers, utils, useGSAP hook
```

## ✏️ Editing content

All content lives in `src/data/*`. Update those files to change services, portfolio
projects, blog posts, pricing, testimonials and FAQs. Replace the placeholder
`picsum.photos` / `pravatar.cc` images with real assets when ready.

### Contact form
The form currently has **no backend** — it opens a prefilled email to
`info@techvantagenow.com`. Wire it to an email service (Resend, Formspree, an API
route, etc.) for automated handling.

## 🔍 SEO config
- Site URL and metadata: `src/data/site.js` and `src/lib/seo.js`
- Sitemap/robots: `next-sitemap.config.js` (runs on `postbuild`)
