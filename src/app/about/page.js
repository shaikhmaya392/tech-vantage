import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import StatsSection from "@/components/sections/StatsSection";
import Platforms from "@/components/sections/Platforms";
import Reviews from "@/components/sections/Reviews";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { differentiators, site } from "@/data/site";

export const metadata = buildMetadata({
  title: "About Us",
  path: "/about",
  description:
    "Tech Vantage Now is a US-based creative digital agency with 8 years of expertise — logo design, web & app development, video animation, SEO and social media. Revolutionize your brand story.",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About Us"
        title="Revolutionize your brand story"
        description="A design agency based in the US, offering premium level digital services — from logos and websites to apps, animation, SEO and social media."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />

      <section className="section bg-white">
        <div className="container-tv grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                <Image src="/assets/images/website.png" alt="Tech Vantage Now work" width={900} height={680} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand p-6 text-white shadow-glow sm:block">
                <div className="font-heading text-3xl font-extrabold">100+</div>
                <div className="text-sm text-white/85">pleased clients</div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Who we are" title="Your digital design & marketing powerhouse" className="max-w-none" />
            <div className="mt-6 space-y-4 text-ink/60">
              <p>
                Welcome to Tech Vantage Now — your digital design and marketing powerhouse with 8 years
                of industry expertise. From distinctive logo designs to seamless website development,
                impactful social media marketing, SEO strategies, engaging video animations and mobile
                apps, we&apos;re your comprehensive solution for all things digital.
              </p>
              <p>
                Our offer is kept to cater to all types of organizations, from startups to large-scale
                organizations. Feeling overwhelmed? Let our consultant guide your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section bg-cloud">
        <div className="container-tv">
          <SectionHeading eyebrow="Why choose us" title="What distinguishes Tech Vantage Now from the rest?" />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {differentiators.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border border-ink/5 bg-white p-8 shadow-soft card-hover">
                  <span className="font-heading text-4xl font-extrabold text-brand/20">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Platforms />
      <Reviews count={9} />
      <CtaSection />
    </>
  );
}
