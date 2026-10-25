import { notFound } from "next/navigation";
import { locales, type Locale } from "@/config/site";
import { htmlFontClassName, rootViewport } from "../fonts";
import "../globals.css";

export const viewport = rootViewport;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const resolved = locale as Locale;
  const htmlLang = resolved === "fa" ? "fa" : "en";
  const htmlDir = resolved === "fa" ? "rtl" : "ltr";
  const bodyFontClass =
    resolved === "fa" ? "font-fa text-text" : "font-sans text-text";

  return (
    <html
      lang={htmlLang}
      dir={htmlDir}
      suppressHydrationWarning
      className={htmlFontClassName()}
    >
      <body
        className={`min-h-full bg-page-bg antialiased ${bodyFontClass}`}
      >
        {children}
      </body>
    </html>
  );
}
