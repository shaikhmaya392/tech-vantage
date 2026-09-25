import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-60" />
      <div className="container-tv relative">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-white/10 py-16 md:grid-cols-2 md:items-center">
          <h2 className="heading-2 text-balance">
            Ready to build something{" "}
            <span className="gradient-text">remarkable?</span>
          </h2>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-md text-white/60 md:text-right">
              Let&apos;s turn your vision into a digital product that looks
              incredible and drives real results.
            </p>
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
            >
              Start your project
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                TV
              </span>
              <span className="font-heading text-lg font-bold">
                Tech Vantage<span className="text-brand">.</span>
              </span>
            </Link>
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
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-brand" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-brand"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                {site.address.full}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Crafted with care · Design & Development by {site.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
