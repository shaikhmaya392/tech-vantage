import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  JsonLd,
} from "@/lib/seo";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    path: `/services/${service.slug}`,
    description: service.excerpt,
    keywords: [service.title, `${service.title} agency`, `${service.title} services`],
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        eyebrow="Service"
        title={service.hero}
        description={service.excerpt}
        breadcrumbs={crumbs}
      />

      {/* Overview + features */}
      <section className="section bg-white">
        <div className="container-tv grid gap-14 lg:grid-cols-2">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
              <Icon name={service.icon} className="h-8 w-8" />
            </div>
            <SectionHeading
              align="left"
              eyebrow={service.title}
              title={`Why our ${service.title.toLowerCase()} works`}
              description={service.excerpt}
              className="mt-6 max-w-none"
            />
            <div className="mt-8">
              <Button href="/get-a-quote" withArrow>
                Get a free quote
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink">
              What&apos;s included
            </h3>
            <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <StaggerItem key={f}>
                  <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-brand-50/50 px-4 py-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-ink/80">{f}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section bg-ink text-white">
        <div className="container-tv">
          <SectionHeading
            light
            eyebrow="Deliverables"
            title="Exactly what you'll receive"
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((d, i) => (
              <StaggerItem key={d}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="font-heading text-3xl font-extrabold text-brand-300">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-sm text-white/80">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-50/40">
        <div className="container-tv max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${service.title} — questions`} />
          <div className="mt-10">
            <Accordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white">
        <div className="container-tv">
          <SectionHeading eyebrow="Explore more" title="Other services" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
