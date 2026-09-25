import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "./PortfolioGrid";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  path: "/portfolio",
  description:
    "Browse Tech Vantage Now's portfolio of branding, web, mobile app, video, SEO and social media projects — real work with real, measurable results.",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <PageHero
        eyebrow="Our work"
        title="Projects that speak for themselves"
        description="A selection of brands we've designed, built and grown. Filter by service to see what we can do for you."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]}
      />

      <section className="section bg-white">
        <PortfolioGrid />
      </section>

      <CtaSection />
    </>
  );
}
