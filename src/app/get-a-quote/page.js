import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Quote",
  path: "/get-a-quote",
  description:
    "Request a free quote from Tech Vantage Now. Get jaw-dropping designs — fill in your details and we'll get back to you as soon as we can.",
});

const perks = [
  "Free, no-obligation consultation",
  "Get jaw-dropping designs at up to 70% off",
  "100% ownership rights & money-back guarantee",
  "Dedicated project manager",
];

export default function QuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }])} />
      <PageHero
        eyebrow="Fill Out Your Details"
        title="Request your free quote"
        description="Ready to discuss your project? Fill in your relevant details. We will get back to you as soon as we can."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }]}
      />
      <section className="section bg-white">
        <div className="container-tv grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="heading-3">Why work with us</h2>
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
            <div className="mt-10 rounded-3xl border border-ink/5 bg-cloud p-8">
              <p className="text-lg font-medium text-ink">&ldquo;Feeling overwhelmed? Let our consultant guide your way.&rdquo;</p>
              <p className="mt-3 text-sm text-ink/50">We&apos;ll help you scope the right solution for your budget and goals.</p>
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
