import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import PricingTabs from "@/components/ui/PricingTabs";
import Reviews from "@/components/sections/Reviews";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, serviceSchema, JsonLd } from "@/lib/seo";
import { services, getService } from "@/data/services";
import { getItemsByCategory } from "@/data/portfolio";
import { pricingCategories } from "@/data/pricing";

const pricingKey = {
  "logo-design": "logo",
  "website-development": "website",
  "mobile-app-development": "mobile",
  "video-animation": "video",
  seo: "seo",
  "social-media-marketing": "smm-management",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    path: `/services/${service.slug}`,
    description: service.intro,
    keywords: [service.title, `${service.title} agency`, `${service.title} services`],
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const work = service.portfolioCategory ? getItemsByCategory(service.portfolioCategory).slice(0, 6) : [];
  const pKey = pricingKey[service.slug];
  const hasPricing = pKey && pricingCategories.some((c) => c.key === pKey);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema({ title: service.title, slug: service.slug, excerpt: service.intro })} />

      <PageHero eyebrow={service.title} title={service.hero} description={service.intro} breadcrumbs={crumbs} />

      {/* Overview with real image */}
      <section className="section bg-white">
        <div className="container-tv grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <Image src={service.image} alt={service.title} width={900} height={640} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="What you get" title={`Why our ${service.title.toLowerCase()} works`} className="max-w-none" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-ink/5 bg-cloud p-5">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand" />
                    <h3 className="font-heading text-base font-semibold text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/get-a-quote" withArrow>Get a free quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real work */}
      {work.length > 0 && (
        <section className="section bg-cloud">
          <div className="container-tv">
            <SectionHeading eyebrow="Our Portfolio" title={`${service.title} work`} />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {work.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-soft">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {item.type === "video" ? (
                      <video src={item.src} muted loop autoPlay playsInline className="h-full w-full object-cover" />
                    ) : (
                      <Image src={item.src} alt={`${service.title} — ${item.title}`} fill sizes="(max-width:640px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button href="/portfolio" variant="outline" withArrow>View full portfolio</Button>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {hasPricing && (
        <section className="section bg-white">
          <div className="container-tv mb-4">
            <SectionHeading eyebrow="Pricing" title={`${service.title} packages`} description="No monthly or hidden fees. Every package includes ownership rights and a money-back guarantee." />
          </div>
          <PricingTabs only={[pKey]} />
        </section>
      )}

      <Reviews count={6} />

      {/* Related */}
      <section className="section bg-cloud">
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
