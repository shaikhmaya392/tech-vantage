const words = [
  "Logo Design",
  "Website Development",
  "Video Animation",
  "Mobile Apps",
  "SEO",
  "Social Media",
  "Branding",
  "NFT Design",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="border-y border-ink/5 bg-cloud py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {row.map((w, i) => (
            <span key={`${w}-${i}`} className="flex items-center gap-8">
              <span className="font-heading text-2xl font-bold text-ink/70 sm:text-3xl">
                {w}
              </span>
              <span className="h-2.5 w-2.5 rotate-45 bg-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
