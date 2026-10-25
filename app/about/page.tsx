import { PortfolioPage } from "@/components/PortfolioPage";
import { ScrollToHash } from "@/components/ScrollToHash";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description: `About ${siteConfig.name} — background, interests, and how I work.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <ScrollToHash id="experience" />
      <PortfolioPage />
    </>
  );
}
