/* ==========================================================================
   Full-page WebP screenshots of every project in js/data.js
   Run once on your computer (needs Node 18+):

     npm i playwright sharp
     npx playwright install chromium
     node tools/take-screenshots.mjs

   Then set  shots: "local"  in js/data.js.
   Files are saved to assets/shots/<slug>.webp (900px wide, whole page).
   ========================================================================== */
import { chromium } from "playwright";
import sharp from "sharp";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = path.join(root, "assets", "shots");
fs.mkdirSync(out, { recursive: true });

const ctx = { document: { body: { dataset: {} } } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "js", "data.js"), "utf8") + ";this.PROJECTS=PROJECTS;", ctx);
const projects = ctx.PROJECTS;
const only = process.argv[2]; // optional: node tools/take-screenshots.mjs <slug>

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const p of projects) {
  if (only && p.slug !== only) continue;
  try {
    process.stdout.write(`→ ${p.name} … `);
    await page.goto(p.url, { waitUntil: "networkidle", timeout: 60000 });
    // scroll to the bottom so lazy images and animations load
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1500);
    const png = await page.screenshot({ fullPage: true });
    const img = sharp(png);
    const meta = await img.metadata();
    const maxH = Math.min(meta.height, 9000); // keep files reasonable
    await img.extract({ left: 0, top: 0, width: meta.width, height: maxH })
      .resize({ width: 900 }).webp({ quality: 72 }).toFile(path.join(out, `${p.slug}.webp`));
    console.log("saved");
  } catch (e) {
    console.log("failed:", e.message.split("\n")[0]);
  }
}
await browser.close();
console.log(`\nDone. Now set shots: "local" in js/data.js`);
