import { MavitoScreenshots } from "@/components/MavitoScreenshots";
import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { site } from "@/config/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function FeatureList({
  items,
  emptyFallback,
}: {
  items: readonly string[];
  emptyFallback?: string;
}) {
  if (items.length === 0 && emptyFallback) {
    return (
      <p className="mt-2 text-sm italic leading-relaxed text-text-muted">
        {emptyFallback}
      </p>
    );
  }

  return (
    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
      {items.map((feature) => (
        <li
          key={feature}
          className="rounded-[12px] border border-border bg-page-bg px-4 py-3 text-sm text-text-muted"
        >
          {feature}
        </li>
      ))}
    </ul>
  );
}

export function MavitoCaseStudy({ locale, dict }: SectionProps) {
  const m = site.mavito;
  const walkthroughHref = `mailto:${site.email}?subject=${encodeURIComponent(m.walkthroughSubject)}`;
  const status = m.featureStatus;

  const images = [
    {
      src: m.screenshots.hero.src,
      alt: m.screenshots.hero.alt[locale],
    },
    {
      src: m.screenshots.orders.src,
      alt: m.screenshots.orders.alt[locale],
    },
    {
      src: m.screenshots.dashboard.src,
      alt: m.screenshots.dashboard.alt[locale],
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
          {m.name[locale]}
        </h2>
        <p className="mt-2 text-lg text-text-muted">{dict.mavito.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed">
          <a
            href={m.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
          >
            {dict.mavito.visitLive}
          </a>
        </p>
        <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={m.liveUrl}
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

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article>
          <h3 className="text-base font-bold text-text">
            {dict.mavito.problemTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {dict.mavito.problemBody}
          </p>
        </article>
        <article>
          <h3 className="text-base font-bold text-text">{dict.mavito.usersTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {m.users[locale]}
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
            {m.stackTags.map((tag) => (
              <li key={tag}>
                <span className="rounded-[8px] bg-tag-bg px-2.5 py-1 font-mono text-xs text-text-muted">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {m.stackNote[locale]}
          </p>
        </article>
      </div>

      <article className="mt-12">
        <h3 className="text-base font-bold text-text">
          {dict.mavito.architectureTitle}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
          {m.architecture[locale]}
        </p>
      </article>

      <article className="mt-10">
        <h3 className="text-base font-bold text-text">
          {dict.mavito.orderFlowTitle}
        </h3>
        <ol className="mt-4 list-decimal space-y-2 ps-5 text-sm leading-relaxed text-text-muted">
          {m.orderFlow[locale].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>

      <article className="mt-10">
        <h3 className="text-base font-bold text-text">
          {dict.mavito.challengesTitle}
        </h3>
        <ul className="mt-4 space-y-3">
          {m.challenges[locale].map((item) => (
            <li
              key={item}
              className="rounded-[12px] border border-border bg-page-bg px-4 py-3 text-sm leading-relaxed text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-12">
        <h3 className="text-base font-bold text-text">{dict.mavito.featuresTitle}</h3>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-text">
            {dict.mavito.featuresProduction}
          </h4>
          <FeatureList items={status.production[locale]} />
        </div>

        {status.partial[locale].length > 0 ? (
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-text">
              {dict.mavito.featuresPartial}
            </h4>
            <FeatureList items={status.partial[locale]} />
          </div>
        ) : null}

        {status.planned[locale].length > 0 ? (
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-text">
              {dict.mavito.featuresPlanned}
            </h4>
            <FeatureList items={status.planned[locale]} />
          </div>
        ) : null}
      </div>

      <p className="mt-10 text-sm text-text-muted">{m.clients[locale]}</p>
    </SectionShell>
  );
}
