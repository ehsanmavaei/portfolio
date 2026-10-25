import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { isFilled, site } from "@/config/site";

const focusRingAccent =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const focusRingLight =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

type InstagramLinkProps = {
  label: string;
  variant: "hero" | "contact" | "footer";
};

export function InstagramLink({ label, variant }: InstagramLinkProps) {
  if (!isFilled(site.instagram)) {
    return null;
  }

  const ariaLabel = `${label}, ${site.instagramHandle}`;

  if (variant === "hero") {
    return (
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`inline-flex min-h-11 max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRingAccent} rounded-[8px]`}
      >
        <InstagramIcon className="size-5 shrink-0" />
        <span>{label}</span>
        <bdi dir="ltr" className="text-text-muted hover:text-text">
          {site.instagramHandle}
        </bdi>
      </a>
    );
  }

  if (variant === "contact") {
    return (
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[8px] border border-[#475467] px-4 text-sm text-[#D0D5DD] transition-colors hover:border-white hover:text-white ${focusRingLight}`}
      >
        <InstagramIcon className="size-5 shrink-0" />
        <span>{label}</span>
        <bdi dir="ltr">{site.instagramHandle}</bdi>
      </a>
    );
  }

  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-11 items-center gap-2 text-text-muted underline-offset-4 hover:text-text hover:underline ${focusRingAccent} rounded-[8px]`}
    >
      <InstagramIcon className="size-5 shrink-0" />
      <span>{label}</span>
      <bdi dir="ltr">{site.instagramHandle}</bdi>
    </a>
  );
}
