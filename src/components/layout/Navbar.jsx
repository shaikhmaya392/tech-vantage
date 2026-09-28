"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="container-tv flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-brand-300" /> {site.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-300" /> {site.address.full}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Follow us</span>
            {site.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="opacity-80 transition hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.png} alt={s.name} className="h-4 w-4 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-ink/5 bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,38,64,0.4)]"
            : "border-transparent bg-white"
        )}
      >
        <nav className="container-tv flex h-[68px] items-center justify-between">
          <Link href="/" aria-label={site.name} className="flex items-center">
            <Image
              src={site.logos.color}
              alt={site.name}
              width={180}
              height={54}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setServicesOpen(true)}
                onMouseLeave={() => item.children && setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href)
                      ? "text-brand"
                      : "text-ink/70 hover:text-brand"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-64 overflow-hidden rounded-2xl border border-ink/5 bg-white p-2 shadow-card"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 text-sm text-ink/70 transition-colors hover:bg-brand/5 hover:text-brand"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink/70 transition hover:text-brand"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-ink/5 bg-white lg:hidden"
          >
            <ul className="container-tv flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-semibold",
                      isActive(item.href) ? "bg-brand/5 text-brand" : "text-ink/80"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 border-l border-ink/10 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-4 py-2 text-sm text-ink/60"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-2 px-4">
                <Link
                  href="/get-a-quote"
                  className="block w-full rounded-full bg-brand px-6 py-3 text-center font-semibold text-white"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
