import { Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { testimonials, reviewStats } from "@/data/testimonials";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Reviews",
  path: "/reviews",
  description:
    "Read real Tech Vantage Now client reviews from Trustpilot — rated 4.8/5 across 53 reviews for website design, SEO and digital marketing.",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])} />
      <PageHero
        eyebrow="Client Reviews"
        title="Rated 4.8/5 by our clients"
        description={`Real, verified reviews from Trustpilot — ${reviewStats.trustpilot.count} reviews and counting.`}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]}
      />

      <section className="section bg-white">
        <div className="container-tv">
          <div className="mb-10 flex justify-center">
            <a
              href={reviewStats.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cloud px-6 py-3 text-sm font-semibold text-ink"
            >
              <span className="flex text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand" />
                ))}
              </span>
              {reviewStats.trustpilot.score}/5 · {reviewStats.trustpilot.count} Trustpilot reviews
            </a>
          </div>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-soft">
                  <div className="flex text-brand">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand" />
                    ))}
                  </div>
                  <p className="mt-3 font-heading text-base font-semibold text-ink">{t.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{t.text}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-heading text-sm font-bold text-brand">
                      {t.name.trim().charAt(0)}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{t.name}</div>
                      <div className="text-xs text-ink/40">{formatDate(t.date)} · Trustpilot</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
