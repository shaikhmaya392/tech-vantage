import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Logo, website, animation, SEO & social — all in-house",
  "Startup to large-scale organizations",
  "100% ownership rights & money-back guarantee",
];

export default function AboutPreview() {
  return (
    <section className="section relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-radial-brand opacity-50" />
      <div className="container-tv relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
              <Image
                src="/assets/images/website.png"
                alt="Tech Vantage Now digital work"
                width={900}
                height={700}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand p-6 text-white shadow-glow">
              <div className="font-heading text-3xl font-extrabold">100+</div>
              <div className="text-sm text-white/80">pleased clients</div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Revolutionize your brand story"
            description="Tech Vantage Now offers logo design, website & mobile app development, video animation, SEO and social media marketing — premium digital services crafted to grow your brand."
            className="max-w-none"
          />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-white/70">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/about" className="group btn-primary">
              More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
