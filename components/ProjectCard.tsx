import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="text-lg font-semibold text-zinc-900">{project.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
          >
            {item}
          </li>
        ))}
      </ul>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex text-sm font-medium text-sky-700 hover:text-sky-900"
      >
        View project →
      </a>
    </article>
  );
}
