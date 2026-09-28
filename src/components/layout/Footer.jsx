import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="container-tv relative">
        {/* CTA banner */}
        <div className="relative -mb-2 grid gap-8 overflow-hidden rounded-[2rem] bg-brand-gradient px-8 py-12 shadow-glow md:grid-cols-2 md:items-center md:px-14"
          style={{ marginTop: "-3.5rem" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
          <h2 className="relative heading-2 text-white">
            Looking for a professional digital partner?
          </h2>
          <div className="relative flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-md text-white/85 md:text-right">
              Feeling overwhelmed? Let our consultant guide your way. Get jaw-dropping
              designs at up to 70% off.
            </p>
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition hover:bg-white/90"
            >
              Get Started Free
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 pb-14 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src={site.logos.white} alt={site.name} width={190} height={48} className="h-10 w-auto" />
            <p className="text-sm leading-relaxed text-white/55">{site.description}</p>
            <div className="flex gap-3 pt-1">
              {site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.png} alt={s.name} className="h-4 w-4 object-contain" />
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
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/60 transition hover:text-brand-300">
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
                { label: "Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition hover:text-brand-300">
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
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-sm text-white/60 transition hover:text-brand-300">
                  <Mail className="mt-0.5 h-4 w-4 text-brand-300" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="flex items-start gap-3 text-sm text-white/60 transition hover:text-brand-300">
                  <Phone className="mt-0.5 h-4 w-4 text-brand-300" /> {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" /> {site.address.full}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row">
          <p>© {site.copyrightYear} {site.name}. All Rights Reserved.</p>
          <p>Custom Website, Logo, Animation &amp; More.</p>
        </div>
      </div>
    </footer>
  );
}
