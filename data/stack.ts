export type StackCategory = {
  title: string;
  items: string[];
};

/** Technologies inferred from projects; add placeholders where not yet defined. */
export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "D3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "OpenAPI"],
  },
  {
    title: "Data",
    items: ["[Placeholder: add data tools]"],
  },
  {
    title: "DevOps",
    items: ["Static Site", "[Placeholder: add CI/CD tools]"],
  },
];

export const developerSnippet = {
  role: "Software Developer",
  frontend: ["Next.js", "React", "TypeScript"],
  backend: ["Node.js"],
  focus: "Performance, accessibility, maintainable code",
} as const;
