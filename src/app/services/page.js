import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "Tech Vantage Now's digital services: logo design, website development, mobile apps, video animation, SEO and social media marketing.",
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
        eyebrow="Our Services"
        title="Full-service digital solutions"
        description="From brand identity to app development and growth marketing — one expert team, end to end."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="section bg-black">
        <div className="container-tv">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} index={i} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
