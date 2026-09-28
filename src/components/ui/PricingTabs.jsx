"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { pricingCategories } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingTabs({ only }) {
  const cats = only
    ? pricingCategories.filter((c) => only.includes(c.key))
    : pricingCategories;
  const [active, setActive] = useState(cats[0]?.key);
  const current = cats.find((c) => c.key === active) || cats[0];
  const featuredIndex = current.plans.length > 1 ? 1 : 0;

  return (
    <div className="container-tv">
      {cats.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                active === c.key
                  ? "bg-brand text-white shadow-glow"
                  : "border border-ink/10 text-ink/60 hover:border-brand hover:text-brand"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={cn(
          "mt-12 grid items-stretch gap-6",
          current.plans.length >= 4
            ? "md:grid-cols-2 xl:grid-cols-4"
            : current.plans.length === 3
            ? "md:grid-cols-3"
            : "sm:grid-cols-2"
        )}
      >
        {current.plans.map((plan, i) => {
          const featured = i === featuredIndex;
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-7",
                featured
                  ? "border-brand bg-ink text-white shadow-glow"
                  : "border-ink/8 bg-white shadow-soft card-hover"
              )}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" /> Popular
                </span>
              )}
              <h3 className={cn("font-heading text-lg font-bold", featured ? "text-white" : "text-ink")}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-2">
                <span className={cn("font-heading text-4xl font-extrabold", featured ? "text-white" : "text-ink")}>
                  ${plan.price}
                </span>
                {plan.oldPrice && (
                  <span className={cn("mb-1 text-sm line-through", featured ? "text-white/40" : "text-ink/30")}>
                    ${Math.round(plan.oldPrice)}
                  </span>
                )}
              </div>
              {plan.oldPrice && (
                <span className="mt-1 inline-block w-fit rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                  70% off
                </span>
              )}

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.slice(0, 12).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-brand-300" : "text-brand")} />
                    <span className={featured ? "text-white/75" : "text-ink/65"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-a-quote"
                className={cn(
                  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
                  featured ? "bg-white text-ink hover:bg-white/90" : "bg-brand text-white hover:bg-brand-600"
                )}
              >
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
