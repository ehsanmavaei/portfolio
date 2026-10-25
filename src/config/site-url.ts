function normalizeSiteUrl(raw: string | undefined): string {
  return (raw ?? "").trim().replace(/\/$/, "");
}

const resolved = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

if (!resolved && process.env.npm_lifecycle_event === "build") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is required for production builds. Set it in your environment or .env.local (no trailing slash), e.g. NEXT_PUBLIC_SITE_URL=https://your-domain.com",
  );
}

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
  return "";
}

export function getMetadataBase(): URL {
  const origin = getSiteOrigin();
  if (!origin) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required. Set it in your environment or .env.local (no trailing slash), e.g. NEXT_PUBLIC_SITE_URL=https://your-domain.com",
    );
  }
  return new URL(origin);
}

export function absoluteUrl(path: string): string {
  const origin = getSiteOrigin();
  if (!origin) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalizedPath}`;
}
