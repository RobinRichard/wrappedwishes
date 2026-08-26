"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Adds a fade/rise-in transition class once the element scrolls into view.
 * Pair with the `.reveal` mixin styles (opacity/transform + `.in` class).
 *
 * const [ref, isIn] = useReveal();
 * <div ref={ref} className={`${styles.card} ${isIn ? styles.in : ''}`}>
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIn];
}
