import { Check, Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, faqSchema, JsonLd } from "@/lib/seo";
import { pricingPlans, pricingFaqs } from "@/data/pricing";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pricing",
  path: "/pricing",
  description:
    "Transparent, flexible pricing for Tech Vantage Now's digital services. Starter packages from $499 to fully custom enterprise engagements.",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd data={faqSchema(pricingFaqs)} />

      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Pick a starting point or build a fully custom package. No hidden fees — ever."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-tv">
          <StaggerGroup className="grid items-stretch gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8",
                    plan.featured
                      ? "border-brand bg-ink text-white shadow-glow lg:-translate-y-4"
                      : "border-black/5 bg-white card-hover"
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                      <Star className="h-3 w-3 fill-white" /> Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold">
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      plan.featured ? "text-white/60" : "text-ink/50"
                    )}
                  >
                    {plan.tagline}
                  </p>
                  <div className="mt-6 flex items-end gap-1">
                    {plan.price ? (
                      <>
                        <span className="font-heading text-4xl font-extrabold">
                          ${plan.price}
                        </span>
                        <span
                          className={cn(
                            "mb-1 text-sm",
                            plan.featured ? "text-white/50" : "text-ink/40"
                          )}
                        >
                          /{plan.period}
                        </span>
                      </>
                    ) : (
                      <span className="font-heading text-4xl font-extrabold">
                        Custom
                      </span>
                    )}
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            plan.featured ? "bg-brand" : "bg-brand/10"
                          )}
                        >
                          <Check
                            className={cn(
                              "h-3 w-3",
                              plan.featured ? "text-white" : "text-brand"
                            )}
                          />
                        </span>
                        <span
                          className={
                            plan.featured ? "text-white/80" : "text-ink/70"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="/get-a-quote"
                      variant={plan.featured ? "white" : "primary"}
                      className="w-full"
                      withArrow
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal>
            <p className="mt-10 text-center text-sm text-ink/50">
              Need something specific? Every project can be fully customized.{" "}
              <a href="/contact" className="font-semibold text-brand link-underline">
                Talk to our team
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container-tv max-w-3xl">
          <SectionHeading eyebrow="Pricing FAQ" title="Common questions" />
          <div className="mt-10">
            <Accordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
