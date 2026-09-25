import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="section relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-tv relative">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your brand needs, under one roof"
          description="From a first sketch to a scaling digital business — one dedicated team across six core services."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline" withArrow>
            Explore all services
          </Button>
        </div>
      </div>
    </section>
  );
}
