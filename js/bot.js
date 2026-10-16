/* ==========================================================================
   Shaheer's AI assistant — answers in English or Roman Urdu.
   Edit answers in BOT_KB below. Each intent: keywords (any language) + en/ur reply.
   ========================================================================== */
(function () {
  "use strict";
  const R = document.body.dataset.root || "";
  const WA = (t) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;

  /* Words that signal Roman Urdu */
  const URDU = ["kya", "kia", "hai", "hain", "hy", "he", "ha", "kitna", "kitni", "kitne", "kaise", "kese", "kaisay", "kab", "mujhe", "mjhe", "muje", "aap", "ap", "apka", "apki", "karte", "krte", "karo", "kro", "kr", "kar", "chahiye", "chaiye", "chahye", "chye", "bata", "btao", "batao", "bataen", "hoga", "hogi", "ka", "ki", "ke", "mein", "mai", "me", "nahi", "nhi", "haan", "han", "theek", "acha", "achha", "kaun", "kon", "kahan", "kaha", "wala", "wali", "bhai", "salam", "shukriya", "kitny", "banwani", "banana", "banani", "bana", "sakte", "skte", "lagega", "lagta", "din", "paisa", "paise", "rate", "kam", "kaam", "sath", "liye", "leya", "lia", "yeh", "ye", "woh", "wo", "jaldi", "ho", "gi", "ga", "dein", "den", "do"];

  const KB = [
    { id: "greet", k: ["hi", "hello", "hey", "salam", "assalam", "aoa", "asalam", "hola", "good morning", "good evening"],
      en: "Hi! 👋 I'm Shaheer's assistant. Ask me about services, prices, delivery time, past work or how to get started.",
      ur: "Assalam o Alaikum! 👋 Main Shaheer ka assistant hoon. Aap services, prices, delivery time, portfolio ya project start karne ke baare mein kuch bhi pooch sakte hain.",
      chips: ["services", "pricing", "portfolio", "contact"] },

    { id: "about", k: ["who", "shaheer", "about", "kaun", "kon", "introduce", "yourself", "developer", "tum kon"],
      en: "Shaheer Shaikh is a WordPress Developer & GoHighLevel expert from Karachi, Pakistan, with 3+ years of experience and 500+ websites launched. He builds fast websites, funnels, CRM automation and AI agents that turn visitors into leads.",
      ur: "Shaheer Shaikh Karachi, Pakistan se WordPress Developer aur GoHighLevel expert hain. 3+ saal ka experience hai aur 500+ websites launch kar chuke hain. Woh fast websites, funnels, CRM automation aur AI agents banate hain jo visitors ko leads mein badalte hain.",
      links: [["About Shaheer", "about.html"]] },

    { id: "services", k: ["service", "services", "offer", "what do you do", "kya karte", "kya kya", "provide", "help with", "kaam kya"],
      en: "Here's what Shaheer builds:\n• WordPress websites\n• GoHighLevel CRM & automation\n• Sales funnels\n• AI agents & chatbots\n• Shopify stores\n• Complete lead generation systems\n• Custom-coded websites, CRMs & web apps",
      ur: "Shaheer yeh sab banate hain:\n• WordPress websites\n• GoHighLevel CRM aur automation\n• Sales funnels\n• AI agents aur chatbots\n• Shopify stores\n• Poora lead generation system\n• Custom code websites, CRM aur web apps",
      links: [["All services", "services.html"]], chips: ["pricing", "delivery", "ai agent"] },

    { id: "price_wp", k: ["wordpress price", "wordpress cost", "wordpress kitne", "wp price", "wordpress rate", "wordpress package", "woocommerce price"], need: ["wordpress", "wp", "woocommerce", "website", "site", "web"], also: ["price", "cost", "kitne", "kitna", "kitni", "rate", "package", "charges", "budget", "paise", "how much", "ka hai", "ki hai"],
      en: "WordPress packages (one-time):\n• Starter — $150 · up to 5 pages · 5–7 days\n• Business — $300 · up to 10 pages · 7–14 days (most popular)\n• Premium / WooCommerce — from $600 · 15+ pages or full store · 2–3 weeks",
      ur: "WordPress packages (one-time):\n• Starter — $150 · 5 pages tak · 5–7 din\n• Business — $300 · 10 pages tak · 7–14 din (sab se popular)\n• Premium / WooCommerce — $600 se start · 15+ pages ya poora store · 2–3 hafte",
      links: [["WordPress pricing", "pricing.html?platform=WordPress"]] },

    { id: "price_shopify", need: ["shopify"], also: ["price", "cost", "kitne", "kitna", "kitni", "rate", "package", "charges", "budget", "paise", "how much", "ka hai", "ki hai"],
      en: "Shopify packages (one-time):\n• Basic Store — $250 · up to 10 products · 4–6 days\n• Standard Store — $450 · up to 50 products + apps · 1–2 weeks (most popular)\n• Premium Store — from $800 · up to 200 products, fully custom · 2–3 weeks",
      ur: "Shopify packages (one-time):\n• Basic Store — $250 · 10 products tak · 4–6 din\n• Standard Store — $450 · 50 products + apps · 1–2 hafte (sab se popular)\n• Premium Store — $800 se start · 200 products tak, fully custom · 2–3 hafte",
      links: [["Shopify pricing", "pricing.html?platform=Shopify"]] },

    { id: "price_ghl", need: ["ghl", "gohighlevel", "highlevel", "high level", "crm", "funnel", "automation"], also: ["price", "cost", "kitne", "kitna", "kitni", "rate", "package", "charges", "budget", "paise", "how much", "ka hai", "ki hai"],
      en: "GoHighLevel packages (one-time):\n• Funnel Build — $200 · up to 3 steps · 3–5 days\n• Website + CRM Setup — $450 · 8 pages + pipelines & follow-ups · 1–2 weeks (most popular)\n• Complete Automation Suite — from $900 · website, funnels, CRM + AI agent · 2–4 weeks",
      ur: "GoHighLevel packages (one-time):\n• Funnel Build — $200 · 3 steps tak · 3–5 din\n• Website + CRM Setup — $450 · 8 pages + pipelines aur follow-ups · 1–2 hafte (sab se popular)\n• Complete Automation Suite — $900 se start · website, funnels, CRM + AI agent · 2–4 hafte",
      links: [["GoHighLevel pricing", "pricing.html?platform=GoHighLevel"]] },

    { id: "pricing", k: ["how much", "price", "pricing", "cost", "charges", "rate", "rates", "kitne", "kitna", "kitni", "budget", "package", "packages", "paise", "fee", "fees", "cheap", "sasta", "mehenga", "$"],
      en: "Prices are one-time project fees, no hidden costs:\n• WordPress from $150\n• Shopify from $250\n• GoHighLevel funnels from $200\nTell me the platform and I'll show the full packages — or ask for a custom quote.",
      ur: "Prices one-time project fees hain, koi hidden cost nahi:\n• WordPress $150 se\n• Shopify $250 se\n• GoHighLevel funnel $200 se\nPlatform batayein to main poore packages dikha deta hoon — ya custom quote le lein.",
      links: [["See all pricing", "pricing.html"]], chips: ["wordpress price", "shopify price", "ghl price"] },

    { id: "delivery", k: ["delivery", "how long", "time", "timeline", "days", "kitne din", "kab tak", "kab", "jaldi", "fast", "deadline", "urgent", "duration", "waqt", "time lagega", "take", "lagenge", "lagega", "lagay ga"],
      en: "Typical delivery times:\n• GHL funnel — 3–5 days\n• Shopify basic store — 4–6 days\n• WordPress starter site — 5–7 days\n• Business website or CRM setup — 1–2 weeks\n• Full store or automation suite — 2–4 weeks",
      ur: "Aam tor par delivery time:\n• GHL funnel — 3–5 din\n• Shopify basic store — 4–6 din\n• WordPress starter site — 5–7 din\n• Business website ya CRM setup — 1–2 hafte\n• Full store ya automation suite — 2–4 hafte" },

    { id: "portfolio", k: ["portfolio", "work", "projects", "examples", "sample", "samples", "previous", "past", "kaam dikhao", "websites dikhao", "clients", "case study"],
      en: "You can browse 30 live projects — WordPress, Shopify and GoHighLevel — for solar, real estate, finance, healthcare, e-commerce and more. Hover a card to scroll the full page.",
      ur: "Aap 30 live projects dekh sakte hain — WordPress, Shopify aur GoHighLevel par — solar, real estate, finance, healthcare, e-commerce waghaira ke liye. Card par mouse le jayein to poora page scroll hota hai.",
      links: [["Open portfolio", "portfolio.html"]] },

    { id: "experience", k: ["experience", "companies", "company", "job", "current", "worked", "career", "click grow", "d1tech", "where do you work", "work now", "currently", "abhi kahan", "job kahan", "leadflex", "hamsol", "zg tech", "kahan kaam", "tajurba"],
      en: "Experience:\n• Click Grow Solutions — Website Developer (current)\n• D1TechCreative — Dec 2025 to Aug 2026\n• Hamsol — Mar to Dec 2025\n• Leadflex — Feb to Nov 2025\n• Zg Tech Solutions — Feb 2023 to Dec 2024",
      ur: "Experience:\n• Click Grow Solutions — Website Developer (abhi yahan kaam kar rahe hain)\n• D1TechCreative — Dec 2025 se Aug 2026\n• Hamsol — Mar se Dec 2025\n• Leadflex — Feb se Nov 2025\n• Zg Tech Solutions — Feb 2023 se Dec 2024",
      links: [["Full timeline", "about.html"]] },

    { id: "education", k: ["education", "study", "studies", "degree", "university", "qualification", "aptech", "padhai", "parhai", "kahan se parha", "bs", "diploma"],
      en: "Education:\n• BS Computer Information — Federal Urdu University, Karachi (2025 – present)\n• ACCP Prime 2.0 — Aptech (2022 – 2025)",
      ur: "Education:\n• BS Computer Information — Federal Urdu University, Karachi (2025 se jari)\n• ACCP Prime 2.0 — Aptech (2022 – 2025)",
      links: [["About Shaheer", "about.html"]] },

    { id: "cv", k: ["cv", "resume", "hire", "hire me", "download cv"],
      en: "You can download Shaheer's CV from the \"Hire me\" button at the top of the page, or message him on WhatsApp to discuss your project.",
      ur: "Shaheer ki CV page ke upar \"Hire me\" button se download kar sakte hain, ya project ke liye WhatsApp par message kar dein.",
      wa: "Hi Shaheer! I'd like to hire you for a project." },

    { id: "custom", k: ["custom", "custom code", "custom website", "coding", "code", "hand coded", "web app", "app", "software", "dashboard", "custom crm", "php", "javascript", "react", "node", "nodejs", "demo", "demos"],
      en: "Yes — Shaheer also builds in custom code: hand-coded websites, custom CRMs, dashboards, booking systems, calculators and web apps (HTML, CSS, JavaScript, PHP and APIs). Custom work is quoted after a short call. You can try 8 live demos he built — 4 websites (real estate, restaurant, gym, agency) and 4 web apps (CRM, analytics dashboard, booking system, solar calculator).",
      ur: "Ji haan — Shaheer custom code mein bhi kaam karte hain: hand-coded websites, custom CRM, dashboards, booking systems, calculators aur web apps (HTML, CSS, JavaScript, PHP, APIs). Custom kaam ka quote ek choti call ke baad milta hai. Aap unke banaye 8 live demos try kar sakte hain — 4 websites (real estate, restaurant, gym, agency) aur 4 web apps (CRM, dashboard, booking, solar calculator).",
      links: [["Custom development", "services/custom-development.html"], ["Try the demos", "portfolio.html?platform=Custom%20Code"]] },

    { id: "ai", k: ["ai", "agent", "agents", "chatbot", "bot", "artificial", "gpt", "voice ai", "24/7", "automatic reply"],
      en: "Shaheer builds AI agents that reply to leads 24/7 on your website, SMS, WhatsApp or Facebook — they answer questions, qualify leads and book appointments straight into your CRM calendar. Included in the GoHighLevel Complete Automation Suite (from $900).",
      ur: "Shaheer AI agents banate hain jo 24/7 aapki website, SMS, WhatsApp ya Facebook par leads ko jawab dete hain — sawalon ke jawab, lead qualify karna aur CRM calendar mein appointment book karna. Yeh GoHighLevel Complete Automation Suite ($900 se) mein shamil hai." },

    { id: "ghl", k: ["ghl", "gohighlevel", "highlevel", "go high level", "crm", "pipeline", "missed call", "follow up", "followup", "sms", "automation", "workflow"],
      en: "With GoHighLevel, Shaheer sets up your CRM pipeline, calendars, instant SMS/email follow-ups, missed-call text-back, review requests and reporting — so every lead gets a reply in seconds.",
      ur: "GoHighLevel mein Shaheer aapka CRM pipeline, calendar, foran SMS/email follow-ups, missed-call text-back, review requests aur reporting set karte hain — taake har lead ko seconds mein jawab mile.",
      chips: ["ghl price", "ai agent"] },

    { id: "wordpress", k: ["wordpress", "wp", "elementor", "woocommerce", "blog site", "business website", "website banwani", "website chahiye", "website banana", "site banani", "website"],
      en: "Shaheer builds custom WordPress websites that load fast (under 2s), are SEO-ready and mobile-friendly — with lead forms, WhatsApp/chat integration and Google Analytics set up.",
      ur: "Shaheer custom WordPress websites banate hain jo fast load hoti hain (2 second se kam), SEO-ready aur mobile-friendly hoti hain — lead forms, WhatsApp/chat aur Google Analytics ke saath.",
      chips: ["wordpress price", "delivery", "portfolio"] },

    { id: "shopify", k: ["shopify", "store", "ecommerce", "e-commerce", "online store", "dukaan", "products", "sell online"],
      en: "Shaheer sets up Shopify stores ready to sell from day one: theme customization, products and collections, payments, shipping, essential apps and abandoned-cart emails.",
      ur: "Shaheer Shopify stores banate hain jo pehle din se sell karne ke liye ready hon: theme customization, products, collections, payments, shipping, zaroori apps aur abandoned-cart emails.",
      chips: ["shopify price", "delivery"] },

    { id: "funnel", k: ["funnel", "landing page", "landing", "sales page", "opt-in", "lead magnet"],
      en: "A funnel is a focused page flow (landing page → form → thank-you / booking) built to get one action. Shaheer builds them in GoHighLevel with tracking pixels and SMS/email confirmations. From $200.",
      ur: "Funnel ek focused page flow hota hai (landing page → form → thank-you / booking) jo ek hi action ke liye banta hai. Shaheer GoHighLevel mein tracking pixels aur SMS/email confirmations ke saath banate hain. $200 se start." },

    { id: "seo", k: ["seo", "google", "rank", "ranking", "search", "speed", "fast", "pagespeed", "slow"],
      en: "Every build includes on-page SEO and speed optimization — WebP images, caching, lean code and Core Web Vitals checks — so the site loads fast and is ready to rank on Google.",
      ur: "Har website mein on-page SEO aur speed optimization shamil hai — WebP images, caching, halka code aur Core Web Vitals — taake site fast chale aur Google par rank karne ke liye ready ho." },

    { id: "platform", k: ["which platform", "kaunsa", "konsa", "kon sa", "best platform", "recommend", "suggest", "wordpress or shopify", "choose", "difference"],
      en: "Quick guide:\n• Selling products → Shopify\n• Content, blog & SEO → WordPress\n• Leads, bookings & follow-up automation → GoHighLevel\nMany businesses use WordPress + GHL together.",
      ur: "Simple guide:\n• Products bechne hain → Shopify\n• Content, blog aur SEO → WordPress\n• Leads, booking aur follow-up automation → GoHighLevel\nBohat businesses WordPress + GHL dono saath use karte hain." },

    { id: "maintenance", k: ["maintenance", "support", "after launch", "update", "updates", "backup", "hack", "security", "monthly"],
      en: "Yes — monthly maintenance & support plans are available: updates, backups, security checks, speed checks and small edits. Premium packages also include 30 days of post-launch support.",
      ur: "Ji haan — monthly maintenance aur support plans available hain: updates, backups, security, speed checks aur choti changes. Premium packages mein 30 din ka post-launch support bhi shamil hai." },

    { id: "process", k: ["process", "how do you work", "steps", "start", "kaise kaam", "kaise start", "procedure", "how it works", "shuru"],
      en: "The process is simple:\n1. Discover — a quick chat about your goals\n2. Design & Build\n3. Automate — follow-ups, booking, AI\n4. Launch & Grow — measure and improve",
      ur: "Process simple hai:\n1. Discover — aapke goals par baat\n2. Design & Build\n3. Automate — follow-ups, booking, AI\n4. Launch & Grow — results dekh kar behtar karna",
      links: [["Start a project", "contact.html"]] },

    { id: "payment", k: ["payment", "pay", "advance", "installment", "bank", "jazzcash", "easypaisa", "paypal", "wise", "payoneer", "invoice"],
      en: "Payment terms and methods are agreed per project. Message Shaheer on WhatsApp and he'll share the options.",
      ur: "Payment ka tareeqa aur terms har project ke hisaab se tay hote hain. Shaheer ko WhatsApp par message karein, woh options bata denge.",
      wa: "Hi Shaheer, I'd like to know the payment options for a project." },

    { id: "contact", k: ["contact", "whatsapp", "email", "phone", "number", "call", "reach", "talk", "baat", "rabta", "message", "mail"],
      en: "You can reach Shaheer at:\n• WhatsApp / phone: 0331 3143864\n• Email: shaheershaikh392@gmail.com\nHe usually replies within a few hours.",
      ur: "Shaheer se rabta:\n• WhatsApp / phone: 0331 3143864\n• Email: shaheershaikh392@gmail.com\nAam tor par kuch ghanton mein jawab aa jata hai.",
      links: [["Contact page", "contact.html"]], wa: "Hi Shaheer! I'd like to discuss a project." },

    { id: "location", k: ["location", "where", "based", "city", "country", "kahan", "kaha", "karachi", "pakistan", "remote"],
      en: "Shaheer is based in Karachi, Pakistan, and works remotely with clients worldwide — the US, UK, Australia, Dubai and Pakistan.",
      ur: "Shaheer Karachi, Pakistan mein hain aur duniya bhar ke clients ke saath remote kaam karte hain — US, UK, Australia, Dubai aur Pakistan." },

    { id: "available", k: ["available", "hire", "free", "availability", "new project", "book", "khali", "le sakte", "kaam loge"],
      en: "Yes, Shaheer is currently taking on new WordPress, GHL and automation projects. Share your idea and you'll get a reply within a few hours.",
      ur: "Ji haan, Shaheer abhi naye WordPress, GHL aur automation projects le rahe hain. Apna idea share karein, kuch ghanton mein jawab mil jayega.",
      links: [["Start a project", "contact.html"]] },

    { id: "skills", k: ["skills", "tools", "technologies", "tech", "stack", "html", "css", "javascript", "php", "zapier", "languages you"],
      en: "Main stack: WordPress, Elementor, GoHighLevel, Shopify, funnels, AI agents, Zapier, HTML5, CSS3, JavaScript and PHP.",
      ur: "Main stack: WordPress, Elementor, GoHighLevel, Shopify, funnels, AI agents, Zapier, HTML5, CSS3, JavaScript aur PHP." },

    { id: "blog", k: ["blog", "article", "articles", "read", "tips", "guide"],
      en: "There are 16 plain-English articles on WordPress, Shopify, GHL automation, AI agents, SEO and conversion.",
      ur: "Blog par 16 asaan articles hain — WordPress, Shopify, GHL automation, AI agents, SEO aur conversion par.",
      links: [["Read the blog", "blog.html"]] },

    { id: "quote", k: ["quote", "custom", "estimate", "proposal", "my project", "mera project", "requirement", "idea"],
      en: "Tell Shaheer what you're building and you'll get a custom quote within 24 hours.",
      ur: "Shaheer ko apne project ke baare mein batayein — 24 ghanton mein custom quote mil jayega.",
      links: [["Get a quote", "contact.html"]], wa: "Hi Shaheer! I need a custom quote for my project." },

    { id: "thanks", k: ["thanks", "thank you", "thx", "shukriya", "shukria", "jazakallah", "great", "awesome", "nice", "ok", "okay", "theek", "acha"],
      en: "You're welcome! Anything else I can help with?",
      ur: "Koi baat nahi! Aur kuch poochna ho to batayein.",
      chips: ["pricing", "contact"] },

    { id: "bye", k: ["bye", "goodbye", "allah hafiz", "khuda hafiz", "see you"],
      en: "Thanks for stopping by! Message on WhatsApp anytime. 👋",
      ur: "Aane ka shukriya! Kabhi bhi WhatsApp par message kar dein. 👋" }
  ];

  const CHIP_LABEL = {
    en: { services: "Services", pricing: "Prices", portfolio: "Portfolio", contact: "Contact", delivery: "Delivery time", "ai agent": "AI agents", "wordpress price": "WordPress prices", "shopify price": "Shopify prices", "ghl price": "GHL prices" },
    ur: { services: "Services kya hain?", pricing: "Prices kitni hain?", portfolio: "Kaam dikhao", contact: "Rabta kaise karein?", delivery: "Kitne din lagenge?", "ai agent": "AI agent kya hai?", "wordpress price": "WordPress price", "shopify price": "Shopify price", "ghl price": "GHL price" }
  };

  const norm = (s) => " " + s.toLowerCase().replace(/[^a-z0-9$/+\s-]/g, " ").replace(/\s+/g, " ") + " ";
  const has = (t, w) => t.includes(" " + w + " ") || (w.includes(" ") && t.includes(w));

  function detectLang(text) {
    const t = norm(text);
    const n = URDU.filter((w) => has(t, w)).length;
    return n >= 2 || /\b(kya|kitn|btao|batao|chahiye|chye|kaise|shukriya|salam|nahi|nhi|mujhe)\b/.test(t) ? "ur" : "en";
  }

  function answer(text) {
    const t = norm(text);
    let best = null, score = 0;
    for (const it of KB) {
      let s = 0;
      if (it.need) {
        const n = it.need.some((w) => has(t, w));
        const a = it.also.some((w) => has(t, w));
        if (n && a) s = 10;
      }
      if (it.k) for (const w of it.k) if (has(t, w)) s += w.includes(" ") ? 3 : 2;
      if (s > score) { score = s; best = it; }
    }
    return score > 0 ? best : null;
  }

  /* ---------- UI ---------- */
  const ui = document.createElement("div");
  ui.className = "bot";
  ui.innerHTML = `
    <button class="bot__launch" aria-label="Chat with Shaheer's assistant" aria-expanded="false" aria-controls="bot-panel">
      <span class="bot__launch-ic">${ICONS.chat}</span><span class="bot__launch-x" aria-hidden="true">✕</span>
      <span class="bot__ping" aria-hidden="true"></span>
    </button>
    <span class="bot__hint" role="note">Questions? Ask me — English ya Roman Urdu 👋</span>
    <section class="bot__panel" id="bot-panel" role="dialog" aria-label="Chat assistant" hidden>
      <header class="bot__head">
        <span class="bot__avatar">${BRAND_MARK}</span>
        <div><b>Shaheer's assistant</b><small><i></i>Online · replies instantly</small></div>
        <div class="bot__lang" role="group" aria-label="Language">
          <button data-lang="en" aria-pressed="false">EN</button><button data-lang="ur" aria-pressed="false">Roman Urdu</button>
        </div>
      </header>
      <div class="bot__log" aria-live="polite"></div>
      <div class="bot__chips"></div>
      <form class="bot__form">
        <label class="sr-only" for="bot-input">Type your question</label>
        <input id="bot-input" autocomplete="off" placeholder="Type your question…" maxlength="300">
        <button type="submit" aria-label="Send">${ICONS.right}</button>
      </form>
    </section>`;
  document.body.appendChild(ui);

  const launch = ui.querySelector(".bot__launch"), panel = ui.querySelector(".bot__panel");
  const log = ui.querySelector(".bot__log"), chipsBox = ui.querySelector(".bot__chips");
  const form = ui.querySelector(".bot__form"), input = ui.querySelector("#bot-input");
  const hint = ui.querySelector(".bot__hint");
  let lang = null, started = false;

  const setLang = (l) => { lang = l; ui.querySelectorAll(".bot__lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === l)); input.placeholder = l === "ur" ? "Apna sawal likhein…" : "Type your question…"; };
  ui.querySelectorAll(".bot__lang button").forEach((b) => b.addEventListener("click", () => { setLang(b.dataset.lang); renderChips(["services", "pricing", "portfolio", "contact"]); }));

  const fmt = (s) => s.replace(/\$(\d[\d,]*)/g, (m, n) => (typeof money === "function" ? money(+n.replace(/,/g, "")) : m)).split("\n").map((l) => `<span>${l.replace(/[<>]/g, "")}</span>`).join("");
  function add(who, html) {
    const m = document.createElement("div");
    m.className = `msg msg--${who}`;
    m.innerHTML = html;
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }
  function renderChips(list) {
    const L = CHIP_LABEL[lang || "en"];
    chipsBox.innerHTML = (list || []).map((c) => `<button type="button" data-q="${c}">${L[c] || c}</button>`).join("");
  }
  chipsBox.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) ask(b.textContent, b.dataset.q); });

  function reply(it, l, original) {
    const typing = add("bot", `<span class="typing"><i></i><i></i><i></i></span>`);
    const delay = 450 + Math.min(900, (it ? it[l].length : 80) * 4);
    setTimeout(() => {
      typing.remove();
      if (!it) {
        const t = l === "ur"
          ? "Is sawal ka exact jawab mere paas nahi hai — Shaheer khud WhatsApp par bata denge. Ya in mein se kuch poochein:"
          : "I don't have an exact answer for that — Shaheer can answer it directly on WhatsApp. Or try one of these:";
        add("bot", `${fmt(t)}<a class="msg__wa" href="${WA("Hi Shaheer! " + original)}" target="_blank" rel="noopener">${ICONS.whatsapp} ${l === "ur" ? "WhatsApp par poochein" : "Ask on WhatsApp"}</a>`);
        renderChips(["services", "pricing", "delivery", "contact"]);
        return;
      }
      let html = fmt(it[l]);
      if (it.links) html += `<div class="msg__links">${it.links.map(([t, h]) => `<a href="${R}${h}">${t} ${ICONS.arrow}</a>`).join("")}</div>`;
      if (it.wa) html += `<a class="msg__wa" href="${WA(it.wa)}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp</a>`;
      add("bot", html);
      renderChips(it.chips || ["pricing", "portfolio", "contact"]);
    }, delay);
  }

  function ask(text, key) {
    text = text.trim();
    if (!text) return;
    add("user", fmt(text));
    const detected = detectLang(text);
    if (!key || !lang) setLang(key && lang ? lang : detected);
    const it = answer(key || text);
    reply(it, lang, text);
  }
  form.addEventListener("submit", (e) => { e.preventDefault(); const v = input.value; input.value = ""; ask(v); });

  function open(state) {
    const on = state ?? panel.hidden;
    panel.hidden = !on;
    ui.classList.toggle("is-open", on);
    launch.setAttribute("aria-expanded", on);
    hint.classList.remove("show");
    if (on && !started) {
      started = true; setLang("en");
      add("bot", fmt("Hi! 👋 I'm Shaheer's assistant.\nAsk me anything in English or Roman Urdu — prices, services, delivery time, portfolio…"));
      renderChips(["services", "pricing", "portfolio", "contact"]);
    }
    if (on) setTimeout(() => input.focus(), 150);
  }
  launch.addEventListener("click", () => open());
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { open(false); launch.focus(); } });
  document.querySelectorAll("[data-open-bot]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); open(true); }));
  setTimeout(() => { if (!started) hint.classList.add("show"); }, 4500);
  setTimeout(() => hint.classList.remove("show"), 12000);

  /* exposed for testing */
  window.__bot = { answer, detectLang };
})();
