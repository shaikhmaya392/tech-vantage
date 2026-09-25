import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function CtaSection({
  eyebrow = "To Seal The Deal",
  title = "Feeling overwhelmed? Let our consultant guide your way.",
  description = "Get jaw-dropping designs — ready to discuss your project? Fill in your details and we'll get back to you as soon as we can.",
}) {
  return (
    <section className="section bg-black">
      <div className="container-tv">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand/30 bg-gradient-to-br from-brand-900 via-black to-black px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 bg-radial-brand opacity-80" />
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 heading-2 text-balance text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/get-a-quote" size="lg" withArrow>
                  Let&apos;s Get Started
                </Button>
                <Button href={`tel:${site.phoneHref}`} variant="outline" size="lg">
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
