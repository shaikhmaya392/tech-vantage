import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { differentiators } from "@/data/site";

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-hero-grid opacity-70" />
      <div className="container-tv relative">
        <SectionHeading
          light
          eyebrow="Why Tech Vantage"
          title="Premium quality, without the guesswork"
          description="We combine creative firepower with disciplined delivery — so you get work that looks incredible and actually ships on time."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand/50 hover:bg-white/[0.07]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
