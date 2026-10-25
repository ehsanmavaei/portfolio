import { SectionShell } from "@/components/SectionShell";
import { siteConfig } from "@/lib/site";
import { SiteFooter } from "@/components/sections/SiteFooter";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function ContactSection() {
  return (
    <>
      <SectionShell id="contact" aria-labelledby="contact-heading">
        <div className="rounded-[16px] bg-dark-card px-6 py-14 text-center sm:px-10 sm:py-16">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[#D0D5DD]">
            The fastest way to reach me is by email. You can also find me on
            GitHub and LinkedIn.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-white px-6 text-sm font-semibold text-text transition-colors hover:bg-[#F2F4F7] ${focusRing}`}
          >
            {siteConfig.email}
          </a>
        </div>
      </SectionShell>
      <SiteFooter />
    </>
  );
}
