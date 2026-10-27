import type { Metadata } from "next";
import type { Locale } from "@/config/site";
import { absoluteUrl, getMetadataBase, site } from "@/config/site";
const ogImagePath = "/images/og.png";

function localeAlternatePaths() {
  return {
    en: "/en/",
    fa: "/fa/",
    "x-default": "/en/",
  };
}

function ogImageMeta(locale: Locale) {
  return {
    url: absoluteUrl(ogImagePath),
    width: 1200,
    height: 630,
    alt: site.seo.title[locale],
  };
}

export function createLocaleMetadata(locale: Locale): Metadata {
  const path = `/${locale}/`;
  const pageUrl = absoluteUrl(path);
  const title = site.seo.title[locale];
  const description = site.seo.description[locale];
  const ogLocale = locale === "fa" ? "fa_IR" : "en_US";
  const ogAlternate = locale === "fa" ? ["en_US"] : ["fa_IR"];

  return {
    metadataBase: getMetadataBase(),
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: site.name[locale],
      type: "website",
      locale: ogLocale,
      alternateLocale: ogAlternate,
      images: [ogImageMeta(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImagePath)],
    },
    alternates: {
      canonical: path,
      languages: localeAlternatePaths(),
    },
  };
}

export function createRootMetadata(): Metadata {
  const title = site.seo.title.en;
  const description = site.seo.description.en;

  return {
    metadataBase: getMetadataBase(),
    title: { absolute: title },
    description,
    alternates: {
      canonical: "/en/",
      languages: localeAlternatePaths(),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl("/en/"),
      type: "website",
      locale: "en_US",
      alternateLocale: ["fa_IR"],
      images: [ogImageMeta("en")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImagePath)],
    },
  };
}
