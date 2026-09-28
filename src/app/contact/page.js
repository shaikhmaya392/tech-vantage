import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with Tech Vantage Now. Call, email or send us a message and our team will get back to you as soon as we can.",
});

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: MapPin, label: "Office", value: site.address.full },
  { icon: Clock, label: "Live Chat", value: "Available on site" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's create the future"
        description="Have a project in mind? Fill in your details and we'll get back to you as soon as we can."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />

      <section className="section bg-white">
        <div className="container-tv grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="heading-3">Contact details</h2>
            <p className="mt-3 text-ink/60">Reach us through any channel below, or use the form and we&apos;ll respond fast.</p>
            <div className="mt-8 space-y-4">
              {details.map((d) => {
                const Cmp = d.icon;
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-cloud p-5 transition hover:border-brand/30">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Cmp className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-ink/40">{d.label}</div>
                      <div className="font-medium text-ink">{d.value}</div>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">{inner}</a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-tv">
          <div className="overflow-hidden rounded-[2rem] border border-ink/10">
            <iframe
              title="Tech Vantage Now office location"
              src="https://www.google.com/maps?q=60+Tower+Pl+Yonkers+NY+10703&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
