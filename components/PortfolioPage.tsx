import { AboutExperience } from "@/components/sections/AboutExperience";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { TechStack } from "@/components/sections/TechStack";

export function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <AboutExperience />
        <ContactSection />
      </main>
    </>
  );
}
