import { Variants } from "framer-motion";

export const COLORS = {
  dark: "#3D3530", // --bg-dark
  cream: "#F9F4EE", // --bg-page
  muted: "#F5EDE4", // --bg-warm
  terracotta: "#C4683A", // --bg-band
  sand: "#D4C5A9", //   --text-subtle
  gray: "#888780", //  --text-muted
  brown: "#5A4A42", //   --text-review
  gold: "#C9A84C", // --gold
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};
