export default function LegalBody({ intro, sections, updated }) {
  return (
    <section className="section bg-white">
      <div className="container-tv max-w-3xl">
        {updated && <p className="text-sm text-ink/40">Last updated: {updated}</p>}
        {intro && <p className="mt-4 text-ink/70">{intro}</p>}
        <div className="mt-8 space-y-9">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{s.heading}</h2>
              {s.body?.map((p, i) => (
                <p key={i} className="mt-3 text-ink/65">{p}</p>
              ))}
              {s.list && (
                <ul className="mt-3 space-y-2">
                  {s.list.map((li, i) => (
                    <li key={i} className="flex gap-2 text-ink/65">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p, i) => (
                <p key={i} className="mt-3 text-ink/65">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
