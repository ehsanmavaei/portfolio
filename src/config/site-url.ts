/** Canonical production origin (no trailing slash). */
export const productionSiteUrl = "https://ehsanmavaei.ir";

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = (raw ?? "").trim().replace(/\/$/, "");
  if (trimmed.includes("workers.dev")) {
    return productionSiteUrl;
  }
  return trimmed;
}

const resolved = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Absolute site origin from env; empty in dev when unset. Required at `next build` time. */
export const siteUrl = resolved;

function devOrigin(): string {
  const port = process.env.PORT?.trim() || "3000";
  return `http://localhost:${port}`;
}

/** Origin used for metadata, JSON-LD, and absolute links. */
export function getSiteOrigin(): string {
  if (siteUrl) {
    return siteUrl;
  }
  if (process.env.NODE_ENV === "development") {
    return devOrigin();
  }
  return productionSiteUrl;
}

export function getMetadataBase(): URL {
  return new URL(productionSiteUrl);
}

export function absoluteUrl(path: string): string {
  const origin = getSiteOrigin();
  if (!origin) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalizedPath}`;
}
