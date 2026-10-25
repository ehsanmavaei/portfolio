import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images");
const outFile = path.join(outDir, "og.png");

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F7F8FA"/>
  <g transform="translate(72 159) scale(0.3125)">
    <rect width="512" height="512" rx="112" fill="#2F5BEA"/>
    <g transform="translate(-11 0)" fill="#FFFFFF">
      <path d="M124 128H232V172H168V234H220V278H168V340H232V384H124Z"/>
      <path d="M270 384V128H316L340 196L364 128H410V384H366V218L340 286L314 218V384Z"/>
    </g>
  </g>
  <text x="280" y="280" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#101828">Ehsan Mavaei</text>
  <text x="280" y="350" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#475467">Founder &amp; Full Stack Developer</text>
  <text x="72" y="580" font-family="Courier New, monospace" font-size="24" fill="#475467">mavito.ir</text>
</svg>`;

async function main() {
  await mkdir(outDir, { recursive: true });
  const png = await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toBuffer();
  await writeFile(outFile, png);
  console.log("Generated public/images/og.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
