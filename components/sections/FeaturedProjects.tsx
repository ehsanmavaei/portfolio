import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionShell } from "@/components/SectionShell";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function FeaturedProjects() {
  return (
    <SectionShell id="projects" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-3xl font-bold tracking-tight text-text"
      >
        Featured projects
      </h2>
      <p className="mt-3 max-w-2xl text-text-muted">
        Selected work from{" "}
        <code className="font-mono text-sm">data/projects.ts</code>.
      </p>
      <ul className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {projects.map((project) => (
          <li key={project.slug} className="min-w-0">
            <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-border bg-card-bg transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_12px_24px_-8px_rgb(16_24_40_/_0.12)]">
              <div className="relative aspect-[16/10] border-b border-border bg-tag-bg">
                <Image
                  src={project.image}
                  alt={`Screenshot placeholder for ${project.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-text">{project.title}</h3>
                <p className="mt-2 text-sm text-text-muted">
                  <span className="font-medium text-text">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  <span className="font-medium text-text">Result:</span>{" "}
                  {project.result}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((item) => (
                    <li key={item}>
                      <span className="rounded-[8px] bg-tag-bg px-2 py-1 font-mono text-xs text-text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-4 pt-6">
                  {project.liveHref ? (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:underline ${focusRing} rounded-[8px]`}
                    >
                      Live demo
                    </a>
                  ) : (
                    <span
                      className="inline-flex min-h-11 items-center font-mono text-xs text-text-muted"
                      title="Add liveHref in data/projects.ts"
                    >
                      [Placeholder: Live demo URL]
                    </span>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center text-sm font-semibold text-text-muted hover:text-text hover:underline ${focusRing} rounded-[8px]`}
                  >
                    Source code
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
