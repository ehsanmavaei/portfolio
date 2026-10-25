import type { ReactNode } from "react";

type ScreenshotFrameProps = {
  urlLabel: string;
  children: ReactNode;
  className?: string;
};

export function ScreenshotFrame({
  urlLabel,
  children,
  className = "",
}: ScreenshotFrameProps) {
  return (
    <div
      className={`min-w-0 w-full max-w-full overflow-hidden rounded-[16px] border border-border bg-card-bg ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-tag-bg px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#F97066]" />
          <span className="size-3 rounded-full bg-[#FDB022]" />
          <span className="size-3 rounded-full bg-[#32D583]" />
        </span>
        <p
          className="min-w-0 flex-1 truncate rounded-[8px] bg-card-bg px-3 py-1 text-center font-mono text-xs text-text-muted"
          dir="ltr"
        >
          {urlLabel}
        </p>
      </div>
      <div className="bg-tag-bg">{children}</div>
    </div>
  );
}
