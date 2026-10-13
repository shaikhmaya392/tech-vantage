/* ==========================================================================
   SITE DATA — edit content here (contact info, projects, testimonials, blog list)
   ========================================================================== */

const SITE = {
  name: "Shaheer Shaikh",
  role: "WordPress Developer & GHL Expert",
  email: "shaheershaikh392@gmail.com",
  phone: "03313143864",
  phoneIntl: "+923313143864",
  whatsapp: "923313143864",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/shaheer-shaikh-ghl-expert/",
  instagram: "https://www.instagram.com/shaheer4436/",
  facebook: "https://www.facebook.com/shaheer.shaikh.537537",

  /* Where logos, profile photo & CV live. Copy /icons, profile.jpg and
     Shaheer-CV.pdf from your old project into /assets and set this to "assets". */
  assetBase: "https://shaheer-portfolio-theta.vercel.app",

  /* Project screenshots:
     "live"  = full-page screenshots generated automatically from each live site
     "local" = WebP files in assets/shots/<slug>.webp
               (create them in one command: see tools/take-screenshots.mjs) */
  shots: "live",

  /* Contact form: paste a Formspree / Getform endpoint here to receive
     messages by email. Leave empty and the form opens the email app. */
  formEndpoint: ""
};

/* Turn any image URL into an optimized WebP (via the free wsrv.nl CDN) */
function webp(url, w = 900, q = 74) {
  if (/\.webp($|\?)/.test(url) || url.includes("fm=webp")) return url;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp&w=${w}&q=${q}`;
}
/* Unsplash photos are requested directly in WebP */
function photo(id, w = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=72&w=${w}`;
}
function asset(path) {
  const base = SITE.assetBase.startsWith("http")
    ? SITE.assetBase
    : (document.body.dataset.root || "") + SITE.assetBase;
  return `${base}/${path}`;
}
/* Full-page screenshot of a project (1440px desktop view, whole page) */
function shotFor(p) {
  if (SITE.shots === "local") return `${document.body.dataset.root || ""}assets/shots/${p.slug}.webp`;
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=900&h=2600&vpw=1440&vph=4160`;
}

/* ---------- Projects (30) ----------
   platform: "WordPress" | "Shopify" | "GoHighLevel"
   featured: shown in the home page slider */
const PROJECTS = [
  /* WordPress */
  { slug: "thecleanpowerexperts", name: "The Clean Power Experts", url: "https://thecleanpowerexperts.com/", cat: "Solar / Energy", platform: "WordPress", desc: "Solar energy company site built to capture and convert leads.", featured: true },
  { slug: "guaraboost", name: "GuaraBoost", url: "https://guaraboost.com/", cat: "E-commerce", platform: "WordPress", desc: "Product brand website with bold visuals and online sales flow.", featured: true },
  { slug: "aplusmovingandstorage", name: "A Plus Moving & Storage", url: "https://aplusmovingandstorage.co/", cat: "Services", platform: "WordPress", desc: "Moving company site with quote funnels and service pages.", featured: true },
  { slug: "thepaperroll", name: "The Paper Roll", url: "https://thepaperroll.com/", cat: "E-commerce", platform: "WordPress", desc: "B2B paper products store with catalog and ordering." },
  { slug: "donebydorfman", name: "Done By Dorfman", url: "https://www.donebydorfman.com", cat: "Personal Brand", platform: "WordPress", desc: "Personal brand website with clean, professional presentation." },
  { slug: "hamzashakeel", name: "Hamza Shakeel", url: "https://hamzashakeel.com/", cat: "Personal Brand", platform: "WordPress", desc: "Portfolio and personal brand site for a professional.", featured: true },
  { slug: "qulfiwala", name: "Qulfi Wala", url: "https://qulfiwala.com/", cat: "Food Brand", platform: "WordPress", desc: "Dessert brand website with menu and brand storytelling.", featured: true },
  { slug: "everestequipmentfinance", name: "Everest Equipment Finance", url: "https://everestequipmentfinance.com/", cat: "Finance", platform: "WordPress", desc: "Equipment financing company with application funnels.", featured: true },
  { slug: "morsejunk", name: "Morse Junk Removal", url: "https://morsejunk.com/", cat: "Services", platform: "WordPress", desc: "Junk removal service site with booking and quote flows." },
  { slug: "vitahub", name: "VitaHub", url: "https://vitahub.pk/", cat: "E-commerce", platform: "WordPress", desc: "Health & wellness e-commerce store for Pakistan." },
  { slug: "digitaldefend", name: "Digital Defend", url: "https://digitaldefend.net/", cat: "Cybersecurity", platform: "WordPress", desc: "Cybersecurity consultancy — compliance, security testing and 24/7 monitoring.", featured: true },

  /* GoHighLevel */
  { slug: "ghlrockstar", name: "GHL Rockstar", url: "https://ghlrockstar.com/", cat: "Agency", platform: "GoHighLevel", desc: "GoHighLevel agency website with funnels and automation.", featured: true },
  { slug: "livfunding", name: "Liv Funding", url: "https://livfunding.com/", cat: "Finance", platform: "GoHighLevel", desc: "Business funding website with application funnels.", featured: true },
  { slug: "vanityvanlines", name: "Vanity Van Lines", url: "https://vanityvanlines.com/", cat: "Services", platform: "GoHighLevel", desc: "Moving company website with quote request funnels." },
  { slug: "pwhospital", name: "PW Hospital", url: "https://pwhospital.org/", cat: "Healthcare", platform: "GoHighLevel", desc: "Hospital website with appointment booking flows.", featured: true },
  { slug: "toplocalhousebuyers", name: "Top Local House Buyers", url: "https://toplocalhousebuyers.com/", cat: "Real Estate", platform: "GoHighLevel", desc: "Cash home buying site with seller lead funnels." },
  { slug: "valorhousebuyers", name: "Valor House Buyers", url: "https://valorhousebuyers.com/", cat: "Real Estate", platform: "GoHighLevel", desc: "Home buying company site with lead capture." },
  { slug: "immigration-law-firm", name: "Immigration Law Firm", url: "https://app.gohighlevel.com/v2/preview/9VZiRF4mB7IYd5tt3F8I", cat: "Legal", platform: "GoHighLevel", desc: "Immigration & family law firm site with consultation booking." },
  { slug: "philadelphia-basketball", name: "Philadelphia Basketball School", url: "https://app.gohighlevel.com/v2/preview/gXJSlzbBWKVgNbhROvOe", cat: "Sports", platform: "GoHighLevel", desc: "Youth sports program website with signup funnels." },
  { slug: "aw-loans", name: "AW Loans", url: "https://app.gohighlevel.com/v2/preview/e5Be3MSbYxiPClLshP5p", cat: "Finance", platform: "GoHighLevel", desc: "Mortgage solutions website with quote request flows." },
  { slug: "voiceai-hq", name: "VoiceAI HQ", url: "https://app.gohighlevel.com/v2/preview/YOuhR1vFnVCID3vC4AwN", cat: "Technology", platform: "GoHighLevel", desc: "AI receptionist product site with demo and trial funnels.", featured: true },
  { slug: "clover-assist", name: "Clover Assist", url: "https://app.gohighlevel.com/v2/preview/NZQWwDRnoe5TQpWrak4M", cat: "Technology", platform: "GoHighLevel", desc: "AI employee platform site that books meetings and closes leads." },
  { slug: "fitpro-playbook", name: "FitPro PlayBook", url: "https://app.gohighlevel.com/v2/preview/xjasAdmNVUlGfJxeLRDP", cat: "Coaching", platform: "GoHighLevel", desc: "Fitness business coaching site with mentorship funnels." },
  { slug: "lawnella-landscaping", name: "Lawnella Landscaping", url: "https://app.gohighlevel.com/v2/preview/gXxYJubnWi0QzwsSrWXc", cat: "Services", platform: "GoHighLevel", desc: "Landscaping company site with residential & commercial services." },
  { slug: "tube-mastery", name: "Tube Mastery", url: "https://app.gohighlevel.com/v2/preview/Dqzrkrq119CHWXnqmvdj", cat: "Coaching", platform: "GoHighLevel", desc: "YouTube monetization course funnel with community signup." },
  { slug: "killshot-detailing", name: "KillShot Auto Detailing", url: "https://app.gohighlevel.com/v2/preview/CzQenp1VcYGUwQujlSbZ", cat: "Services", platform: "GoHighLevel", desc: "Luxury car detailing site with service tiers and booking." },
  { slug: "edbridge", name: "EdBridge", url: "https://app.gohighlevel.com/v2/preview/NShlaDO5vuPDqhJvRzFO", cat: "Education", platform: "GoHighLevel", desc: "Education platform site for in-demand digital skills." },
  { slug: "julieshomecleaning", name: "Julie's Home Cleaning", url: "https://julieshomecleaning.com/", cat: "Services", platform: "GoHighLevel", desc: "Home cleaning services website with booking funnels." },
  { slug: "tradeaid", name: "TradeAid", url: "https://app.gohighlevel.com/v2/preview/L89S1rj6jyKsYDgjuh1c", cat: "Services", platform: "GoHighLevel", desc: "Construction professionals community with WhatsApp onboarding." },

  /* Shopify */
  { slug: "alignedchiro", name: "Aligned Chiro", url: "https://alignedchiro.com.au/", cat: "Healthcare", platform: "Shopify", desc: "Australian chiropractic clinic store built on Shopify.", featured: true }
];

const STACK = {
  WordPress: ["WordPress", "Elementor", "HTML5", "CSS3"],
  Shopify: ["Shopify", "Liquid", "CSS3", "Apps"],
  GoHighLevel: ["GoHighLevel", "Funnels", "Automation", "CRM"]
};

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  { name: "Daniel R.", org: "Founder, D1 Tech Creative", text: "Shaheer is our go-to developer for WordPress and GHL. Fast, reliable, and he genuinely cares about conversions — every site he touches performs better." },
  { name: "Michael T.", org: "The Clean Power Experts", text: "Our solar site went from slow and clunky to fast and lead-generating. The forms, the funnels, the follow-up automation — everything just works." },
  { name: "Gavin M.", org: "Morse Hauling & Junk Removal", text: "The new website brings us real calls every week. Free estimate form, reviews, service areas — Shaheer set the whole machine up perfectly." },
  { name: "Sarah K.", org: "Mary Angels Home Care", text: "Professional, patient and quick. He understood exactly the warm, trustworthy feel we needed for our home care brand." },
  { name: "Imran M.", org: "Qulfi Wala", text: "Hamari brand website ne business hi badal diya. Design bhi zabardast, speed bhi — aur order flow bilkul asaan." },
  { name: "Ali H.", org: "VitaHub Pakistan", text: "From product pages to checkout, the store is clean and fast. Sales improved within the first month of launch." },
  { name: "James L.", org: "Everest Equipment Finance", text: "The application funnels Shaheer built qualify leads before they ever reach our team. Massive time saver." },
  { name: "Hamza S.", org: "hamzashakeel.com", text: "My personal brand site looks world-class. Smooth animations, quick load, and it actually gets me client inquiries." }
];

/* ---------- Blog list (full articles live in /blog/*.html) ---------- */
const POSTS = [
  { slug: "gohighlevel-vs-traditional-crm", title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching", cat: "GoHighLevel", date: "Jul 21, 2026", read: 7, img: "photo-1552581234-26160f608093", excerpt: "A traditional CRM stores contacts. GoHighLevel runs the whole growth engine. Here is the honest difference — and when it actually matters for your business." },
  { slug: "local-seo-for-service-businesses", title: "Local SEO: How to Show Up When Nearby Customers Search", cat: "SEO", date: "Jul 18, 2026", read: 8, img: "photo-1569336415962-a4bd9f69cd83", excerpt: "Ranking in your city is a different game than ranking nationally. Here is the practical local SEO playbook I use to get service businesses found on Google and Maps." },
  { slug: "high-converting-landing-pages", title: "7 Elements Every High-Converting Landing Page Needs", cat: "Funnels", date: "Jul 15, 2026", read: 7, img: "photo-1581291518857-4e27b48ff24e", excerpt: "A landing page has one job: get the visitor to take one action. Here are the seven elements I include on every page that consistently convert." },
  { slug: "turn-visitors-into-leads", title: "How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)", cat: "Lead Generation", date: "Jul 11, 2026", read: 6, img: "photo-1557804506-669a67965ba0", excerpt: "Most of your visitors leave and never come back. Here is how to capture them, nurture the not-yet-ready ones, and turn traffic into a pipeline." },
  { slug: "whatsapp-automation-for-business", title: "WhatsApp Automation for Business: Never Miss Another Lead", cat: "Automation", date: "Jul 9, 2026", read: 6, img: "photo-1633675254053-d96c7668c3b8", excerpt: "Your customers already live on WhatsApp. Here is how to automate replies, capture leads and book appointments right inside the app they check most." },
  { slug: "website-conversion-audit", title: "Website Conversion Audit: 10 Quick Wins to Get More Leads This Month", cat: "Conversion", date: "Jul 6, 2026", read: 8, img: "photo-1543286386-713bdd548da4", excerpt: "You do not always need more traffic — often you need your current traffic to convert better. Here are 10 fixes that move the needle fast." },
  { slug: "shopify-store-launch-checklist", title: "The Shopify Launch Checklist I Use on Every Store", cat: "Shopify", date: "Jul 2, 2026", read: 8, img: "photo-1563013544-824ae1b704d3", excerpt: "From payments to product pages — the exact pre-launch checklist I run on every Shopify store so it's ready to sell from day one." },
  { slug: "wordpress-vs-shopify-vs-gohighlevel", title: "WordPress vs Shopify vs GoHighLevel: Which Platform Is Right for You?", cat: "WordPress", date: "Jun 24, 2026", read: 8, img: "photo-1547658719-da2b51169166", excerpt: "Picking the wrong platform means rebuilding later. Here is a plain-English guide to which one fits your business goal — from someone who builds on all three." },
  { slug: "why-website-speed-matters", title: "Why Website Speed Matters (And How I Make WordPress Fly)", cat: "WordPress", date: "Jun 15, 2026", read: 7, img: "photo-1504639725590-34d0984388bd", excerpt: "A slow website silently kills your conversions. Here's the exact process I use to make WordPress sites load in under 2 seconds." },
  { slug: "email-sms-follow-up-sequences", title: "Email and SMS Follow-Up: The Money Is in the Sequence", cat: "Automation", date: "Jun 12, 2026", read: 7, img: "photo-1586953208448-b95a79798f07", excerpt: "Most sales happen after the fifth follow-up, but most businesses quit after one. Here is how to build sequences that follow up for you — without being annoying." },
  { slug: "ai-chatbot-vs-live-chat", title: "AI Chatbot vs Live Chat: Which One Should Your Business Use?", cat: "AI Agents", date: "May 28, 2026", read: 6, img: "photo-1676299081847-824916de030a", excerpt: "Both put a chat bubble on your site, but they solve different problems. Here is how to choose — and why the best answer is often both together." },
  { slug: "ghl-automation-guide", title: "How GHL Automation Turns Missed Calls Into Booked Appointments", cat: "GoHighLevel", date: "May 20, 2026", read: 8, img: "photo-1512941937669-90a1b58e7e9c", excerpt: "Speed-to-lead is everything. Here's how I build Go HighLevel automations that respond to every lead in under 60 seconds." },
  { slug: "cost-of-a-cheap-website", title: "The Real Cost of a Cheap Website (And Why It Is Never Actually Cheap)", cat: "WordPress", date: "May 15, 2026", read: 6, img: "photo-1579621970563-ebec7560ff3e", excerpt: "A bargain website often becomes the most expensive thing a business buys. Here is what the low price really costs — and how to invest wisely instead." },
  { slug: "ai-agents-for-business", title: "AI Agents: Your 24/7 Sales Assistant That Never Sleeps", cat: "AI Agents", date: "Apr 10, 2026", read: 7, img: "photo-1620712943543-bcc4688e7485", excerpt: "AI agents can qualify leads, answer questions, and book appointments while you sleep. Here's how I build them into real businesses." },
  { slug: "funnel-vs-website", title: "Funnel vs Website: Which One Does Your Business Actually Need?", cat: "Funnels", date: "Mar 5, 2026", read: 6, img: "photo-1432888498266-38ffec3eaf0a", excerpt: "Websites build trust, funnels drive action. Most businesses need both — here's how to know what to build first." },
  { slug: "wordpress-maintenance-guide", title: "WordPress Maintenance: Why Sites Break (And How to Keep Yours Safe)", cat: "WordPress", date: "Jan 18, 2026", read: 6, img: "photo-1555949963-ff9fe0c870eb", excerpt: "Hacked sites, white screens, broken layouts after an update — almost all of it is preventable. Here's the maintenance routine that keeps client sites safe." }
];


/* ---------- Services (menu dropdown, form, related cards) ---------- */
const SERVICES_NAV = [
  { id: "wordpress-development", name: "WordPress Development", short: "Fast, SEO-ready business websites", img: "photo-1498050108023-c5249f4df085" },
  { id: "ghl-crm-automation", name: "GHL CRM & Automation", short: "Pipelines, follow-ups and booking", img: "photo-1551288049-bebda4e38f71" },
  { id: "funnel-building", name: "Funnel Building", short: "Landing pages that convert", img: "photo-1460925895917-afdab827c52f" },
  { id: "ai-agents-workflows", name: "AI Agents & Workflows", short: "24/7 lead replies and booking", img: "photo-1677442136019-21780ecad995" },
  { id: "shopify", name: "Shopify Store Setup", short: "Stores ready to sell from day one", img: "photo-1556742049-0cfed4f6a45d" },
  { id: "lead-generation", name: "Lead Generation Systems", short: "Website + CRM + automation", img: "photo-1552664730-d307ca884978" }
];

/* ---------- Currency: prices are set in USD and shown in the visitor's currency ----------
   Live rates load from open.er-api.com; these are the fallback rates (12 Oct 2026). */
const CURRENCY = {
  base: "USD",
  rates: { USD: 1, PKR: 277.2, GBP: 0.756, EUR: 0.893, AED: 3.6725, SAR: 3.75, QAR: 3.64, AUD: 1.432, CAD: 1.426, INR: 96.96 },
  /* round converted prices to a clean number */
  step: { PKR: 500, INR: 100, AED: 5, SAR: 5, QAR: 5 },
  /* country (from time zone) → currency */
  zones: {
    "Asia/Karachi": "PKR", "Europe/London": "GBP", "Asia/Dubai": "AED", "Asia/Riyadh": "SAR", "Asia/Qatar": "QAR",
    "Australia/": "AUD", "America/Toronto": "CAD", "America/Vancouver": "CAD", "America/Edmonton": "CAD", "America/Winnipeg": "CAD", "America/Halifax": "CAD",
    "Asia/Kolkata": "INR", "Asia/Calcutta": "INR",
    "Europe/Berlin": "EUR", "Europe/Paris": "EUR", "Europe/Madrid": "EUR", "Europe/Rome": "EUR", "Europe/Amsterdam": "EUR", "Europe/Dublin": "EUR", "Europe/Brussels": "EUR", "Europe/Vienna": "EUR", "Europe/Lisbon": "EUR", "Europe/Helsinki": "EUR", "Europe/Athens": "EUR"
  },
  labels: { USD: "US Dollar", PKR: "Pakistani Rupee", GBP: "British Pound", EUR: "Euro", AED: "UAE Dirham", SAR: "Saudi Riyal", QAR: "Qatari Riyal", AUD: "Australian Dollar", CAD: "Canadian Dollar", INR: "Indian Rupee" }
};
function detectCurrency() {
  try { const saved = localStorage.getItem("currency"); if (saved && CURRENCY.rates[saved]) return saved; } catch (e) {}
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  for (const k in CURRENCY.zones) if (tz === k || (k.endsWith("/") && tz.startsWith(k))) return CURRENCY.zones[k];
  const region = (navigator.language || "").split("-")[1];
  const byRegion = { PK: "PKR", GB: "GBP", AE: "AED", SA: "SAR", QA: "QAR", AU: "AUD", CA: "CAD", IN: "INR", DE: "EUR", FR: "EUR", ES: "EUR", IT: "EUR", NL: "EUR", IE: "EUR" };
  return byRegion[region] || "USD";
}
let CUR = detectCurrency();
function money(usd, cur = CUR) {
  const rate = CURRENCY.rates[cur] || 1;
  let v = usd * rate;
  const step = CURRENCY.step[cur] || 5;
  if (cur !== "USD") v = Math.max(step, Math.round(v / step) * step);
  try { return new Intl.NumberFormat("en", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(v); }
  catch (e) { return cur + " " + Math.round(v).toLocaleString(); }
}

/* ---------- Brand mark (logo icon) — an "S" drawn as a lead's path: start node → end node ---------- */
const BRAND_MARK = `<svg class="mark" viewBox="0 0 40 40" aria-hidden="true"><rect class="mark__bg" width="40" height="40" rx="12"/><path class="mark__path" d="M27.5 13.2c-.6-3-3.7-4.9-7.6-4.9-4.6 0-7.7 2.6-7.7 6 0 7.6 15.6 4.6 15.6 12.4 0 3.5-3.4 6.2-8 6.2-4.1 0-7.3-1.9-7.9-5"/><circle class="mark__start" cx="27.5" cy="13.2" r="2.6"/><circle class="mark__end" cx="11.9" cy="27.9" r="2.6"/></svg>`;

/* ---------- Icons (inline SVG) ---------- */
const I = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const ICONS = {
  arrow: I('<path d="M7 17 17 7M8 7h9v9"/>'),
  right: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  check: I('<circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16 9.2"/>'),
  clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>',
  mail: I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  phone: I('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
  pin: I('<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>'),
  globe: I('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  download: I('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  monitor: I('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
  crm: I('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 5.6M18 14.2a5 5 0 0 1 2.5 4.8"/>'),
  funnel: I('<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>'),
  bot: I('<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13v1.5M15 13v1.5M2 13v3M22 13v3"/><circle cx="12" cy="3.5" r="1"/>'),
  bag: I('<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
  magnet: I('<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 7h4M14 7h4M10 3v8a2 2 0 0 0 4 0V3"/>'),
  cursor: I('<path d="m5 3 6 16 2.3-6.7L20 10z"/>'),
  form: I('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
  calendar: I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>'),
  chat: I('<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>'),
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2m4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zm7 0h3.8v1.7h.1A4.2 4.2 0 0 1 17.7 8.6c4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z"/></svg>',
  instagram: I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.8.2-1.3 1.4-1.3H17V2.1A21 21 0 0 0 14.6 2C12 2 10.4 3.6 10.4 6.4V8H7.6v3.4h2.8V22H14V11.4h2.8l.4-3.4z"/></svg>',
  trophy: I('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6"/>'),
  book: I('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>'),
  bulb: I('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3"/>'),
  pen: I('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>'),
  plane: I('<path d="M2 16.5 22 9l-3-2-8 3-5-3-2 1 3.5 4L4 14l-2 2.5z"/><path d="M6 21h12"/>'),
  game: I('<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01"/>'),
  search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  graduation: I('<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>'),
  medal: I('<circle cx="12" cy="15" r="6"/><path d="M8.5 3h7L13 9.5h-2zM12 12.5v5M10 15h4"/>'),
  bolt: I('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
  lock: I('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  chev: I('<path d="m6 9 6 6 6-6"/>'),
  search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  grid: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  list: I('<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>'),
  users: I('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 5.6M18 14.2a5 5 0 0 1 2.5 4.8"/>'),
  shield: I('<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>'),
  tag: I('<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>'),
  rocket: I('<path d="M5 15c-1.5 1.5-2 4-2 6 2 0 4.5-.5 6-2"/><path d="M9 15 5 11l3-1c3-5 7-7 13-7 0 6-2 10-7 13l-1 3z"/><circle cx="15" cy="9" r="1.6"/>'),
  headset: I('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 0 1-3 2h-3"/>'),
  code: I('<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>')
};
