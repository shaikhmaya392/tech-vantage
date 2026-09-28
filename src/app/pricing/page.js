import PageHero from "@/components/ui/PageHero";
import PricingTabs from "@/components/ui/PricingTabs";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  path: "/pricing",
  description:
    "Transparent Tech Vantage Now pricing across websites, logos, branding, mobile apps, video animation, SEO and social media — with no monthly or hidden fees.",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Our Pricing"
        title="Packages with no hidden fees"
        description="Choose a category and pick the package that fits. Every plan includes source files, ownership rights and a money-back guarantee."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <section className="section bg-white">
        <PricingTabs />
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}
