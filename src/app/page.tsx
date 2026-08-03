import { Hero } from "@/components/hero/Hero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="bg-[color:var(--brand-background)]">
      <Hero />
      <ProgramsSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
