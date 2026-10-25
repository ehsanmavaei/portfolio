import { InstagramLink } from "@/components/social/InstagramLink";
import type { LocaleDictProps } from "@/components/types";
import { isFilled, site } from "@/config/site";

export function SiteFooter({ locale, dict }: LocaleDictProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-full min-w-0 border-t border-border bg-page-bg">
      <div className="mx-auto flex w-full max-w-[1120px] min-w-0 flex-col items-center gap-4 px-4 py-8 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:justify-between sm:px-6">
        <p>
          © {year} {site.name[locale]}
        </p>
        {isFilled(site.instagram) ? (
          <InstagramLink label={dict.hero.instagram} variant="footer" />
        ) : null}
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
