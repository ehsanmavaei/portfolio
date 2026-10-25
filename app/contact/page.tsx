import { PortfolioPage } from "@/components/PortfolioPage";
import { ScrollToHash } from "@/components/ScrollToHash";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} — email, GitHub, and LinkedIn.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ScrollToHash id="contact" />
      <PortfolioPage />
    </>
  );
}
