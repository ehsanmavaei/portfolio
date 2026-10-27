import type { Locale } from "@/config/site";
import {
  absoluteUrl,
  getKnowsAbout,
  getPersonSameAs,
  site,
  siteUrl,
} from "@/config/site";
import { hasProfilePhoto } from "@/lib/photo";

export function buildStructuredDataGraph(
  locale: Locale,
  includeProfileImage: boolean,
) {
  const pageUrl = absoluteUrl(`/${locale}/`);
  const alternateNames = [
    ...site.seo.alternateNames.en,
    ...site.seo.alternateNames.fa,
  ];

  const personImage =
    includeProfileImage && hasProfilePhoto()
      ? absoluteUrl(site.photoPath)
      : undefined;

  const person = {
    "@type": "Person",
    name: site.name[locale],
    alternateName: alternateNames,
    jobTitle: site.title[locale],
    url: pageUrl,
    ...(personImage ? { image: personImage } : {}),
    worksFor: {
      "@type": "Organization",
      name: site.mavito.name.en,
      url: site.mavito.liveUrl,
    },
    sameAs: getPersonSameAs(),
  };

  const website = {
    "@type": "WebSite",
    name: site.name[locale],
    url: pageUrl,
    inLanguage: locale === "fa" ? "fa-IR" : "en-US",
  };

  const mavitoApp = {
    "@type": "SoftwareApplication",
    name: site.mavito.name[locale],
    applicationCategory: "BusinessApplication",
    url: site.mavito.liveUrl,
    operatingSystem: "Web",
    creator: {
      "@type": "Person",
      name: site.name[locale],
      url: pageUrl,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, mavitoApp],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function localeAlternates() {
  return {
    en: absoluteUrl("/en/"),
    fa: absoluteUrl("/fa/"),
    "x-default": absoluteUrl("/en/"),
  };
}

export { siteUrl };
