import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description: `About ${siteConfig.name} — background, interests, and how I work.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <article className="prose-zinc max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          About
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Hi, I&apos;m {siteConfig.name}. I enjoy turning complex problems into
          clear, user-friendly software — from early prototypes to production
          systems that teams can maintain for years.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-600">
          My work spans front-end architecture, API design, and the tooling that
          keeps delivery fast without sacrificing quality. I value readable code,
          thoughtful UX, and measurable performance.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-600">
          When I&apos;m not coding, I like learning new frameworks, contributing
          to open source, and refining this portfolio with projects that reflect
          what I care about most.
        </p>
      </article>
    </main>
  );
}
