"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  // A curated mix of real work for the homepage
  const featured = [
    "web-1",
    "logo-1",
    "smm-01",
    "web-2",
    "brand-0",
    "nft-01",
    "logo-3",
    "web-5",
  ]
    .map((id) => portfolioItems.find((i) => i.id === id))
    .filter(Boolean);

  return (
    <section className="section relative overflow-hidden bg-black">
      <div className="container-tv relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Portfolio"
            title="Work we're proud of"
            description="A glimpse of the logos, websites, branding and animation we've crafted for our clients."
            className="max-w-2xl"
          />
          <Link
            href="/portfolio"
            className="btn-outline shrink-0"
          >
            View All Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-4 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
