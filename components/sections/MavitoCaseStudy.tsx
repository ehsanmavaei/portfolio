import { MavitoScreenshots } from "@/components/MavitoScreenshots";
import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { site } from "@/config/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function MavitoCaseStudy({ locale, dict }: SectionProps) {
  const walkthroughHref = `mailto:${site.email}?subject=${encodeURIComponent(site.mavito.walkthroughSubject)}`;

  const images = [
    {
      src: site.mavito.screenshots.hero.src,
      alt: site.mavito.screenshots.hero.alt[locale],
    },
    {
      src: site.mavito.screenshots.orders.src,
      alt: site.mavito.screenshots.orders.alt[locale],
    },
    {
      src: site.mavito.screenshots.dashboard.src,
      alt: site.mavito.screenshots.dashboard.alt[locale],
    },
  ];

  return (
    <SectionShell id="projects" aria-labelledby="projects-heading">
      <header className="min-w-0 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {dict.mavito.heading}
        </p>
        <h2
          id="projects-heading"
          className="mt-2 max-w-full break-words text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          {site.mavito.name[locale]}
        </h2>
        <p className="mt-2 text-lg text-text-muted">{dict.mavito.tagline}</p>
        <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={site.mavito.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 w-full items-center justify-center rounded-[8px] bg-accent px-5 text-sm font-semibold text-white hover:bg-[#2548c7] sm:w-auto ${focusRing}`}
          >
            {dict.mavito.visitLive}
            <span className="ms-2 rtl:rotate-180" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href={walkthroughHref}
            className={`inline-flex min-h-11 w-full items-center justify-center rounded-[8px] border border-border bg-card-bg px-5 text-sm font-semibold text-text hover:border-accent hover:text-accent sm:w-auto ${focusRing}`}
          >
            {dict.mavito.requestWalkthrough}
          </a>
        </div>
        <p className="mt-4 text-sm text-text-muted">{dict.mavito.sourcePrivate}</p>
      </header>

      <MavitoScreenshots
        images={images}
        urlLabel={dict.mavito.browserUrl}
        openLabel={dict.mavito.openScreenshot}
        closeLabel={dict.mavito.lightboxClose}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <article>
          <h3 className="text-base font-bold text-text">{dict.mavito.problemTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {dict.mavito.problemBody}
          </p>
        </article>
        <article>
          <h3 className="text-base font-bold text-text">{dict.mavito.roleTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {dict.mavito.roleBody}
          </p>
        </article>
        <article>
          <h3 className="text-base font-bold text-text">{dict.mavito.stackTitle}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.mavito.stackTags.map((tag) => (
              <li key={tag}>
                <span className="rounded-[8px] bg-tag-bg px-2.5 py-1 font-mono text-xs text-text-muted">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-12">
        <h3 className="text-base font-bold text-text">{dict.mavito.featuresTitle}</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dict.mavito.features.map((feature: string) => (
            <li
              key={feature}
              className="rounded-[12px] border border-border bg-page-bg px-4 py-3 text-sm text-text-muted"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-sm text-text-muted">{site.mavito.clients[locale]}</p>
    </SectionShell>
  );
}
