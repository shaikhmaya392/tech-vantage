export default function LegalBody({ sections, updated }) {
  return (
    <section className="section bg-black">
      <div className="container-tv max-w-3xl">
        <p className="text-sm text-white/40">Last updated: {updated}</p>
        <div className="mt-8 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-white/60">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
