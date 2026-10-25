import type { Viewport } from "next";
import { Inter, JetBrains_Mono, Vazirmatn } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2F5BEA",
};

export function htmlFontClassName(): string {
  return `${inter.variable} ${jetbrainsMono.variable} ${vazirmatn.variable} h-full`;
}
