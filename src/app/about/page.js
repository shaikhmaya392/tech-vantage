import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { differentiators, site } from "@/data/site";

export const metadata = buildMetadata({
  title: "About Us",
  path: "/about",
  description:
    "Meet Tech Vantage Now — a US-based creative digital agency with 8 years of experience helping startups and enterprises design, build and grow remarkable brands.",
});

const values = [
  { title: "Client-first", text: "Your goals lead every decision we make." },
  { title: "Craft over shortcuts", text: "We sweat the details others skip." },
  { title: "Transparent always", text: "Clear scope, clear pricing, no surprises." },
  { title: "Results that last", text: "We build for long-term growth, not vanity." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About us"
        title="A digital powerhouse built on craft & results"
        description={`For ${site.experienceYears} years, ${site.name} has partnered with ambitious brands to turn bold ideas into digital products that look incredible and perform even better.`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container-tv grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/tvteam/900/700"
                  alt="The Tech Vantage Now team collaborating"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand p-6 text-white shadow-glow">
                <div className="font-heading text-3xl font-extrabold">
                  {site.experienceYears}+
                </div>
                <div className="text-sm text-white/80">years of expertise</div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Design that means business"
              className="max-w-none"
            />
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                {site.name} started with a simple belief: great design and smart
                marketing shouldn&apos;t be reserved for big budgets. Since{" "}
                {site.founded}, we&apos;ve grown into a full-service agency
                trusted by startups and enterprises alike.
              </p>
              <p>
                From a single logo to a complete web and mobile product, our team
                of designers, developers and strategists brings everything under
                one roof — so your brand stays consistent and your project stays
                on track.
              </p>
              <p>
                We measure our success by yours: more traffic, more customers,
                more growth. That&apos;s the vantage we bring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Values */}
      <section className="section bg-brand-50/40">
        <div className="container-tv">
          <SectionHeading
            eyebrow="What drives us"
            title="Values we live by"
            description="The principles behind every project we take on."
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-black/5 bg-white p-8 card-hover">
                  <div className="font-heading text-lg font-semibold text-brand">
                    {v.title}
                  </div>
                  <p className="mt-2 text-sm text-ink/60">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section bg-white">
        <div className="container-tv">
          <SectionHeading
            eyebrow="Why choose us"
            title="What sets Tech Vantage apart"
          />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border border-black/5 bg-white p-8 card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
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
