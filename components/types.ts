import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export type LocaleDictProps = {
  locale: Locale;
  dict: Dictionary;
};

export type PageContentProps = {
  locale: Locale;
  showPhoto: boolean;
};

export type SectionProps = LocaleDictProps & {
  showPhoto: boolean;
};
