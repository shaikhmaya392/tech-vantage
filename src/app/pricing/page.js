import { Check, Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pricing",
  path: "/pricing",
  description:
    "Tech Vantage Now website pricing — Startup ($799), Professional ($1199), E-Commerce ($1799) and Platinum ($3999). No monthly or hidden fees.",
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

      <PageHero
        eyebrow="Our Pricing"
        title="Website packages with no hidden fees"
        description="Transparent, all-inclusive website pricing. Every package includes source files, ownership rights and a money-back guarantee."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />

      <section className="section bg-black">
        <div className="container-tv">
          <StaggerGroup className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-7",
                    plan.featured
                      ? "border-brand bg-gradient-to-b from-brand-900/60 to-black shadow-glow"
                      : "border-white/10 bg-white/[0.03] card-hover"
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                      <Star className="h-3 w-3 fill-white" /> Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-heading text-4xl font-extrabold text-white">
                      ${plan.price}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                        <span className="text-white/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.note && (
                    <p className="mt-4 text-xs text-white/40">{plan.note}</p>
                  )}

                  <div className="mt-6">
                    <Button
                      href="/get-a-quote"
                      variant={plan.featured ? "primary" : "outline"}
                      className="w-full"
                      withArrow
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal>
            <p className="mt-10 text-center text-sm text-white/50">
              Need a logo, animation, SEO or social package instead?{" "}
              <a href="/contact" className="font-semibold text-brand-300 hover:underline">
                Talk to our team
              </a>{" "}
              for a custom quote.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
