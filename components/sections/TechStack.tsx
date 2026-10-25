import { stackCategories } from "@/data/stack";
import { SectionShell } from "@/components/SectionShell";

export function TechStack() {
  return (
    <div className="border-y border-border bg-card-bg">
      <SectionShell id="skills" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-text"
        >
          Tech stack
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Tools and technologies I use across the projects in this portfolio.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stackCategories.map((category) => (
            <li key={category.title}>
              <article className="h-full rounded-[12px] border border-border bg-page-bg p-5">
                <h3 className="text-base font-bold text-text">
                  {category.title}
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
