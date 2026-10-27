import type { Metadata } from "next";
import { site } from "@/config/site";
import { htmlFontClassName, rootViewport } from "../fonts";
import "../globals.css";

export const viewport = rootViewport;

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name.en}`,
    default: `${site.name.en} | ${site.title.en}`,
  },
};

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={htmlFontClassName()}
    >
      <body className="min-h-full bg-page-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
