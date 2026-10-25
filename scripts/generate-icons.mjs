import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "icon-source.png");

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function main() {
  await ensureDir(path.join(root, "app"));
  await ensureDir(path.join(root, "public"));

  const icon512 = await sharp(source).resize(512, 512).png().toBuffer();
  const icon180 = await sharp(source).resize(180, 180).png().toBuffer();
  const icon192 = await sharp(source).resize(192, 192).png().toBuffer();

  await writeFile(path.join(root, "app", "icon.png"), icon512);
  await writeFile(path.join(root, "app", "apple-icon.png"), icon180);
  await writeFile(path.join(root, "public", "icon-192.png"), icon192);
  await writeFile(path.join(root, "public", "icon-512.png"), icon512);

  const faviconSizes = [16, 32, 48];
  const faviconPngs = await Promise.all(
    faviconSizes.map((size) =>
      sharp(source).resize(size, size).png().toBuffer(),
    ),
  );

  const faviconIco = await pngToIco(faviconPngs);
  await writeFile(path.join(root, "app", "favicon.ico"), faviconIco);

  console.log("Generated app icons and PWA PNGs from icon-source.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
