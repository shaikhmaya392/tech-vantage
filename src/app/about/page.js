import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { differentiators, site } from "@/data/site";

export const metadata = buildMetadata({
  title: "About Us",
  path: "/about",
  description:
    "Tech Vantage Now is a US-based creative digital agency offering premium digital services — logo design, web & app development, video animation, SEO and social media. Revolutionize your brand story.",
});

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
        eyebrow="About Us"
        title="Revolutionize your brand story"
        description="Tech Vantage Now is a design agency based in the US, offering premium level digital services — from logos and websites to apps, animation, SEO and social media."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="section bg-black">
        <div className="container-tv grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
                <Image
                  src="/assets/images/website.png"
                  alt="Tech Vantage Now creative work"
                  width={900}
                  height={700}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand p-6 text-white shadow-glow">
                <div className="font-heading text-3xl font-extrabold">100+</div>
                <div className="text-sm text-white/80">pleased clients</div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Your digital design & marketing powerhouse"
              className="max-w-none"
            />
            <div className="mt-6 space-y-4 text-white/60">
              <p>
                Tech Vantage Now brings logo design, website development, social
                media marketing, SEO strategies, video animations and mobile app
                development together under one roof — so your brand stays
                consistent and your project stays on track.
              </p>
              <p>
                Our offer is kept to cater to all types of organizations, from
                startups to large-scale organizations. Whatever stage you&apos;re
                at, we scale our services to fit.
              </p>
              <p>
                Feeling overwhelmed? Let our consultant guide your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section bg-black">
        <div className="container-tv">
          <SectionHeading
            eyebrow="Why choose us"
            title="What distinguishes Tech Vantage Now from the rest?"
          />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl glass p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
