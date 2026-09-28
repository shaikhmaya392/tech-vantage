import { Star } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { reviewStats } from "@/data/testimonials";

const stats = [
  { value: 100, suffix: "+", label: "Pleased clients" },
  { value: 6, suffix: "", label: "Core services" },
  { value: 100, suffix: "%", label: "Ownership & money-back" },
  { value: 48, suffix: "h", label: "Initial concepts" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
      <div className="container-tv relative">
        <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StaggerItem className="text-center">
            <div className="flex items-center justify-center gap-1 font-heading text-4xl font-extrabold sm:text-5xl">
              {reviewStats.trustpilot.score}
              <Star className="h-7 w-7 fill-brand-300 text-brand-300" />
            </div>
            <p className="mt-2 text-sm text-white/70">Trustpilot rating</p>
          </StaggerItem>
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-heading text-4xl font-extrabold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
