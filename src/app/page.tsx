import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.seo.defaultTitle,
  },
  description: siteConfig.seo.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <TrustSection />
      <AboutSection />
      <ProjectSection />
      <ProcessSection />
      <AudienceSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
