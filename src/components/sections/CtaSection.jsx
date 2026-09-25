import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function CtaSection({
  title = "Feeling overwhelmed? Let our consultants guide your way.",
  description = "Book a free, no-pressure consultation. We'll listen to your goals and map out exactly how to get there.",
}) {
  return (
    <section className="section bg-white">
      <div className="container-tv">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-16 text-center text-white sm:px-16">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-ink/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="heading-2 text-balance">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-white/85">{description}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/get-a-quote" variant="white" size="lg" withArrow>
                  Get a free quote
                </Button>
                <Button
                  href={`tel:${site.phoneHref}`}
                  variant="dark"
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
