import { developerSnippet } from "@/data/stack";
import { siteConfig } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function splitIntro(intro: string) {
  const parts = intro.split(/(?<=\.)\s+/);
  return {
    headline: parts[0] ?? intro,
    pitch: parts.slice(1).join(" "),
  };
}

function HeroHeadline({ text }: { text: string }) {
  const phrase = siteConfig.heroAccentPhrase;
  const index = text.toLowerCase().indexOf(phrase.toLowerCase());

  if (index === -1) {
    return <span>{text}</span>;
  }

  const before = text.slice(0, index);
  const match = text.slice(index, index + phrase.length);
  const after = text.slice(index + phrase.length);

  return (
    <>
      {before}
      <span className="text-accent">{match}</span>
      {after}
    </>
  );
}

export function Hero() {
  const { headline, pitch } = splitIntro(siteConfig.intro);
  return (
    <section aria-labelledby="hero-heading" className="bg-page-bg">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 py-[72px] lg:grid-cols-2 lg:items-center">
        <div>
          {siteConfig.availableForRoles ? (
            <p className="inline-flex min-h-11 items-center rounded-full bg-success-bg px-3 py-1 text-sm font-medium text-success-text">
              Available for new roles
            </p>
          ) : null}
          <h1
            id="hero-heading"
            className="mt-4 text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-text sm:text-[3.5rem]"
          >
            <HeroHeadline text={headline} />
          </h1>
          {pitch ? (
            <p className="mt-4 max-w-xl text-lg text-text-muted">{pitch}</p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className={`inline-flex min-h-11 items-center justify-center rounded-[8px] bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2548c7] ${focusRing}`}
            >
              View my work
            </a>
            <a
              href="#contact"
              className={`inline-flex min-h-11 items-center justify-center rounded-[8px] border border-border bg-card-bg px-5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              Get in touch
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-11 inline-flex items-center text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-11 inline-flex items-center text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`min-h-11 inline-flex items-center text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRing} rounded-[8px]`}
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <aside
          className="rounded-[16px] bg-dark-card p-6 text-[#E4E7EC] shadow-[var(--shadow-code)]"
          aria-label="Developer profile snippet"
        >
          <div className="mb-4 flex gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#F97066]" />
            <span className="size-3 rounded-full bg-[#FDB022]" />
            <span className="size-3 rounded-full bg-[#32D583]" />
          </div>
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
            <code>{`const developer = {
  role: "${developerSnippet.role}",
  frontend: [${developerSnippet.frontend.map((t) => `"${t}"`).join(", ")}],
  backend: [${developerSnippet.backend.map((t) => `"${t}"`).join(", ")}],
  focus: "${developerSnippet.focus}",
};`}</code>
          </pre>
        </aside>
      </div>
    </section>
  );
}
