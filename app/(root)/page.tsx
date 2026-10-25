import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { createRootMetadata } from "@/lib/metadata";

export const metadata: Metadata = createRootMetadata();

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-text">{site.name.en}</h1>
      <p className="mt-3 text-text-muted">{site.seo.description.en}</p>
      <nav
        className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
        aria-label="Choose language"
      >
        <Link
          href="/en/"
          className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-accent px-5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          English — {site.name.en}
        </Link>
        <Link
          href="/fa/"
          className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-border bg-card-bg px-5 text-sm font-semibold text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          فارسی — {site.name.fa}
        </Link>
      </nav>
    </main>
  );
}
