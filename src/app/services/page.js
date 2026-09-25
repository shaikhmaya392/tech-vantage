import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore Tech Vantage Now's full range of digital services: logo design, website development, mobile app development, video animation, SEO and social media marketing.",
  keywords: services.map((s) => s.title),
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our services"
        title="Full-service digital solutions that scale with you"
        description="From brand identity to app development and growth marketing — one expert team, end to end."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-tv">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
