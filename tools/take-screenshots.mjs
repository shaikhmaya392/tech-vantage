/* ==========================================================================
   Desktop + mobile WebP screenshots of every project in js/data.js
   (client sites AND the custom-coded demos in /demos)

   Run once on your computer (Node 18+):
     npm i playwright sharp
     npx playwright install chromium
     node tools/take-screenshots.mjs              ← all projects
     node tools/take-screenshots.mjs qulfiwala    ← just one

   Files are saved as assets/shots/<slug>.webp and assets/shots/<slug>-m.webp
   Then EITHER set  shots: "local"  in js/data.js (uses all of them)
   OR paste single paths into PROJECT_IMAGES in js/data.js.
   ========================================================================== */
import { chromium } from "playwright";
import sharp from "sharp";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "assets", "shots");
fs.mkdirSync(out, { recursive: true });

const ctx = { document: { body: { dataset: {} } }, localStorage: { getItem: () => null }, navigator: { language: "en" }, Intl };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "js", "data.js"), "utf8") + ";this.PROJECTS=PROJECTS;", ctx);
const only = process.argv[2];

const urlOf = (p) => (/^https?:/.test(p.url) ? p.url : pathToFileURL(path.join(root, p.url)).href);
const shots = [
  { suffix: "", viewport: { width: 1440, height: 1080 }, width: 1200, maxH: 7000, scale: 1 },
  { suffix: "-m", viewport: { width: 390, height: 844 }, width: 780, maxH: 5200, scale: 2 }
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: s.viewport, deviceScaleFactor: s.scale });
  for (const p of ctx.PROJECTS) {
    if (only && p.slug !== only) continue;
    try {
      process.stdout.write(`→ ${p.name}${s.suffix ? " (mobile)" : ""} … `);
      await page.goto(urlOf(p), { waitUntil: "networkidle", timeout: 60000 });
      await page.addStyleTag({ content: ".demo-bar{display:none!important}" });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
        document.querySelectorAll("[data-rv]").forEach((e) => e.classList.add("rv-in"));
      });
      await page.waitForTimeout(1500);
      const png = await page.screenshot({ fullPage: true });
      const img = sharp(png), meta = await img.metadata();
      await img.extract({ left: 0, top: 0, width: meta.width, height: Math.min(meta.height, s.maxH * s.scale) })
        .resize({ width: s.width }).webp({ quality: 74 }).toFile(path.join(out, `${p.slug}${s.suffix}.webp`));
      console.log("saved");
    } catch (e) {
      console.log("failed:", e.message.split("\n")[0]);
    }
  }
  await page.close();
}
await browser.close();
console.log(`\nDone. Set shots: "local" in js/data.js, or paste paths into PROJECT_IMAGES.`);
