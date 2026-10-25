// Farsi strings live in fa.json — drafted by AI, pending native review.

import type { Locale } from "@/config/site";
import en from "./en.json";
import fa from "./fa.json";

const dictionaries = { en, fa } as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
