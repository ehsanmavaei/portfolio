import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-page-bg">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
