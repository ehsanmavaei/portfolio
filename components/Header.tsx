import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-2.5 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:px-3"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
