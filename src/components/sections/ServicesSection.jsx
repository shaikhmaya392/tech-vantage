import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container-tv">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your brand needs, under one roof"
          description="Six core services that take you from a first sketch to a scaling digital business — all with one dedicated team."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="dark" withArrow>
            Explore all services
          </Button>
        </div>
      </div>
    </section>
  );
}
