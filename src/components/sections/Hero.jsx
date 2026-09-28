"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { site } from "@/data/site";
import { reviewStats } from "@/data/testimonials";

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1500 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(site.heroTypewriter);

  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={site.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Digiplus-style orange → dark gradient wash */}
      <div className="absolute inset-0 bg-[linear-gradient(300deg,rgba(255,170,23,0.55)_0%,rgba(34,36,41,0.92)_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />

      {/* Rotated outline stroke word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none font-display text-[7rem] font-extrabold uppercase tracking-tight stroke-text lg:block"
      >
        Creative
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 bottom-10 select-none font-display text-[22vw] font-extrabold uppercase leading-none stroke-text opacity-40 lg:text-[13rem]"
      >
        Digital
      </span>

      <div className="container-tv relative z-10 pt-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur"
          >
            Design agency based in the US · Premium digital services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Custom Website, Logo,
            <br />
            Animation <span className="gradient-text">&amp; More.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex min-h-[2.5rem] items-center text-xl font-medium text-white/85 sm:text-2xl"
          >
            <span className="text-brand-300">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-brand-300 sm:h-7" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/get-a-quote" className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-glow transition hover:bg-brand-600">
              Let&apos;s Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-ink">
              View Our Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-brand-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-300" />
                ))}
              </div>
              <span className="text-sm text-white/80">
                {reviewStats.trustpilot.score}/5 on Trustpilot · {reviewStats.trustpilot.count} reviews
              </span>
            </div>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-sm text-white/80">Join 100+ pleased clients</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
