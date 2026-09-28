"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, reviewStats } from "@/data/testimonials";

export default function Reviews({ heading = true, count }) {
  const list = count ? testimonials.slice(0, count) : testimonials;

  return (
    <section className="section bg-cloud">
      <div className="container-tv">
        {heading && (
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionHeading
              eyebrow="Client Reviews"
              title="What they're saying about us"
            />
            <a
              href={reviewStats.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-2 text-sm font-semibold text-ink shadow-soft"
            >
              <span className="flex text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand" />
                ))}
              </span>
              {reviewStats.trustpilot.score}/5 · {reviewStats.trustpilot.count} Trustpilot reviews
            </a>
          </div>
        )}

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {list.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex text-brand">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand" />
                      ))}
                    </span>
                    <Quote className="h-7 w-7 text-brand/20" />
                  </div>
                  <p className="mt-4 font-heading text-base font-semibold text-ink">{t.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 line-clamp-6">
                    {t.text}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-heading text-sm font-bold text-brand">
                      {t.name.trim().charAt(0)}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{t.name}</div>
                      <div className="text-xs text-ink/40">Verified · Trustpilot</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #0f66b8;
          opacity: 0.25;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 22px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
