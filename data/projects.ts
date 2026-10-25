export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "Taskflow",
    description:
      "A lightweight task board for small teams with drag-and-drop columns and offline-friendly caching.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/ehsanmavaei/taskflow",
  },
  {
    slug: "metrics-dash",
    title: "Metrics Dash",
    description:
      "Dashboard for visualizing application health metrics with customizable widgets and export to CSV.",
    tech: ["React", "D3", "Node.js"],
    href: "https://github.com/ehsanmavaei/metrics-dash",
  },
  {
    slug: "doc-snap",
    title: "Doc Snap",
    description:
      "CLI that snapshots API documentation from OpenAPI specs and publishes static reference sites.",
    tech: ["TypeScript", "OpenAPI", "Static Site"],
    href: "https://github.com/ehsanmavaei/doc-snap",
  },
];
