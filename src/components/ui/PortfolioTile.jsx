"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export default function PortfolioTile({ item, onOpen }) {
  const label =
    { website: "Website", logo: "Logo", branding: "Branding", animation: "Animation", smm: "Social Media", nft: "NFT Design" }[
      item.category
    ] || item.title;

  return (
    <button
      type="button"
      onClick={() => onOpen?.(item)}
      className="group relative block w-full overflow-hidden rounded-3xl border border-ink/5 bg-white text-left shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {item.type === "video" ? (
          <video
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        ) : (
          <Image
            src={item.src}
            alt={`${item.title} — Tech Vantage Now`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Hover overlay with content */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
            {label}
          </span>
          <h3 className="mt-1 font-heading text-lg font-bold text-white">{item.title}</h3>
        </div>

        {item.type === "video" && (
          <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Play className="h-4 w-4 fill-white" />
          </span>
        )}

        {/* Blue arrow button */}
        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </button>
  );
}
