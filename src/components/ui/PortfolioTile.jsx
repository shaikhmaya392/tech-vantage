"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function PortfolioTile({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(item)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
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
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {item.type === "video" && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Play className="h-4 w-4 fill-white" />
          </span>
        )}
        <span className="absolute bottom-3 left-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {item.title}
        </span>
      </div>
    </button>
  );
}
