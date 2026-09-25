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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's create the future"
        description="Have a project in mind? Fill in your details and we'll get back to you as soon as we can."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="section bg-black">
        <div className="container-tv grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="heading-3 text-white">Contact details</h2>
            <p className="mt-3 text-white/60">
              Reach us through any channel below, or use the form and we&apos;ll
              respond fast.
            </p>

            <div className="mt-8 space-y-4">
              {details.map((d) => {
                const Cmp = d.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl glass p-5 transition-colors hover:border-brand/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Cmp className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/40">
                        {d.label}
                      </div>
                      <div className="font-medium text-white">{d.value}</div>
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
              <div className="mb-3 text-sm font-medium text-white/60">
                Let&apos;s connect on social media
              </div>
              <div className="flex gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Reveal direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black pb-20">
        <div className="container-tv">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="Tech Vantage Now office location"
              src="https://www.google.com/maps?q=60+Tower+Pl+Yonkers+NY+10703&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 grayscale invert-[0.9]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
