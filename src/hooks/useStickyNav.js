"use client";
import { useEffect, useState } from "react";

/** Returns true once the page has scrolled past `offset` px. */
export default function useStickyNav(offset = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
