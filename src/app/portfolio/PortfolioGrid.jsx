"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PortfolioTile from "@/components/ui/PortfolioTile";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <div className="container-tv">
      <div className="flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              active === cat.key
                ? "bg-brand text-white shadow-glow"
                : "border border-white/15 text-white/60 hover:border-brand hover:text-brand-300"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <PortfolioTile item={item} onOpen={setLightbox} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              {lightbox.type === "video" ? (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[85vh] w-full rounded-2xl"
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[85vh] w-full rounded-2xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
