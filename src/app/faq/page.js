import PageHero from "@/components/ui/PageHero";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, faqSchema, JsonLd } from "@/lib/seo";
import { faqs } from "@/data/faq";

export const metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
  description:
    "Frequently asked questions about Tech Vantage Now's services, pricing, timelines, guarantees and how to get started.",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about working with Tech Vantage Now."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]}
      />
      <section className="section bg-white">
        <div className="container-tv max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </section>
      <CtaSection title="Still have questions?" description="Our team is happy to help. Reach out and we'll get you the answers you need." />
    </>
  );
}
