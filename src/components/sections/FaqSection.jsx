import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export default function FaqSection({ items = faqs.slice(0, 8) }) {
  return (
    <section className="section bg-white">
      <div className="container-tv grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions? We've got answers."
            description="Everything about our services, pricing, timelines and guarantees — straight from how we work."
            className="max-w-none"
          />
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
