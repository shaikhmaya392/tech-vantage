import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function CtaSection({
  eyebrow = "To Seal The Deal",
  title = "Feeling overwhelmed? Let our consultant guide your way.",
  description = "Get jaw-dropping designs at up to 70% off. Fill in your details and we'll get back to you as soon as we can.",
}) {
  return (
    <section className="section bg-cloud">
      <div className="container-tv">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 heading-2 text-balance text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/get-a-quote" variant="primary" size="lg" withArrow>
                  Let&apos;s Get Started
                </Button>
                <Button
                  href={`tel:${site.phoneHref}`}
                  variant="white"
                  size="lg"
                >
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
