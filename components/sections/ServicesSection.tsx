import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { site } from "@/config/site";

export function ServicesSection({ locale }: SectionProps) {
  const copy = site.services;

  return (
    <div className="w-full max-w-full min-w-0 border-t border-border bg-page-bg">
    <SectionShell id="services" aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="text-3xl font-bold tracking-tight text-text"
      >
        {copy.heading[locale]}
      </h2>
      <p className="mt-3 max-w-2xl text-text-muted">{copy.intro[locale]}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {copy.items[locale].map((item) => (
          <li
            key={item}
            className="rounded-[12px] border border-border bg-page-bg px-4 py-3 text-sm leading-relaxed text-text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </SectionShell>
    </div>
  );
}
