import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-sky-700">
            Portfolio
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
            {siteConfig.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="mx-auto md:mx-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:h-56 sm:w-56">
            <Image
              src="/photo-placeholder.svg"
              alt="Portrait placeholder for Ehsan Mavaei"
              width={224}
              height={224}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-center text-xs text-zinc-500 md:text-left">
            Replace with your photo in{" "}
            <code className="rounded bg-zinc-100 px-1">public/</code>
          </p>
        </div>
      </section>
    </main>
  );
}
