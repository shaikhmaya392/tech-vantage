import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  JsonLd,
} from "@/lib/seo";
import { services, getService } from "@/data/services";
import { getItemsByCategory } from "@/data/portfolio";

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
  const work = service.portfolioCategory
    ? getItemsByCategory(service.portfolioCategory).slice(0, 6)
    : [];

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          title: service.title,
          slug: service.slug,
          excerpt: service.intro,
        })}
      />

      <PageHero
        eyebrow={service.title}
        title={service.hero}
        description={service.intro}
        breadcrumbs={crumbs}
      />

      {/* Points */}
      <section className="section bg-black">
        <div className="container-tv">
          <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
            <Icon name={service.icon} className="h-8 w-8" />
          </div>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2">
            {service.points.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-3xl glass p-8">
                  <span className="font-heading text-3xl font-extrabold text-brand-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {p.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Real work for this service */}
      {work.length > 0 && (
        <section className="section bg-black">
          <div className="container-tv">
            <SectionHeading eyebrow="Our Portfolio" title={`${service.title} work`} />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {work.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={`${service.title} — ${item.title}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button href="/portfolio" variant="outline" withArrow>
                View full portfolio
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="section bg-black">
        <div className="container-tv">
          <SectionHeading eyebrow="Explore more" title="Other services" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
