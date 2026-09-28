import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "./PortfolioGrid";
import Reviews from "@/components/sections/Reviews";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  path: "/portfolio",
  description:
    "Browse Tech Vantage Now's portfolio — real logo, website, branding, animation, social media and NFT design work.",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])} />
      <PageHero
        eyebrow="Our Portfolio"
        title="Designs that speak for themselves"
        description="A selection of our real work — filter by category and click any item to view it larger."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]}
      />
      <section className="section bg-white">
        <PortfolioGrid />
      </section>
      <Reviews count={9} />
      <CtaSection />
    </>
  );
}
