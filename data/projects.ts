export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  result: string;
  tech: string[];
  href: string;
  liveHref: string | null;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "Taskflow",
    description:
      "A lightweight task board for small teams with drag-and-drop columns and offline-friendly caching.",
    problem:
      "Small teams needed a simple board without heavyweight project-management overhead.",
    result:
      "[Placeholder: add measurable outcome, e.g. adoption or performance]",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/ehsanmavaei/taskflow",
    liveHref: null,
    image: "/projects/taskflow.svg",
  },
  {
    slug: "metrics-dash",
    title: "Metrics Dash",
    description:
      "Dashboard for visualizing application health metrics with customizable widgets and export to CSV.",
    problem:
      "Scattered metrics made it hard to spot regressions before they reached users.",
    result:
      "[Placeholder: add measurable outcome, e.g. time saved or incidents caught]",
    tech: ["React", "D3", "Node.js"],
    href: "https://github.com/ehsanmavaei/metrics-dash",
    liveHref: null,
    image: "/projects/metrics-dash.svg",
  },
  {
    slug: "doc-snap",
    title: "Doc Snap",
    description:
      "CLI that snapshots API documentation from OpenAPI specs and publishes static reference sites.",
    problem:
      "API docs drifted from OpenAPI specs and were painful to publish as static sites.",
    result:
      "[Placeholder: add measurable outcome, e.g. build time or doc freshness]",
    tech: ["TypeScript", "OpenAPI", "Static Site"],
    href: "https://github.com/ehsanmavaei/doc-snap",
    liveHref: null,
    image: "/projects/doc-snap.svg",
  },
];
