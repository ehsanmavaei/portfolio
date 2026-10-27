import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { isFilled, site } from "@/config/site";

export function AboutExperience({ locale, dict, showPhoto }: SectionProps) {
  const entry = site.experience;
  const showDates =
    isFilled(entry.startDate) || isFilled(entry.endDate);

  return (
    <div className="w-full max-w-full min-w-0 border-t border-border bg-card-bg">
      <SectionShell id="experience" aria-labelledby="about-heading">
        <div className="grid min-w-0 w-full max-w-full gap-12 lg:grid-cols-2 lg:gap-16">
          <article aria-labelledby="about-heading">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-text"
            >
              {dict.about.heading}
            </h2>
            <div
              className={`mt-6 ${showPhoto ? "flex flex-col gap-6 sm:flex-row sm:items-start" : ""}`}
            >
              {showPhoto ? (
                <div className="relative mx-auto size-[120px] shrink-0 overflow-hidden rounded-full border border-border bg-tag-bg shadow-[0_4px_12px_rgb(16_24_40_/_0.08)] sm:mx-0 md:size-40">
                  <Image
                    src={site.photoPath}
                    alt={site.photoAlt[locale]}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="h-full w-full max-w-full object-cover object-[center_top]"
                  />
                </div>
              ) : null}
              <div className="space-y-4 text-text-muted">
                {site.aboutParagraphs[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <div aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight text-text"
            >
              {dict.experience.heading}
            </h2>
            <ol className="relative mt-8 space-y-8 ps-2">
              <li className="relative border-s-2 border-accent ps-6">
                <span
                  className="absolute -start-[7px] top-1.5 size-3 rounded-full border-2 border-card-bg bg-accent"
                  aria-hidden="true"
                />
                {showDates ? (
                  <p className="font-mono text-sm text-text-muted" dir="ltr">
                    {entry.startDate}
                    {isFilled(entry.startDate) && isFilled(entry.endDate)
                      ? " — "
                      : ""}
                    {entry.endDate}
                  </p>
                ) : null}
                <h3 className="mt-1 text-base font-bold text-text">
                  {entry.role[locale]}
                  <span className="font-normal text-text-muted">
                    {" "}
                    · {entry.company[locale]}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {entry.description[locale]}
                </p>
              </li>
            </ol>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
