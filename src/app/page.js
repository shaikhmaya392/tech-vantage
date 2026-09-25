import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyUs from "@/components/sections/WhyUs";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Tech Vantage Now — a US-based creative digital agency. Custom Website, Logo, Animation & More. Premium logo design, website & app development, video animation, SEO and social media marketing.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <PortfolioPreview />
      <WhyUs />
      <CtaSection />
    </>
  );
}
