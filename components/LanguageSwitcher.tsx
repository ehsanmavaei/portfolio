"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/config/site";
import { locales } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Dictionary["lang"];
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  labels,
  className = "",
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (target: Locale) => {
    const hash = window.location.hash;
    const normalized =
      pathname?.replace(/\/(en|fa)\/?$/, `/${target}/`) ?? `/${target}/`;
    router.push(`${normalized}${hash}`);
  };

  const linkClass = compact
    ? `inline-flex min-h-11 min-w-9 items-center justify-center rounded-[8px] px-1.5 text-xs font-medium sm:min-w-11 sm:px-2 sm:text-sm ${focusRing}`
    : `inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] px-2 text-sm font-medium ${focusRing}`;

  return (
    <div
      className={`flex min-h-11 shrink-0 items-center gap-0.5 text-sm sm:gap-1 ${className}`}
      role="group"
      aria-label={labels.switchLabel}
    >
      {locales.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-0.5 sm:gap-1">
          {index > 0 ? (
            <span className="text-border select-none" aria-hidden="true">
              |
            </span>
          ) : null}
          <Link
            href={`/${code}/`}
            className={`${linkClass} ${
              locale === code ? "text-accent" : "text-text-muted hover:text-text"
            }`}
            aria-current={locale === code ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              switchLocale(code);
            }}
          >
            {code === "en" ? labels.en : labels.fa}
          </Link>
        </span>
      ))}
    </div>
  );
}
