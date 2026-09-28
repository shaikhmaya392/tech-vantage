import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Platforms from "@/components/sections/Platforms";
import Reviews from "@/components/sections/Reviews";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, faqSchema, JsonLd } from "@/lib/seo";
import { faqs } from "@/data/faq";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Tech Vantage Now — a US-based creative digital agency. Custom Website, Logo, Animation & More. Premium logo design, website & app development, video animation, SEO and social media marketing.",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 8))} />
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <PortfolioPreview />
      <Platforms />
      <Reviews count={9} />
      <FaqSection />
      <CtaSection />
    </>
  );
}
