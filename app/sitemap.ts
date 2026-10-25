import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/config/site";
import { localeAlternates } from "@/lib/structured-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = localeAlternates();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
