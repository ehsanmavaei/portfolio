"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
type LightboxImage = {
  src: string;
  alt: string;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type MavitoScreenshotsProps = {
  images: LightboxImage[];
  urlLabel: string;
  openLabel: string;
  closeLabel: string;
};

export function MavitoScreenshots({
  images,
  urlLabel,
  openLabel,
  closeLabel,
}: MavitoScreenshotsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const [hero, ...rest] = images;

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close]);

  const active = activeIndex === null ? null : images[activeIndex];

  const renderTrigger = (image: LightboxImage, index: number, large?: boolean) => (
    <button
      type="button"
      className={`group w-full max-w-full min-w-0 text-start ${focusRing} rounded-[16px]`}
      onClick={() => setActiveIndex(index)}
      aria-label={`${openLabel}: ${image.alt}`}
    >
      <ScreenshotFrame urlLabel={urlLabel}>
        <div
          className={`relative w-full max-w-full min-w-0 ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top transition-transform duration-200 motion-safe:group-hover:scale-[1.005]"
            sizes={
              large
                ? "(max-width: 1024px) 100vw, 1120px"
                : "(max-width: 1024px) 100vw, 540px"
            }
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
          />
        </div>
      </ScreenshotFrame>
    </button>
  );

  return (
    <>
      <div className="mt-10 min-w-0 w-full max-w-full space-y-6">
        {hero ? renderTrigger(hero, 0, true) : null}
        {rest.length > 0 ? (
          <ul className="grid min-w-0 w-full max-w-full gap-6 md:grid-cols-2">
            {rest.map((image, offset) => {
              const index = offset + 1;
              return (
                <li key={image.src}>{renderTrigger(image, index)}</li>
              );
            })}
          </ul>
        ) : null}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(16_24_40_/_0.72)] p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <div
            className="relative max-h-[min(90vh,100dvh)] w-full max-w-[calc(100vw-1rem)] overflow-auto rounded-[16px] bg-card-bg p-3 sm:max-w-5xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {active.alt}
            </p>
            <button
              type="button"
              onClick={close}
              className={`absolute end-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] border border-border bg-card-bg px-3 text-sm font-medium text-text ${focusRing}`}
            >
              {closeLabel}
            </button>
            <div className="relative mt-10 aspect-[16/10] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
