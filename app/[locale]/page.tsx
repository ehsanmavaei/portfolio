import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { locales, type Locale } from "@/config/site";
import { createLocaleMetadata } from "@/lib/metadata";
import { hasProfilePhoto } from "@/lib/photo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    return {};
  }
  return createLocaleMetadata(locale as Locale);
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const resolved = locale as Locale;

  return (
    <PortfolioPage
      locale={resolved}
      showPhoto={hasProfilePhoto()}
    />
  );
}
