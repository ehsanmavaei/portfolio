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
      className={className}
    >
      <div
        className={`mx-auto max-w-[1120px] px-6 py-[72px] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
