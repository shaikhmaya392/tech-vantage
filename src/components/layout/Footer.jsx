import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-radial-brand opacity-60" />
      <div className="container-tv relative">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-white/10 py-16 md:grid-cols-2 md:items-center">
          <h2 className="heading-2 text-balance">
            Let&apos;s Shape the <span className="gradient-text">Future</span>{" "}
            Together
          </h2>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-md text-white/60 md:text-right">
              Feeling overwhelmed? Let our consultant guide your way. Tell us
              about your project and we&apos;ll get back to you.
            </p>
            <Link href="/get-a-quote" className="group btn-primary">
              Let&apos;s Get Started
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src={site.logos.white}
              alt={site.name}
              width={180}
              height={46}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/50">
              {site.description}
            </p>
            <div className="flex gap-3 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-brand-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-brand-300" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-brand-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-brand-300" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                {site.address.full}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
          © {site.copyrightYear} {site.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
