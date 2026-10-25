"use client";

import Link from "next/link";
import { useEffect, useId, useState, type MouseEvent } from "react";
import { sectionNav, siteConfig } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

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

  const resumeIsPlaceholder = siteConfig.resumeHref.startsWith("[Placeholder");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/"
          className={`inline-flex min-h-11 items-center text-lg font-semibold text-text ${focusRing} rounded-[8px]`}
        >
          {siteConfig.name}
          <span className="text-accent" aria-hidden="true">
            .
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {sectionNav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`inline-flex min-h-11 items-center rounded-[8px] px-3 text-sm font-medium text-text-muted transition-colors hover:text-text ${focusRing}`}
            >
              {label}
            </a>
          ))}
          <a
            href={resumeIsPlaceholder ? "#" : siteConfig.resumeHref}
            className={`ml-2 inline-flex min-h-11 items-center rounded-[8px] border border-border px-4 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            {...(resumeIsPlaceholder
              ? {
                  "aria-disabled": true,
                  title: siteConfig.resumeHref,
                  onClick: (event: MouseEvent<HTMLAnchorElement>) =>
                    event.preventDefault(),
                }
              : {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] border border-border text-text md:hidden ${focusRing}`}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          className="border-t border-border bg-card-bg px-6 py-4 md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-1">
            {sectionNav.map(({ href, label }) => (
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
            <li>
              <a
                href={resumeIsPlaceholder ? "#" : siteConfig.resumeHref}
                className={`mt-2 flex min-h-11 items-center justify-center rounded-[8px] border border-border px-4 text-base font-medium text-text ${focusRing}`}
                onClick={(event) => {
                  if (resumeIsPlaceholder) event.preventDefault();
                  setMenuOpen(false);
                }}
                {...(resumeIsPlaceholder
                  ? { "aria-disabled": true, title: siteConfig.resumeHref }
                  : { target: "_blank", rel: "noopener noreferrer" })}
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
