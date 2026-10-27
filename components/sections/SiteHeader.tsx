"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { LocaleDictProps } from "@/components/types";
import { isFilled, site } from "@/config/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sectionIds = [
  "skills",
  "services",
  "projects",
  "experience",
  "contact",
] as const;

export function SiteHeader({ locale, dict }: LocaleDictProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const showResume = isFilled(site.resumeUrl);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = sectionIds.map((id) => ({
    href: `#${id}`,
    label: dict.nav[id],
  }));

  return (
    <header className="sticky top-0 z-50 w-full max-w-full min-w-0 border-b border-border bg-card-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1120px] min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6">
        <Link
          href={`/${locale}/#top`}
          className={`inline-flex min-h-11 min-w-0 max-w-[55%] shrink-[1] items-center gap-2 text-base font-semibold text-text sm:max-w-none sm:gap-2.5 sm:text-lg ${focusRing} rounded-[8px]`}
        >
          <Image
            src="/logo.svg"
            alt={site.name[locale]}
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-[8px]"
            unoptimized
          />
          <span className="truncate">
            {site.name[locale]}
            <span className="text-accent" aria-hidden="true">
              .
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 items-center gap-2 md:flex">
          <nav className="flex items-center gap-1" aria-label={dict.nav.primary}>
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`inline-flex min-h-11 items-center rounded-[8px] px-3 text-sm font-medium text-text-muted transition-colors hover:text-text ${focusRing}`}
              >
                {label}
              </a>
            ))}
            {showResume ? (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`ms-2 inline-flex min-h-11 items-center rounded-[8px] border border-border px-4 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent ${focusRing}`}
              >
                {dict.nav.resume}
              </a>
            ) : null}
          </nav>
          <LanguageSwitcher locale={locale} labels={dict.lang} className="ms-2 shrink-0" />
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
          <LanguageSwitcher locale={locale} labels={dict.lang} compact />
          <button
            type="button"
            className={`inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-[8px] border border-border text-text ${focusRing}`}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            </span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-text" />
              <span className="block h-0.5 w-5 bg-text" />
              <span className="block h-0.5 w-5 bg-text" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          className="border-t border-border bg-card-bg px-4 py-4 md:hidden sm:px-6"
          aria-label={dict.nav.primary}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`flex min-h-11 items-center rounded-[8px] px-2 text-base font-medium text-text ${focusRing}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            {showResume ? (
              <li>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 flex min-h-11 items-center justify-center rounded-[8px] border border-border px-4 text-base font-medium text-text ${focusRing}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.resume}
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
