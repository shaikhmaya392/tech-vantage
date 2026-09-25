import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import Icon from "@/components/ui/Icon";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with Tech Vantage Now. Call, email or send us a message and our team will respond within one business day.",
});

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: MapPin, label: "Office", value: site.address.full },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm ET" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Have a project in mind or just want to say hi? We'd love to hear from you."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-tv grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="heading-3">Get in touch</h2>
            <p className="mt-3 text-ink/60">
              Reach us through any of the channels below, or fill out the form
              and we&apos;ll get back to you fast.
            </p>

            <div className="mt-8 space-y-5">
              {details.map((d) => {
                const Cmp = d.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-brand-50/40 p-5 transition-colors hover:border-brand/30">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Cmp className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-ink/40">
                        {d.label}
                      </div>
                      <div className="font-medium text-ink">{d.value}</div>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="mb-3 text-sm font-medium text-ink/60">
                Follow us
              </div>
              <div className="flex gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink/60 transition-all hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container-tv">
          <div className="overflow-hidden rounded-[2rem] border border-black/5">
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
