import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Quote",
  path: "/get-a-quote",
  description:
    "Request a free, no-obligation quote from Tech Vantage Now. Tell us about your project and get a tailored proposal within one business day.",
});

const perks = [
  "Free, no-obligation consultation",
  "Tailored proposal & clear pricing",
  "Response within one business day",
  "Dedicated project point of contact",
];

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Get a Quote", path: "/get-a-quote" },
        ])}
      />
      <PageHero
        eyebrow="Get started"
        title="Request your free quote"
        description="Share a few details about your project and we'll craft a custom proposal — no strings attached."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Get a Quote", path: "/get-a-quote" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-tv grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="heading-3">What happens next?</h2>
            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/70">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-ink p-8 text-white">
              <p className="text-lg font-medium">
                &ldquo;Feeling overwhelmed? Let our consultants guide your
                way.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/50">
                We&apos;ll help you scope the right solution for your budget and
                goals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Reveal direction="left">
              <ContactForm withBudget />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
