import Link from "next/link";
import { site } from "@/config/site";

export default function LocaleNotFound() {
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-text">Page not found</h1>
      <p className="mt-3 text-text-muted">
        The page you requested is not available. Return to the portfolio home.
      </p>
      <nav
        className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
        aria-label="Back to portfolio"
      >
        <Link
          href="/en/"
          className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-accent px-5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name.en} — English
        </Link>
        <Link
          href="/fa/"
          className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-border bg-card-bg px-5 text-sm font-semibold text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name.fa} — فارسی
        </Link>
      </nav>
    </main>
  );
}
