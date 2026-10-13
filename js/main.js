/* ==========================================================================
   Shaheer Shaikh — site scripts (v2)
   ========================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  const body = document.body;
  const ROOT = body.dataset.root || "";
  const PAGE = body.dataset.page || "";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const waLink = (text) => `https://wa.me/${SITE.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
  const LOGO = `${BRAND_MARK}<span class="logo__word"><b>shaheer<i>.</i></b><small>WordPress &amp; GHL Expert</small></span>`;

  /* ---------- Preloader (first visit of the session only) ---------- */
  let seen = false;
  try { seen = sessionStorage.getItem("seen-loader") === "1"; sessionStorage.setItem("seen-loader", "1"); } catch (e) {}
  if (!seen && !reduceMotion && PAGE === "home") {
    const ld = document.createElement("div");
    ld.className = "loader";
    ld.setAttribute("aria-hidden", "true");
    ld.innerHTML = `<div class="loader__in">${BRAND_MARK}<div class="loader__name"><span>Shaheer Shaikh</span></div><div class="loader__bar"><i></i></div></div>`;
    body.prepend(ld);
    const done = () => { ld.classList.add("done"); setTimeout(() => ld.remove(), 1100); };
    setTimeout(done, 1300);
  }

  /* ---------- Header & footer (edit nav here) ---------- */
  const NAV = [
    ["home", "Home", "index.html"], ["about", "About", "about.html"], ["services", "Services", "services.html"],
    ["portfolio", "Portfolio", "portfolio.html"], ["pricing", "Pricing", "pricing.html"], ["blog", "Blog", "blog.html"], ["contact", "Contact", "contact.html"]
  ];
  const cur = (k) => (k === PAGE ? ' aria-current="page"' : "");
  const socials = () => `
    <a class="social" href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
    <a class="social" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
    <a class="social" href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>`;

  const megaLi = (k, l, h) => `
    <li class="has-mega">
      <a href="${ROOT}${h}"${cur(k)} aria-haspopup="true" aria-expanded="false">${l} ${ICONS.chev}</a>
      <div class="mega" role="menu">
        <div class="mega__grid">
          ${SERVICES_NAV.map((sv) => `<a class="mega__item" role="menuitem" href="${ROOT}services/${sv.id}.html"><span class="mega__img"><img src="${photo(sv.img, 200)}" alt="" width="200" height="140" loading="lazy"></span><span><b>${sv.name}</b><small>${sv.short}</small></span></a>`).join("")}
        </div>
        <div class="mega__side">
          <b>Not sure what you need?</b>
          <p>Tell me about your business and I'll recommend the right setup — free.</p>
          <a class="btn btn--sm btn--light" href="${ROOT}contact.html">Get a free recommendation ${ICONS.arrow}</a>
          <a class="mega__all" href="${ROOT}services.html">View all services ${ICONS.right}</a>
        </div>
      </div>
    </li>`;

  const headerEl = $("#site-header");
  if (headerEl) {
    headerEl.outerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="progress" aria-hidden="true"></div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a class="logo" href="${ROOT}index.html" aria-label="Shaheer Shaikh — home">${LOGO}</a>
          <nav class="nav" aria-label="Main"><ul><span class="nav__pill" aria-hidden="true"></span>${NAV.map(([k, l, h]) => k === "services" ? megaLi(k, l, h) : `<li><a href="${ROOT}${h}"${cur(k)}>${l}</a></li>`).join("")}</ul></nav>
          <a class="btn btn--sm header__cta" href="${ROOT}contact.html" data-magnetic>Start a project ${ICONS.arrow}</a>
          <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      <nav aria-label="Mobile">${NAV.map(([k, l, h], i) => `<a class="mm-link" style="transition-delay:${0.15 + i * 0.05}s" href="${ROOT}${h}"${cur(k)}><small>0${i + 1}</small>${l}</a>` + (k === "services" ? `<button class="mm-toggle" aria-expanded="false" aria-controls="mm-sub" style="transition-delay:${0.15 + i * 0.05}s">All services ${ICONS.chev}</button><div class="mm-sub" id="mm-sub" hidden>${SERVICES_NAV.map((sv) => `<a href="${ROOT}services/${sv.id}.html">${sv.name}</a>`).join("")}</div>` : "")).join("")}</nav>
      <div class="mobile-menu__foot">
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="tel:${SITE.phoneIntl}">${SITE.phone}</a>
        <span>${SITE.location}</span>
      </div>
    </div>`;
  }

  const footerEl = $("#site-footer");
  if (footerEl) {
    footerEl.outerHTML = `
    <footer class="footer">
      <div class="container">
        <a class="footer__big" href="${ROOT}contact.html"><small>Have a project in mind?</small>Let's build something that converts.</a>
        <div class="footer__cta">
          <a class="btn" href="${ROOT}contact.html" data-magnetic>Start a project ${ICONS.arrow}</a>
          <a class="btn btn--ghost-light" href="${waLink()}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp me</a>
        </div>
        <div class="footer__grid">
          <div>
            <a class="logo" href="${ROOT}index.html" aria-label="Shaheer Shaikh — home">${LOGO}</a>
            <p style="margin-top:1rem">WordPress Developer &amp; GHL Expert building fast websites and intelligent automation systems that convert.</p>
            <div class="socials">${socials()}</div>
          </div>
          <div><h4>Services</h4><ul>${SERVICES_NAV.map((sv) => `<li><a href="${ROOT}services/${sv.id}.html">${sv.name}</a></li>`).join("")}</ul></div>
          <div><h4>Navigate</h4><ul>${NAV.map(([, l, h]) => `<li><a href="${ROOT}${h}">${l}</a></li>`).join("")}</ul></div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
              <li><a href="tel:${SITE.phoneIntl}">${SITE.phone}</a></li>
              <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp me</a></li>
              <li style="color:rgba(255,255,255,.7)">${SITE.location}</li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
          <label class="cur-select"><span>Currency</span><select data-currency-select aria-label="Choose currency"></select></label>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${waLink("Hi Shaheer! I'd like to discuss a project.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.whatsapp}</a>
    <div class="cursor" aria-hidden="true"><span>View</span></div>`;
  }

  /* ---------- Inline icons & asset images ---------- */
  $$("[data-icon]").forEach((el) => { const s = ICONS[el.dataset.icon]; if (s) el.outerHTML = s; });
  $$("[data-mark]").forEach((el) => (el.outerHTML = BRAND_MARK));
  $$("img[data-asset]").forEach((img) => {
    const path = img.dataset.asset, url = asset(path);
    const raster = /\.(jpe?g|png)$/i.test(path);
    img.src = raster ? webp(url, +(img.dataset.w || 900)) : url;
    if (raster) img.dataset.fallback = url;
  });
  $$("a[data-asset-href]").forEach((a) => (a.href = asset(a.dataset.assetHref)));

  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (img.dataset.fallback && img.src !== img.dataset.fallback) { img.src = img.dataset.fallback; return; }
    if (!img.dataset.keep) img.style.opacity = "0";
  }, true);
  document.addEventListener("load", (e) => { if (e.target.tagName === "IMG") e.target.parentElement?.classList.remove("img-load"); }, true);

  /* ---------- Currency: show prices in the visitor's currency ---------- */
  const applyCurrency = () => {
    $$("[data-usd]").forEach((el) => {
      const a = +el.dataset.usd, b = el.dataset.usdTo;
      el.textContent = b ? `${money(a)} – ${money(+b)}` : money(a);
    });
    $$("[data-currency-note]").forEach((el) => {
      el.textContent = CUR === "USD" ? "Prices in US dollars." : `Prices shown in ${CURRENCY.labels[CUR] || CUR} (${CUR}), converted from USD at today's rate.`;
    });
    $$("[data-currency-select]").forEach((sel) => (sel.value = CUR));
    document.dispatchEvent(new CustomEvent("currencychange"));
  };
  window.setCurrency = (c) => { CUR = c; try { localStorage.setItem("currency", c); } catch (e) {} applyCurrency(); };
  $$("[data-currency-select]").forEach((sel) => {
    sel.innerHTML = Object.keys(CURRENCY.rates).map((c) => `<option value="${c}">${c} — ${CURRENCY.labels[c]}</option>`).join("");
    sel.addEventListener("change", () => setCurrency(sel.value));
  });
  applyCurrency();
  /* live exchange rates (cached for 12 hours) */
  (async () => {
    try {
      let cached = null;
      try { cached = JSON.parse(localStorage.getItem("fx") || "null"); } catch (e) {}
      if (!cached || Date.now() - cached.t > 12 * 36e5) {
        const r = await fetch("https://open.er-api.com/v6/latest/USD");
        const j = await r.json();
        if (j && j.rates) { cached = { t: Date.now(), rates: j.rates }; try { localStorage.setItem("fx", JSON.stringify(cached)); } catch (e) {} }
      }
      if (cached && cached.rates) { Object.keys(CURRENCY.rates).forEach((c) => { if (cached.rates[c]) CURRENCY.rates[c] = cached.rates[c]; }); applyCurrency(); }
    } catch (e) { /* keep fallback rates */ }
  })();

  /* ---------- Mobile menu ---------- */
  const burger = $(".burger");
  if (burger) {
    const toggle = (open) => { body.classList.toggle("menu-open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
    burger.addEventListener("click", () => toggle(!body.classList.contains("menu-open")));
    $$(".mobile-menu a").forEach((a) => a.addEventListener("click", () => toggle(false)));
    document.addEventListener("keydown", (e) => e.key === "Escape" && toggle(false));
  }

  /* Services mega menu (hover, focus, click, Escape) */
  $$(".has-mega").forEach((li) => {
    const trigger = $("a", li);
    let t;
    const open = (on) => { clearTimeout(t); li.classList.toggle("open", on); trigger.setAttribute("aria-expanded", on); };
    li.addEventListener("mouseenter", () => open(true));
    li.addEventListener("mouseleave", () => { t = setTimeout(() => open(false), 160); });
    li.addEventListener("focusin", () => open(true));
    li.addEventListener("focusout", (e) => { if (!li.contains(e.relatedTarget)) open(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && li.classList.contains("open")) { open(false); trigger.focus(); } });
  });
  const mmToggle = $(".mm-toggle");
  if (mmToggle) mmToggle.addEventListener("click", () => { const sub = $("#mm-sub"); const on = sub.hidden; sub.hidden = !on; mmToggle.setAttribute("aria-expanded", on); });

  /* Nav hover pill */
  const pill = $(".nav__pill");
  if (pill) {
    const ul = pill.parentElement;
    const moveTo = (a) => { if (!a) { pill.style.opacity = 0; return; } pill.style.opacity = 1; pill.style.width = a.offsetWidth + "px"; pill.style.transform = `translateX(${a.offsetLeft}px)`; };
    $$(":scope > li > a", ul).forEach((a) => a.addEventListener("mouseenter", () => moveTo(a)));
    ul.addEventListener("mouseleave", () => moveTo($("a[aria-current]", ul)));
    requestAnimationFrame(() => moveTo($("a[aria-current]", ul)));
  }

  /* ---------- Scroll: header, progress, timeline, statement ---------- */
  const header = $(".header"), progress = $(".progress");
  const timeline = $(".timeline");
  const words = $$(".statement .w");
  const statement = $(".statement");
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    header && header.classList.toggle("is-scrolled", y > 10);
    if (progress) { const h = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`; }
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height));
      timeline.style.setProperty("--p", p.toFixed(3));
    }
    if (statement && words.length) {
      const r = statement.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < n));
    }
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

  if (statement) {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((t) => {
            if (!t.trim()) { frag.append(t); return; }
            const s = document.createElement("span"); s.className = "w" + (node.tagName === "EM" ? " hl" : ""); s.textContent = t; frag.append(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(statement);
    words.push(...$$(".statement .w"));
    if (reduceMotion) words.forEach((w) => w.classList.add("on"));
  }
  onScroll();

  /* ---------- Custom cursor ---------- */
  const cursor = $(".cursor");
  if (cursor && finePointer && !reduceMotion) {
    let x = -100, y = -100, cx = -100, cy = -100;
    addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; cursor.classList.add("is-on"); }, { passive: true });
    document.addEventListener("mouseleave", () => cursor.classList.remove("is-on"));
    const loop = () => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener("mouseover", (e) => {
      const view = !!e.target.closest(".work");
      cursor.classList.toggle("is-view", view);
      cursor.classList.toggle("is-hover", !view && !!e.target.closest("a, button, label, .chip, summary, .skill"));
    });
  }

  /* ---------- Hero: split name, typing rotator, spotlight, gauge ---------- */
  $$("[data-split]").forEach((row, r) => {
    const text = row.textContent; row.textContent = ""; row.setAttribute("aria-hidden", "true");
    [...text].forEach((c, i) => { const s = document.createElement("span"); s.className = "ch"; s.textContent = c === " " ? " " : c; s.style.animationDelay = `${0.25 + r * 0.18 + i * 0.045}s`; row.appendChild(s); });
  });

  const rot = $(".rotator__word");
  if (rot) {
    const list = JSON.parse(rot.dataset.words);
    let wi = 0, ci = list[0].length, del = true;
    rot.textContent = list[0];
    if (!reduceMotion) {
      const tick = () => {
        const w = list[wi];
        if (del) { ci--; rot.textContent = w.slice(0, ci); if (ci === 0) { del = false; wi = (wi + 1) % list.length; } setTimeout(tick, 40); }
        else { ci++; rot.textContent = list[wi].slice(0, ci); if (ci === list[wi].length) { del = true; setTimeout(tick, 1900); } else setTimeout(tick, 75); }
      };
      setTimeout(tick, 2600);
    }
  }

  const hero = $(".hero");
  if (hero && finePointer && !reduceMotion) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
      hero.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }
  setTimeout(() => $$(".gauge").forEach((g) => g.classList.add("is-on")), 1500);

  /* ---------- Work cards ---------- */
  const host = (u) => { try { const h = new URL(u).hostname.replace("www.", ""); return h.startsWith("app.gohighlevel") ? "gohighlevel.com/preview" : h; } catch { return u; } };
  const workCard = (p) => `
    <a class="work" href="${esc(p.url)}" target="_blank" rel="noopener" data-cat="${esc(p.cat)}" data-platform="${esc(p.platform)}" aria-label="${esc(p.name)} — open live site">
      <div class="work__frame">
        <div class="work__bar"><i></i><i></i><i></i><span class="work__url">${esc(host(p.url))}</span></div>
        <div class="work__shot">
          <img data-shot="${esc(shotFor(p))}" alt="${esc(p.name)} full-page website screenshot" loading="lazy" decoding="async" width="900" height="2600" data-keep="1">
          <span class="shot-loading">Loading live preview…</span>
          <span class="work__hint">${ICONS.cursor} Hover to scroll</span>
          <span class="work__pill">Visit live site ${ICONS.arrow}</span>
        </div>
      </div>
      <div class="work__info">
        <div>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="work__tags"><span class="tag tag--brand">${esc(p.cat)}</span>${STACK[p.platform].map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        <span class="platform">${esc(p.platform)}</span>
      </div>
    </a>`;

  /* Screenshots load when near the viewport; live previews are retried while the service renders them */
  const loadShot = (img, tries = 0) => {
    const base = img.dataset.shot;
    img.onload = () => {
      if (SITE.shots === "live" && img.naturalHeight < 1200 && tries < 6) { setTimeout(() => loadShot(img, tries + 1), 3500); return; }
      img.classList.add("ready");
      const frameH = img.parentElement.clientHeight || 320;
      const travel = img.clientHeight - frameH;
      if (travel > 0) img.parentElement.style.setProperty("--dur-scroll", `${Math.min(14, Math.max(3, travel / 260)).toFixed(1)}s`);
    };
    img.src = tries ? base + (base.includes("?") ? "&" : "?") + "r=" + tries : base;
  };
  const shotIO = "IntersectionObserver" in window ? new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { loadShot(e.target); shotIO.unobserve(e.target); } }), { rootMargin: "400px" }) : null;
  const viewIO = "IntersectionObserver" in window && !finePointer && !reduceMotion ? new IntersectionObserver((en) => en.forEach((e) => e.target.classList.toggle("in-view", e.isIntersecting)), { threshold: 0.5 }) : null;
  const watchShots = (root) => {
    $$("img[data-shot]", root).forEach((img) => (shotIO ? shotIO.observe(img) : loadShot(img)));
    if (!finePointer) $$(".work__hint", root).forEach((h) => (h.lastChild.textContent = " Tap to visit"));
    if (viewIO) $$(".work", root).forEach((w) => viewIO.observe(w));
  };

  /* Home: auto-playing slider */
  const slider = $("[data-render='featured-work']");
  if (slider) {
    const items = PROJECTS.filter((p) => p.featured);
    slider.innerHTML = items.map(workCard).join("");
    watchShots(slider);
    const wrap = slider.closest(".slider");
    const bar = $(".slider__progress i", wrap), count = $(".slider__count", wrap);
    const step = () => { const c = slider.children[0]; return c ? c.getBoundingClientRect().width + parseFloat(getComputedStyle(slider).columnGap || 24) : 400; };
    const update = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const p = max > 0 ? slider.scrollLeft / max : 0;
      bar.style.width = `${Math.max(8, p * 100)}%`;
      const idx = Math.min(items.length, Math.round(slider.scrollLeft / step()) + 1);
      count.textContent = `${String(idx).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    };
    const go = (dir) => {
      const max = slider.scrollWidth - slider.clientWidth - 4;
      if (dir > 0 && slider.scrollLeft >= max) slider.scrollTo({ left: 0 });
      else if (dir < 0 && slider.scrollLeft <= 4) slider.scrollTo({ left: max + 4 });
      else slider.scrollBy({ left: dir * step() });
    };
    $(".slider__btn--next", wrap).addEventListener("click", () => { go(1); restart(); });
    $(".slider__btn--prev", wrap).addEventListener("click", () => { go(-1); restart(); });
    slider.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    let timer = null, paused = false;
    const toggleBtn = $(".slider__toggle", wrap);
    const start = () => { stop(); if (!reduceMotion && !paused) timer = setInterval(() => go(1), 3200); };
    const stop = () => clearInterval(timer);
    const restart = () => start();
    wrap.addEventListener("mouseenter", stop); wrap.addEventListener("mouseleave", start);
    wrap.addEventListener("focusin", stop); wrap.addEventListener("focusout", start);
    slider.addEventListener("touchstart", stop, { passive: true }); slider.addEventListener("touchend", () => setTimeout(start, 2500));
    toggleBtn.addEventListener("click", () => { paused = !paused; toggleBtn.textContent = paused ? "Play" : "Pause"; toggleBtn.setAttribute("aria-pressed", paused); paused ? stop() : start(); });
    /* mouse drag */
    let down = false, sx = 0, sl = 0, moved = false;
    slider.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = slider.scrollLeft; });
    addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; slider.classList.add("dragging"); } slider.scrollLeft = sl - dx; });
    addEventListener("pointerup", () => { if (!down) return; down = false; slider.classList.remove("dragging"); if (moved) { const s = step(); slider.scrollTo({ left: Math.round(slider.scrollLeft / s) * s, behavior: "smooth" }); } });
    slider.addEventListener("click", (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
    const vis = new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop()));
    vis.observe(wrap);
    update();
  }

  /* Portfolio page: grid + filters */
  const allWork = $("[data-render='work-all']");
  if (allWork) {
    allWork.innerHTML = PROJECTS.map(workCard).join("");
    watchShots(allWork);
    const cats = [...new Set(PROJECTS.map((p) => p.cat))].sort();
    const catBox = $("#filter-cat"), platBox = $("#filter-platform"), count = $("#result-count");
    let cat = "All", plat = "All";
    const countFor = (c) => PROJECTS.filter((p) => (c === "All" || p.cat === c) && (plat === "All" || p.platform === plat)).length;
    const drawCats = () => {
      catBox.innerHTML = ["All", ...cats].filter((c) => c === "All" || countFor(c) > 0)
        .map((c) => `<button class="chip" aria-pressed="${c === cat}" data-v="${esc(c)}">${c === "All" ? "All categories" : esc(c)}<small>${countFor(c)}</small></button>`).join("");
    };
    const plats = ["All", "WordPress", "GoHighLevel", "Shopify"];
    platBox.innerHTML = plats.map((p) => `<button class="chip" aria-pressed="${p === plat}" data-v="${p}">${p === "All" ? "All platforms" : p}<small>${p === "All" ? PROJECTS.length : PROJECTS.filter((x) => x.platform === p).length}</small></button>`).join("");
    const search = $("#pf-search"), empty = $(".pf-empty");
    const norm = (t) => t.toLowerCase();
    const textOf = (el) => norm(el.textContent);
    const apply = () => {
      let n = 0;
      const q = search ? norm(search.value.trim()) : "";
      $$(".work", allWork).forEach((el) => {
        const show = (cat === "All" || el.dataset.cat === cat) && (plat === "All" || el.dataset.platform === plat) && (!q || textOf(el).includes(q));
        el.classList.toggle("is-hidden", !show);
        el.classList.remove("pop");
        if (show) { void el.offsetWidth; el.classList.add("pop"); el.style.animationDelay = `${Math.min(n, 8) * 40}ms`; n++; }
      });
      count.textContent = `Showing ${n} of ${PROJECTS.length} projects`;
      if (empty) empty.hidden = n > 0;
      drawCats();
      $$("button", platBox).forEach((b) => b.setAttribute("aria-pressed", b.dataset.v === plat));
    };
    catBox.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { cat = b.dataset.v; apply(); } });
    if (search) { let st; search.addEventListener("input", () => { clearTimeout(st); st = setTimeout(apply, 120); }); }
    $("#pf-clear")?.addEventListener("click", () => { cat = "All"; plat = "All"; if (search) search.value = ""; apply(); });
    $$(".pf-view button").forEach((b) => b.addEventListener("click", () => {
      $$(".pf-view button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      allWork.classList.toggle("is-list", b.dataset.view === "list");
    }));
    $$("[data-count-cats]").forEach((el) => (el.textContent = cats.length));
    platBox.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { plat = b.dataset.v; if (countFor(cat) === 0) cat = "All"; apply(); } });
    const q = new URLSearchParams(location.search).get("platform");
    if (q && STACK[q]) plat = q;
    const qc = new URLSearchParams(location.search).get("cat");
    if (qc && cats.includes(qc)) cat = qc;
    apply();
  }

  /* Service pages: hand-picked related projects */
  $$("[data-render='work-pick']").forEach((box) => {
    const slugs = box.dataset.slugs ? box.dataset.slugs.split(",") : null;
    const list = (slugs ? slugs.map((s) => PROJECTS.find((p) => p.slug === s)).filter(Boolean) : PROJECTS.filter((p) => p.platform === box.dataset.platform)).slice(0, +(box.dataset.limit || 3));
    box.innerHTML = list.map(workCard).join("");
    watchShots(box);
  });

  /* Parallax image bands */
  const bands = $$(".img-band img");
  if (bands.length && !reduceMotion) {
    const par = () => bands.forEach((img) => { const r = img.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) img.style.transform = `translateY(${(r.top / innerHeight) * -60 - 20}px)`; });
    addEventListener("scroll", () => requestAnimationFrame(par), { passive: true }); par();
  }

  /* Portfolio spotlight: one featured case at a time */
  const spot = $(".spot");
  if (spot) {
    const items = $$(".case", spot), tabsS = $$(".spot-tabs button");
    let si = 0, st;
    const showSpot = (i) => { si = i; items.forEach((c, k) => (c.hidden = k !== i)); tabsS.forEach((t, k) => t.setAttribute("aria-selected", k === i)); items[i].classList.remove("pop"); void items[i].offsetWidth; items[i].classList.add("pop"); };
    tabsS.forEach((t, k) => t.addEventListener("click", () => { showSpot(k); clearInterval(st); }));
    showSpot(0);
    if (!reduceMotion) { st = setInterval(() => showSpot((si + 1) % items.length), 7000); spot.addEventListener("mouseenter", () => clearInterval(st)); }
  }

  /* Launch section device screenshots */
  $$("img[data-project]").forEach((img) => {
    const p = PROJECTS.find((x) => x.slug === img.dataset.project);
    if (!p) return;
    img.dataset.shot = shotFor(p); img.dataset.keep = "1";
    shotIO ? shotIO.observe(img) : loadShot(img);
  });

  /* Clients strip (real client sites, with their favicons) */
  const clientsBox = $("[data-render='clients']");
  if (clientsBox) {
    const list = PROJECTS.filter((p) => !p.url.includes("gohighlevel.com/v2"));
    const item = (p, hid) => { const host = new URL(p.url).hostname.replace("www.", ""); return `<span class="client"${hid ? ' aria-hidden="true"' : ""}><img src="https://www.google.com/s2/favicons?domain=${host}&sz=64" alt="" width="22" height="22" loading="lazy">${esc(p.name)}</span>`; };
    clientsBox.innerHTML = list.map((p) => item(p)).join("") + list.map((p) => item(p, true)).join("");
  }
  /* Industry project counts */
  $$("[data-ind-count]").forEach((el) => {
    const cats = el.dataset.indCount.split(",");
    const n = PROJECTS.filter((p) => cats.includes(p.cat)).length;
    el.textContent = `${n} project${n === 1 ? "" : "s"}`;
  });

  /* ---------- Blog cards ---------- */
  const postCard = (p, feat) => `
    <a class="post${feat ? " post--featured" : ""}" href="${ROOT}blog/${p.slug}.html">
      <div class="post__media img-load">
        <img src="${photo(p.img, feat ? 1200 : 760)}" alt="" loading="lazy" decoding="async" width="760" height="507">
        <span class="post__cat">${esc(p.cat)}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:.7rem;flex:1">
        <div class="post__meta"><span>${p.date}</span><span>${p.read} min read</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <div class="post__foot"><span>Read article</span><span class="circle-arrow">${ICONS.arrow}</span></div>
      </div>
    </a>`;
  $$("[data-render='posts']").forEach((box) => {
    const list = POSTS.filter((p) => p.slug !== box.dataset.exclude).slice(0, +(box.dataset.limit || POSTS.length));
    box.innerHTML = list.map((p) => postCard(p, false)).join("");
  });
  const blogFilter = $("#blog-filter");
  if (blogFilter) {
    const grid = $("#blog-grid");
    const cats = ["All", ...new Set(POSTS.map((p) => p.cat))];
    let active = "All";
    const draw = () => {
      blogFilter.innerHTML = cats.map((c) => `<button class="chip" aria-pressed="${c === active}" data-v="${esc(c)}">${c === "All" ? "All articles" : esc(c)}</button>`).join("");
      const list = POSTS.filter((p) => active === "All" || p.cat === active);
      grid.innerHTML = list.map((p, i) => postCard(p, active === "All" && i === 0)).join("");
      $$(".post", grid).forEach((el, i) => { el.classList.add("pop"); el.style.animationDelay = `${Math.min(i, 6) * 50}ms`; });
    };
    blogFilter.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { active = b.dataset.v; draw(); } });
    draw();
  }

  /* ---------- Testimonials ---------- */
  const quoteCard = (t, hidden) => `
    <figure class="quote"${hidden ? ' aria-hidden="true"' : ""}>
      <div class="stars" aria-label="5 out of 5 stars">${ICONS.star.repeat(5)}</div>
      <p>“${esc(t.text)}”</p>
      <figcaption class="quote__who"><span class="avatar">${t.name[0]}</span><span><b>${esc(t.name)}</b><span>${esc(t.org)}</span></span></figcaption>
    </figure>`;
  const qBox = $("[data-render='testimonials']");
  if (qBox) {
    const half = Math.ceil(TESTIMONIALS.length / 2);
    const rows = [TESTIMONIALS.slice(0, half), TESTIMONIALS.slice(half)];
    qBox.innerHTML = rows.map((r, i) => `<div class="marquee${i ? " marquee--reverse" : ""}"><div class="marquee__track">${r.map((t) => quoteCard(t)).join("")}${r.map((t) => quoteCard(t, true)).join("")}</div></div>`).join("");
  }

  /* ---------- Marquees ---------- */
  $$("[data-marquee]").forEach((track) => {
    const html = track.innerHTML;
    track.insertAdjacentHTML("beforeend", html.replace(/<span class="/g, '<span aria-hidden="true" class="'));
  });

  /* ---------- Reveal ---------- */
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.style.transitionDelay = `${el.dataset.delay || 0}ms`;
      el.classList.add("is-in");
      setTimeout(() => (el.style.transitionDelay = ""), 1200 + (+el.dataset.delay || 0));
      io.unobserve(el);
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add("is-in"));

  /* ---------- Counters (real value already in HTML) ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, t0 = performance.now(), dur = 1600;
      const tick = (t) => { const k = Math.min((t - t0) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 4))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); cio.unobserve(el);
    }), { threshold: 0.6 });
    $$("[data-count]").forEach((el) => cio.observe(el));
  }

  /* ---------- Skill cards: spotlight + fill from the cursor position ---------- */
  $$(".skill, .stack-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--y", `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });

  /* ---------- Hero: a client website being built live ---------- */
  const builder = $(".builder");
  if (builder) {
    const SITES = [
      { plat: "WordPress", logo: "icons/wordpress.svg", url: "cleanpowerco.com", brand: "CleanPower", btn: "Get quote", h: "Go solar. Save more.", cta: "Free estimate",
        hero: "photo-1509391366360-2e959784a276", client: "Clean Power Co.",
        cards: [["photo-1497435334941-8c899ee9e8e9", "Residential", "Rooftop solar"], ["photo-1600880292203-757bb62b4baf", "Commercial", "For businesses"], ["photo-1573497019940-1c28c88b4f3e", "Free quote", "In 60 seconds"]] },
      { plat: "Shopify", logo: "icons/shopify.svg", url: "novastore.shop", brand: "NOVA", btn: "Cart (2)", h: "New season drop.", cta: "Shop now",
        hero: "photo-1607082348824-0a96f2a4b9da", client: "Nova Store",
        cards: [["photo-1523275335684-37898b6baf30", "Classic watch", "$129"], ["photo-1505740420928-5e560c06d30e", "Headphones", "$89"], ["photo-1563013544-824ae1b704d3", "Gift card", "$50"]] },
      { plat: "GoHighLevel", logo: "icons/ghl.png", url: "bookyourcall.com", brand: "Lumen", btn: "Book now", h: "Book your free strategy call.", cta: "Pick a time",
        hero: "photo-1573497019940-1c28c88b4f3e", client: "Lumen Coaching", slots: true,
        cards: [["", "Mon 10:00", "Available"], ["", "Tue 2:30", "Available"], ["", "Wed 11:00", "2 spots left"]] }
    ];
    const urlEl = $(".b-url", builder), platBox = $(".builder__plat", builder), platName = $(".b-plat", builder), platLogo = $(".b-plat-logo", builder);
    const blocks = $$(".bl", builder), steps = $$(".builder__steps li", builder), meter = $(".builder__meter b", builder);
    const done = $(".builder__done", builder), doneTxt = $(".b-done", builder), cursorEl = $(".builder__cursor", builder);
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const pointAt = (el, dx = 0.6, dy = 0.5) => {
      const b = builder.getBoundingClientRect(), r = el.getBoundingClientRect();
      cursorEl.style.transform = `translate(${r.left - b.left + r.width * dx}px, ${r.top - b.top + r.height * dy}px)`;
    };
    const click = async () => { cursorEl.classList.add("click"); await wait(350); cursorEl.classList.remove("click"); };
    const setStep = (i) => { steps.forEach((s, j) => { s.classList.toggle("done", j < i); s.classList.toggle("on", j === i); }); meter.style.width = `${(i / steps.length) * 100}%`; };
    const fill = (site) => {
      $(".b-logo", builder).textContent = site.brand;
      $(".b-btn", builder).textContent = site.btn;
      $(".b-h", builder).textContent = site.h;
      $(".b-cta", builder).textContent = site.cta;
      $(".b-hero-img", builder).src = photo(site.hero, 520);
      $$(".b-card", builder).forEach((c, i) => {
        const [img, t, sub] = site.cards[i];
        c.classList.toggle("slot", !!site.slots);
        if (img) $("img", c).src = photo(img, 260);
        $("b", c).textContent = t; $("small", c).textContent = sub;
      });
      doneTxt.textContent = `Live for ${site.client} — built on ${site.plat}`;
    };
    const typeUrl = async (t) => { urlEl.textContent = ""; for (const ch of t) { urlEl.textContent += ch; await wait(45); } };
    /* preload all images once */
    SITES.forEach((s) => [s.hero, ...s.cards.map((c) => c[0])].filter(Boolean).forEach((id) => { const im = new Image(); im.src = photo(id, id === s.hero ? 520 : 260); }));
    let i = 0;
    const run = async () => {
      while (true) {
        const site = SITES[i % SITES.length];
        platBox.classList.add("swap"); await wait(250);
        platName.textContent = site.plat; platLogo.src = asset(site.logo); platBox.classList.remove("swap");
        blocks.forEach((b) => b.classList.remove("in", "edit")); done.classList.remove("show"); setStep(0);
        fill(site);
        pointAt(urlEl, 0.2); await typeUrl(site.url); await wait(300);
        for (let k = 0; k < blocks.length; k++) {
          setStep(Math.min(k, 2));
          pointAt(blocks[k], 0.75, 0.55); await wait(650); await click();
          blocks.forEach((b) => b.classList.remove("edit"));
          blocks[k].classList.add("in", "edit");
          await wait(900);
        }
        blocks.forEach((b) => b.classList.remove("edit"));
        for (let k = 3; k <= steps.length; k++) { setStep(k); await wait(450); }
        pointAt(done.parentElement.querySelector(".builder__plat"), 0.5, 0.5);
        done.classList.add("show");
        await wait(2800);
        i++;
      }
    };
    if (reduceMotion) { fill(SITES[0]); blocks.forEach((b) => b.classList.add("in")); setStep(steps.length); done.classList.add("show"); urlEl.textContent = SITES[0].url; }
    else setTimeout(run, 1600);
  }

  /* ---------- Pricing tabs ---------- */
  const tabs = $(".tabs");
  if (tabs) {
    const glider = $(".tabs__glider", tabs), btns = $$(".tab", tabs);
    const select = (btn, focus) => {
      btns.forEach((b) => { const on = b === btn; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; const panel = document.getElementById(b.getAttribute("aria-controls")); panel.hidden = !on; panel.classList.toggle("show", on); });
      glider.style.width = `${btn.offsetWidth}px`; glider.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
      focus && btn.focus();
    };
    btns.forEach((b) => b.addEventListener("click", () => select(b)));
    tabs.addEventListener("keydown", (e) => {
      const i = btns.indexOf(document.activeElement);
      if (e.key === "ArrowRight") select(btns[(i + 1) % btns.length], true);
      if (e.key === "ArrowLeft") select(btns[(i - 1 + btns.length) % btns.length], true);
    });
    const start = btns.find((b) => b.dataset.platform === new URLSearchParams(location.search).get("platform")) || btns[0];
    requestAnimationFrame(() => select(start));
    addEventListener("resize", () => select(btns.find((b) => b.getAttribute("aria-selected") === "true")));
  }

  /* ---------- Segmented tabs ---------- */
  $$(".seg").forEach((seg) => {
    const btns = $$("button", seg);
    btns.forEach((b) => b.addEventListener("click", () => btns.forEach((x) => { x.setAttribute("aria-selected", x === b); document.getElementById(x.getAttribute("aria-controls")).hidden = x !== b; })));
  });

  /* ---------- Tilt & magnetic ---------- */
  const tilt = $("[data-tilt]");
  if (tilt && finePointer && !reduceMotion) {
    tilt.addEventListener("mousemove", (e) => { const r = tilt.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; tilt.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`; });
    tilt.addEventListener("mouseleave", () => (tilt.style.transform = ""));
  }
  if (finePointer && !reduceMotion) {
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`; });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Contact form: 4-step wizard ---------- */
  const form = $("#contact-form");
  if (form) {
    const steps = $$(".wiz-step", form), labels = $$(".wiz-labels li", form);
    const bar = $(".wiz-progress i", form), countEl = $(".wiz-count b", form);
    const back = $(".wiz-back", form), next = $(".wiz-next", form), send = $("button[type=submit]", form), waBtn = $("#wa-instead");
    const msg = $(".form__msg", form), review = $(".wiz-review", form), doneBox = $(".wiz-done", form);
    let cur = 0;
    const raw = (n) => (new FormData(form).get(n) || "").toString().trim();
    const labelOf = (n) => { const r = $(`input[name="${n}"]:checked`, form); return r ? $(`label[for="${r.id}"]`, form).textContent.trim() : ""; };
    const val = (n) => {
      if (n === "service") return raw("service") === "Something else" && raw("service_custom") ? raw("service_custom") : raw("service");
      if (n === "budget") return raw("budget") === "__custom" ? raw("budget_custom") : labelOf("budget");
      if (n === "timeline") return raw("timeline") === "__custom" ? raw("timeline_custom") : raw("timeline");
      return raw(n);
    };
    /* "Something else" / "Other" reveal a field to type your own */
    const customMap = { service: "Something else", budget: "__custom", timeline: "__custom" };
    const syncCustom = () => Object.entries(customMap).forEach(([name, trigger]) => {
      const box = $(`[data-custom="${name}"]`, form); if (!box) return;
      const on = raw(name) === trigger; box.hidden = !on;
      const inp = $("input", box); inp.required = on;
    });
    form.addEventListener("change", syncCustom); syncCustom();
    const compose = () => [
      `Hi Shaheer! I'm ${val("name") || "...."}.`,
      `Service: ${val("service")}`, `Budget: ${val("budget")}`, `Timeline: ${val("timeline")}`,
      val("website") && `Website: ${val("website")}`, val("phone") && `WhatsApp: ${val("phone")}`, "", val("details")
    ].filter((x) => x !== false && x !== undefined).join("\n").trim();
    const show = (i) => {
      cur = i;
      steps.forEach((st, k) => { st.hidden = k !== i; st.classList.toggle("is-active", k === i); });
      labels.forEach((l, k) => { l.classList.toggle("on", k === i); l.classList.toggle("done", k < i); });
      bar.style.width = `${((i + 1) / steps.length) * 100}%`;
      countEl.textContent = i + 1;
      back.hidden = i === 0;
      const last = i === steps.length - 1;
      next.hidden = last; send.hidden = !last; waBtn.hidden = !last;
      msg.className = "form__msg";
      if (last) {
        const rows = [["Service", val("service")], ["Budget", val("budget")], ["Timeline", val("timeline")], ["Name", val("name")], ["Email", val("email")], ["WhatsApp", val("phone") || "—"], ["Website", val("website") || "—"], ["Project", val("details")]];
        review.innerHTML = rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("") + `<button type="button" class="link-line wiz-edit">Edit details</button>`;
        $(".wiz-edit", review).addEventListener("click", () => show(2));
        waBtn.href = waLink(compose());
      }
      const first = $("input:checked + label, input:not([type=radio]), textarea", steps[i]);
      if (i > 0 && first && first.tagName !== "LABEL") setTimeout(() => first.focus({ preventScroll: true }), 50);
    };
    const validStep = (i) => {
      const fields = $$("input, textarea", steps[i]).filter((f) => f.required);
      const bad = fields.find((f) => !f.checkValidity());
      if (bad) {
        msg.className = "form__msg err";
        msg.textContent = bad.type === "email" ? "Enter a valid email address so Shaheer can reply." : "Fill in the required fields marked * to continue.";
        bad.focus(); bad.closest(".field")?.classList.add("shake");
        setTimeout(() => bad.closest(".field")?.classList.remove("shake"), 500);
        return false;
      }
      return true;
    };
    next.addEventListener("click", () => { if (validStep(cur)) show(cur + 1); });
    back.addEventListener("click", () => show(cur - 1));
    $$(".svc-pick input", form).forEach((r) => r.addEventListener("change", () => {
      if (r.value === "Something else") { setTimeout(() => $("#f-service-custom").focus(), 50); return; }
      setTimeout(() => show(1), 280);
    }));
    $$('input[name="budget"], input[name="timeline"]', form).forEach((r) => r.addEventListener("change", () => { if (r.value === "__custom") setTimeout(() => $(`[data-custom="${r.name}"] input`, form).focus(), 50); }));
    form.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.tagName === "INPUT" && cur < steps.length - 1) { e.preventDefault(); next.click(); } });
    const finish = () => { steps.forEach((s) => (s.hidden = true)); $$(".wiz-nav, .wiz-progress, .wiz-labels, .wiz-head", form).forEach((x) => (x.hidden = true)); doneBox.hidden = false; };
    waBtn.addEventListener("click", () => setTimeout(finish, 400));
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!validStep(2)) { show(2); validStep(2); return; }
      const d = new FormData(form);
      if (SITE.formEndpoint) {
        send.disabled = true; send.querySelector("span").textContent = "Sending…";
        try {
          const r = await fetch(SITE.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } });
          if (!r.ok) throw new Error();
          finish();
        } catch { msg.className = "form__msg err"; msg.textContent = "The message didn't send. Check your connection, or send it on WhatsApp."; }
        send.disabled = false; send.querySelector("span").textContent = "Send by email";
      } else {
        location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`New project: ${val("service")} — ${val("name")}`)}&body=${encodeURIComponent(compose())}`;
        finish();
      }
    });
    const pre = new URLSearchParams(location.search).get("service");
    if (pre) { const r = $$("input[name=service]", form).find((x) => x.value.toLowerCase().includes(pre.toLowerCase())); if (r) { r.checked = true; show(1); } }
  }

  /* ---------- Share links ---------- */
  $$("[data-share]").forEach((a) => {
    const u = encodeURIComponent(location.href), t = encodeURIComponent(document.title);
    a.href = { linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`, whatsapp: `https://wa.me/?text=${t}%20${u}` }[a.dataset.share];
  });
})();
