import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected projects by Ehsan Mavaei — web apps, dashboards, and developer tools.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-zinc-600">
          A few things I have built recently. Edit{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-sm">
            data/projects.ts
          </code>{" "}
          to update this list.
        </p>
      </header>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="min-h-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}
