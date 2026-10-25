import { PortfolioPage } from "@/components/PortfolioPage";
import { ScrollToHash } from "@/components/ScrollToHash";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected projects by Ehsan Mavaei — web apps, dashboards, and developer tools.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <ScrollToHash id="projects" />
      <PortfolioPage />
    </>
  );
}
