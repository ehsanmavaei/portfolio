import { StructuredData } from "@/components/StructuredData";
import { AboutExperience } from "@/components/sections/AboutExperience";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { MavitoCaseStudy } from "@/components/sections/MavitoCaseStudy";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { TechStack } from "@/components/sections/TechStack";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PageContentProps } from "@/components/types";

export function PortfolioPage({ locale, showPhoto }: PageContentProps) {
  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} includeProfileImage={showPhoto} />
      <SiteHeader locale={locale} dict={dict} />
      <main id="top" className="min-w-0 w-full max-w-full">
        <Hero locale={locale} dict={dict} showPhoto={showPhoto} />
        <TechStack locale={locale} dict={dict} showPhoto={showPhoto} />
        <ServicesSection locale={locale} dict={dict} showPhoto={showPhoto} />
        <MavitoCaseStudy locale={locale} dict={dict} showPhoto={showPhoto} />
        <AboutExperience locale={locale} dict={dict} showPhoto={showPhoto} />
        <ContactSection locale={locale} dict={dict} showPhoto={showPhoto} />
      </main>
    </>
  );
}
