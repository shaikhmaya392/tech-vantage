import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Search, PencilRuler, Rocket } from "lucide-react";

const steps = [
  {
    no: "01",
    icon: Search,
    title: "Discover & Plan",
    description:
      "We start by understanding your brand, goals and audience — then map a clear, results-driven plan before a single pixel is drawn.",
  },
  {
    no: "02",
    icon: PencilRuler,
    title: "Design & Develop",
    description:
      "Our experts craft custom designs and build fast, SEO-friendly experiences, sharing concepts within 48 hours and refining with your feedback.",
  },
  {
    no: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "We deliver full ownership of your assets, launch with care and keep optimizing so your brand keeps growing long after go-live.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
      <div className="container-tv relative">
        <SectionHeading
          eyebrow="How We Work"
          title="A simple process, powerful results"
          description="No guesswork, no surprises — just a proven three-step workflow that turns your idea into a brand people remember."
        />

        <StaggerGroup className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.no} className="relative">
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute left-[58%] top-10 hidden h-px w-[84%] border-t-2 border-dashed border-brand/25 md:block" />
              )}
              <div className="card relative h-full p-8 text-center">
                <span className="absolute right-6 top-5 font-heading text-5xl font-extrabold text-brand/10">
                  {step.no}
                </span>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <step.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
