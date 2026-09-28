import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { differentiators } from "@/data/site";

export default function AboutPreview() {
  return (
    <section className="section bg-cloud">
      <div className="container-tv grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/assets/images/website.png"
                alt="Tech Vantage Now digital work"
                width={900}
                height={680}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand p-6 text-white shadow-glow sm:block">
              <div className="font-heading text-3xl font-extrabold">100+</div>
              <div className="text-sm text-white/85">pleased clients</div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Revolutionize your brand story"
            description="Tech Vantage Now is your digital design and marketing powerhouse with 8 years of industry expertise — from logos and websites to apps, animation, SEO and social."
            className="max-w-none"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {differentiators.map((d) => (
              <li key={d.title} className="rounded-2xl border border-ink/5 bg-white p-4 shadow-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </span>
                <p className="mt-3 font-heading text-sm font-semibold text-ink">{d.title}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/about" className="btn-primary group">
              More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
