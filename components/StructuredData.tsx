import type { Locale } from "@/config/site";
import {
  buildStructuredDataGraph,
  serializeJsonLd,
} from "@/lib/structured-data";

type StructuredDataProps = {
  locale: Locale;
  includeProfileImage: boolean;
};

export function StructuredData({
  locale,
  includeProfileImage,
}: StructuredDataProps) {
  const graph = buildStructuredDataGraph(locale, includeProfileImage);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
