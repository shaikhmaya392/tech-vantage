import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
      <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="container-tv relative">
        {breadcrumbs.length > 0 && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/50"
            >
              {breadcrumbs.map((b, i) => (
                <span key={b.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.path} className="hover:text-brand-300">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-white/80">{b.name}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-5 heading-1 max-w-4xl text-balance text-white">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-white/60">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
