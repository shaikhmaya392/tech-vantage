import { clients } from "@/data/testimonials";

export default function Marquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container-tv mb-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/40">
          Trusted by ambitious brands
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {row.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-heading text-2xl font-bold text-ink/25 transition-colors hover:text-brand"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
