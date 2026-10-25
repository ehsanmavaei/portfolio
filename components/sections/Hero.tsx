import { InstagramLink } from "@/components/social/InstagramLink";
import type { SectionProps } from "@/components/types";
import { isFilled, site } from "@/config/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Hero({ locale, dict }: SectionProps) {
  const [frontend, react, typescript, backend, database] = site.codeStack;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full max-w-full min-w-0 bg-page-bg"
    >
      <div className="mx-auto grid w-full max-w-[1120px] min-w-0 grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-[72px]">
        <div className="order-2 min-w-0 w-full max-w-full md:order-1">
          <p className="max-w-full rounded-full bg-success-bg px-3 py-2 text-sm font-medium leading-snug text-success-text whitespace-normal">
            {site.availability[locale]}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-full break-words text-pretty text-[clamp(1.75rem,6vw,3.5rem)] font-extrabold leading-[1.15] tracking-tight text-text"
          >
            {site.name[locale]}
            <span className="mt-1 block text-[clamp(1.125rem,4vw,2rem)] font-bold text-accent">
              {site.title[locale]}
            </span>
          </h1>
          <p className="mt-4 max-w-full break-words text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
            {site.heroPitch[locale]}
          </p>
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-[8px] bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2548c7] sm:w-auto ${focusRing}`}
            >
              {dict.hero.viewWork}
            </a>
            <a
              href="#contact"
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-[8px] border border-border bg-card-bg px-5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent sm:w-auto ${focusRing}`}
            >
              {dict.hero.getInTouch}
            </a>
          </div>
          <ul className="mt-6 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm">
            {isFilled(site.github) ? (
              <li className="min-w-0 max-w-full">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 max-w-full items-center break-words text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
                >
                  {dict.hero.github}
                </a>
              </li>
            ) : null}
            {isFilled(site.linkedin) ? (
              <li className="min-w-0 max-w-full">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 max-w-full items-center break-words text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
                >
                  {dict.hero.linkedin}
                </a>
              </li>
            ) : null}
            {isFilled(site.instagram) ? (
              <li className="min-w-0 max-w-full">
                <InstagramLink label={dict.hero.instagram} variant="hero" />
              </li>
            ) : null}
            <li className="min-w-0 max-w-full">
              <a
                href={`mailto:${site.email}`}
                className={`inline-flex min-h-11 max-w-full items-center break-all text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
              >
                <bdi dir="ltr">{dict.hero.email}</bdi>
              </a>
            </li>
          </ul>
        </div>

        <aside
          className="order-1 min-w-0 w-full max-w-full rounded-[16px] bg-dark-card p-4 text-[#E4E7EC] shadow-[var(--shadow-code)] sm:p-6 md:order-2"
          aria-label={dict.hero.codeCardLabel}
        >
          <div className="mb-4 flex gap-2" aria-hidden="true">
            <span className="size-3 shrink-0 rounded-full bg-[#F97066]" />
            <span className="size-3 shrink-0 rounded-full bg-[#FDB022]" />
            <span className="size-3 shrink-0 rounded-full bg-[#32D583]" />
          </div>
          <pre
            className="max-w-full overflow-x-auto font-mono text-xs leading-relaxed sm:text-sm"
            dir="ltr"
          >
            <code className="block min-w-0 whitespace-pre">{`const stack = {
  frontend: "${frontend} + ${react}",
  language: "${typescript}",
  backend: "${backend}",
  database: "${database}",
};`}</code>
          </pre>
        </aside>
      </div>
    </section>
  );
}
