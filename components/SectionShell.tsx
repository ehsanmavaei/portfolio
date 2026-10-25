import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  "aria-labelledby": string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  "aria-labelledby": ariaLabelledby,
  children,
  className = "",
  innerClassName = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`w-full max-w-full min-w-0 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-[1120px] min-w-0 px-4 py-12 sm:px-6 sm:py-16 md:py-[72px] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
