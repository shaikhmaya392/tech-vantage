import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/site";

export default function ProcessSection() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container-tv">
        <SectionHeading
          eyebrow="How we work"
          title="A proven process, start to finish"
          description="No chaos, no surprises — just a clear, collaborative path from idea to impact."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-3xl border border-black/5 bg-white p-8 card-hover">
                <span className="font-heading text-5xl font-extrabold text-brand/15">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <span className="absolute right-6 top-8 hidden text-brand/30 lg:block">
                    →
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
