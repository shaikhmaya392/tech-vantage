"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-tv flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src={site.logos.white}
            alt={site.name}
            width={170}
            height={44}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
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
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand-300"
                    : "text-white/70 hover:text-white"
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
                      className="absolute left-0 top-full w-64 rounded-2xl border border-white/10 bg-[#0a0a0a] p-2 shadow-card"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-brand/10 hover:text-brand-300"
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
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-brand-300"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <Link
            href="/get-a-quote"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black lg:hidden"
          >
            <ul className="container-tv flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium",
                      isActive(item.href)
                        ? "bg-brand/10 text-brand-300"
                        : "text-white/80"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 border-l border-white/10 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-4 py-2 text-sm text-white/60"
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
