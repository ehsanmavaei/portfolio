import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-zinc-500 sm:px-6">
        <p>
          © {year} {siteConfig.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
