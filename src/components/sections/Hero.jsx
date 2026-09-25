"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@/lib/useGSAP";
import { site } from "@/data/site";

const rotatingWords = ["Design.", "Develop.", "Animate.", "Rank.", "Grow."];

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    (ctx) => {
      const words = gsap.utils.toArray(".rotate-word");
      if (!words.length) return;
      gsap.set(words, { yPercent: 100, opacity: 0 });
      gsap.set(words[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({ repeat: -1 });
      words.forEach((word, i) => {
        const next = words[(i + 1) % words.length];
        tl.to(word, { yPercent: -100, opacity: 0, duration: 0.5, ease: "power2.in", delay: 1.6 })
          .fromTo(
            next,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "<"
          );
      });

      // floating orbs parallax
      gsap.to(".orb", {
        y: (i) => (i % 2 === 0 ? -30 : 30),
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28"
    >
      {/* background */}
      <div className="absolute inset-0 bg-hero-grid" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="orb absolute -left-20 top-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="orb absolute -right-10 bottom-20 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />

      <div className="container-tv relative grid items-center gap-12 lg:grid-cols-12">
        {/* left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {site.experienceYears} years of premium digital craft
          </motion.div>

          <h1 className="mt-6 heading-1 text-balance">
            We help brands
            <br />
            <span className="relative inline-flex h-[1.1em] overflow-hidden align-bottom">
              <span className="invisible">Develop.</span>
              {rotatingWords.map((w, i) => (
                <span
                  key={w}
                  className="rotate-word absolute left-0 gradient-text"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {w}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl lead"
          >
            {site.name} is your all-in-one digital agency — from logos and
            websites to apps, animation, SEO and social. Beautiful design that
            drives real, measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 font-semibold text-ink transition-all hover:border-brand hover:text-brand"
            >
              View our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[47, 12, 32, 68].map((n) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand" />
                ))}
              </div>
              <p className="text-sm text-ink/60">
                Trusted by 320+ happy clients
              </p>
            </div>
          </motion.div>
        </div>

        {/* right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 animate-float rounded-[2rem] bg-brand-gradient p-1 shadow-glow">
              <div className="flex h-full w-full flex-col justify-between rounded-[1.9rem] bg-ink p-8 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/50">
                    tech-vantage.app
                  </span>
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-brand" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-white/20" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["+140%", "4.8★", "0.9s"].map((v) => (
                      <div
                        key={v}
                        className="rounded-xl bg-white/5 p-3 text-center"
                      >
                        <div className="text-lg font-bold text-brand-300">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-11 rounded-full bg-brand text-center text-sm font-semibold leading-[2.75rem]">
                  Launch 🚀
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
