import { SectionShell } from "@/components/SectionShell";
import type { SectionProps } from "@/components/types";
import { site } from "@/config/site";

export function TechStack({ dict }: SectionProps) {
  const categories = [
    { key: "frontend" as const, items: site.techStack.frontend },
    { key: "backend" as const, items: site.techStack.backend },
    { key: "data" as const, items: site.techStack.data },
    { key: "devops" as const, items: site.techStack.devops },
  ];

  return (
    <div className="w-full max-w-full min-w-0 border-y border-border bg-card-bg">
      <SectionShell id="skills" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-text"
        >
          {dict.skills.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">{dict.skills.intro}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.key}>
              <article className="h-full rounded-[12px] border border-border bg-page-bg p-5">
                <h3 className="text-base font-bold text-text">
                  {dict.skills[category.key]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-[8px] bg-tag-bg px-2.5 py-1 font-mono text-xs text-text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </SectionShell>
    </div>
  );
}
