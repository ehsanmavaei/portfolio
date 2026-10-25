import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionShell } from "@/components/SectionShell";
import { siteConfig } from "@/lib/site";

export function AboutExperience() {
  return (
    <div className="border-t border-border bg-card-bg">
      <SectionShell id="experience" aria-labelledby="about-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <article aria-labelledby="about-heading">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-text"
            >
              About
            </h2>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative mx-auto size-32 shrink-0 overflow-hidden rounded-full border border-border bg-tag-bg sm:mx-0">
                <Image
                  src={siteConfig.photoSrc}
                  alt={`Portrait of ${siteConfig.name}`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 text-text-muted">
                <p>
                  Hi, I&apos;m {siteConfig.name}. I enjoy turning complex
                  problems into clear, user-friendly software — from early
                  prototypes to production systems that teams can maintain for
                  years.
                </p>
                <p>
                  My work spans front-end architecture, API design, and the
                  tooling that keeps delivery fast without sacrificing quality.
                  I value readable code, thoughtful UX, and measurable
                  performance.
                </p>
                <p>{siteConfig.intro}</p>
              </div>
            </div>
          </article>

          <div aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight text-text"
            >
              Experience
            </h2>
            <ol className="relative mt-8 space-y-8 pl-2">
              {experience.map((entry, index) => (
                <li
                  key={entry.id}
                  className={`relative border-l-2 pl-6 ${
                    entry.current ? "border-accent" : "border-border"
                  } ${index < experience.length - 1 ? "pb-0" : ""}`}
                >
                  <span
                    className={`absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-card-bg ${
                      entry.current ? "bg-accent" : "bg-border"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-sm text-text-muted">
                    {entry.start} — {entry.end}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-text">
                    {entry.role}
                    <span className="font-normal text-text-muted">
                      {" "}
                      · {entry.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {entry.achievement}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
