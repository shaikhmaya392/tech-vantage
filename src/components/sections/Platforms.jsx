import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

// Chips positioned around the hub (percentages), matching an orbit layout.
const chips = [
  { label: "Google", top: "6%", left: "50%", img: null },
  { label: "Facebook", top: "17%", left: "78%", img: "/assets/images/facebook.png" },
  { label: "Instagram", top: "44%", left: "92%", img: "/assets/images/instagram.png" },
  { label: "TikTok", top: "72%", left: "84%", img: null },
  { label: "LinkedIn", top: "90%", left: "63%", img: "/assets/images/linkedin.png" },
  { label: "YouTube", top: "90%", left: "37%", img: null },
  { label: "Shopify", top: "72%", left: "16%", img: null },
  { label: "WordPress", top: "44%", left: "8%", img: null },
  { label: "Bing", top: "17%", left: "22%", img: null },
];

export default function Platforms() {
  return (
    <section className="section bg-white">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Platforms"
          title="Plugged into every platform your customers use"
          description="One connected team across the platforms where your brand needs to show up — design, build and grow, all wired back to Tech Vantage Now."
        />

        <div className="relative mx-auto mt-16 h-[420px] max-w-3xl sm:h-[520px]">
          {/* Rings */}
          <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10" />
          <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 animate-spinslow rounded-full border border-dashed border-ink/10" />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-2xl" />

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-ink/5 bg-white shadow-card sm:h-32 sm:w-32">
            <Image src={site.logos.color} alt={site.name} width={110} height={44} className="h-9 w-auto sm:h-10" />
          </div>

          {/* Chips */}
          {chips.map((c) => (
            <div
              key={c.label}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ top: c.top, left: c.left }}
            >
              <div className="flex items-center gap-2 rounded-full border border-ink/8 bg-white px-4 py-2 shadow-soft">
                {c.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.img} alt={c.label} className="h-5 w-5 object-contain" />
                ) : (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-[10px] font-bold text-brand">
                    {c.label.charAt(0)}
                  </span>
                )}
                <span className="text-sm font-semibold text-ink">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
