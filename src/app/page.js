import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Tech Vantage Now is a US-based creative digital agency delivering premium logo design, website & app development, video animation, SEO and social media marketing. 8 years of expertise, 450+ projects delivered.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesSection />
      <WhyUs />
      <StatsSection />
      <PortfolioPreview />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
