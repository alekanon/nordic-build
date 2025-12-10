import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ExpertiseSection />
      <ProjectShowcase />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
