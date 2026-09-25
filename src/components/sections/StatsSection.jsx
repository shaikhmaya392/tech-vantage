import Counter from "@/components/ui/Counter";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { stats } from "@/data/site";

export default function StatsSection() {
  return (
    <section className="relative bg-brand-gradient py-16 text-white">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="container-tv relative">
        <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-heading text-4xl font-extrabold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/80">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
