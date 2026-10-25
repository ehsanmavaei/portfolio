/**
 * Usage: npx serve out -l 3456 (in another terminal)
 *        node scripts/check-overflow.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3456";
const widths = [320, 360, 390, 440, 768, 1024, 1280];
const paths = ["/en/", "/fa/"];

function offenders(page) {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const docWide = document.documentElement.scrollWidth > vw;
    const list = [];
    const all = document.querySelectorAll("body *");
    for (const el of all) {
      if (!(el instanceof HTMLElement)) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      const scrollOverflow = el.scrollWidth > el.clientWidth + 1;
      const pastViewport = rect.right > vw + 1 || rect.left < -1;
      if (scrollOverflow || pastViewport) {
        const tag = el.tagName.toLowerCase();
        const id = el.id ? `#${el.id}` : "";
        const cls =
          typeof el.className === "string"
            ? el.className.split(/\s+/).slice(0, 4).join(".")
            : "";
        list.push({
          tag,
          id,
          cls,
          scrollOverflow,
          pastViewport,
          right: Math.round(rect.right),
          vw,
          scrollW: el.scrollWidth,
          clientW: el.clientWidth,
        });
      }
    }
    return { docWide, scrollWidth: document.documentElement.scrollWidth, vw, list: list.slice(0, 25) };
  });
}

const browser = await chromium.launch();
const page = await browser.newPage();
const report = [];

for (const path of paths) {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    const result = await offenders(page);
    report.push({ path, width, ...result });
  }
}

await browser.close();

for (const row of report) {
  const status = row.docWide ? "OVERFLOW" : "ok";
  console.log(
    `${status} ${row.path} ${row.width}px doc=${row.scrollWidth} vw=${row.vw}`,
  );
  if (row.docWide && row.list.length) {
    for (const o of row.list.slice(0, 8)) {
      console.log(
        `  ${o.tag}${o.id}.${o.cls} past=${o.pastViewport} scroll=${o.scrollOverflow} right=${o.right}`,
      );
    }
  }
}

const bad = report.filter((r) => r.docWide);
process.exit(bad.length ? 1 : 0);
