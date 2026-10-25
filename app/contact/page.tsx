import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} — email, GitHub, and LinkedIn.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-zinc-600">
          The fastest way to reach me is by email. You can also find me on
          GitHub and LinkedIn.
        </p>
      </header>
      <ul className="mt-10 space-y-4">
        <li>
          <ContactRow label="Email">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-sky-700 hover:text-sky-900"
            >
              {siteConfig.email}
            </a>
          </ContactRow>
        </li>
        <li>
          <ContactRow label="GitHub">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 hover:text-sky-900"
            >
              {siteConfig.github.replace("https://", "")}
            </a>
          </ContactRow>
        </li>
        <li>
          <ContactRow label="LinkedIn">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 hover:text-sky-900"
            >
              {siteConfig.linkedin.replace("https://www.", "")}
            </a>
          </ContactRow>
        </li>
      </ul>
    </main>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <div className="mt-1 text-zinc-800">{children}</div>
    </div>
  );
}
