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
    <section className="border-y border-white/10 bg-black py-8">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {row.map((w, i) => (
            <span key={`${w}-${i}`} className="flex items-center gap-10">
              <span className="text-stroke font-heading text-3xl font-extrabold uppercase sm:text-4xl">
                {w}
              </span>
              <span className="h-2 w-2 rotate-45 bg-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
