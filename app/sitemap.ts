import type { MetadataRoute } from "next";
import { getSiteOrigin, locales } from "@/config/site";
import { localeAlternates } from "@/lib/structured-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  const lastModified = new Date();
  const languages = localeAlternates();

  return locales.map((locale) => ({
    url: `${origin}/${locale}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
