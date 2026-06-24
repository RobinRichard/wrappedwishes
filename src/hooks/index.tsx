"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export const useReveal = (): [React.RefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  return [ref, inView];
};
