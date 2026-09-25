"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Minimal useGSAP-style hook: runs the callback inside a gsap.context
 * scoped to the given ref, and reverts all animations on cleanup.
 */
export function useGSAP(callback, { scope, dependencies = [] } = {}) {
  const ctxRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    ctxRef.current = gsap.context(() => {
      callback(ctxRef.current);
    }, scope);

    return () => ctxRef.current && ctxRef.current.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
