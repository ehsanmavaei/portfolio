import { InstagramLink } from "@/components/social/InstagramLink";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { isFilled, site } from "@/config/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function ContactSection({ locale, dict }: SectionProps) {
  return (
    <>
      <SectionShell id="contact" aria-labelledby="contact-heading">
        <div className="rounded-[16px] bg-dark-card px-6 py-14 text-center sm:px-10 sm:py-16">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {dict.contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[#D0D5DD]">
            {dict.contact.body}
          </p>
          <a
            href={`mailto:${site.email}`}
            aria-label={dict.contact.emailButton}
            className={`mt-8 inline-flex min-h-11 max-w-full items-center justify-center break-all rounded-[8px] bg-white px-6 text-sm font-semibold text-text hover:bg-[#F2F4F7] ${focusRing}`}
          >
            <bdi dir="ltr">{site.email}</bdi>
          </a>
          {isFilled(site.instagram) ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <InstagramLink label={dict.hero.instagram} variant="contact" />
            </div>
          ) : null}
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
            {isFilled(site.github) ? (
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[#D0D5DD] underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-[8px]"
                >
                  {dict.hero.github}
                </a>
              </li>
            ) : null}
            {isFilled(site.linkedin) ? (
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[#D0D5DD] underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-[8px]"
                >
                  {dict.hero.linkedin}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </SectionShell>
      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
