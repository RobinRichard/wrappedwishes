import { Variants } from "framer-motion";

export const COLORS = {
  dark: "#3D3530",
  cream: "#F9F4EE",
  muted: "#F5EDE4",
  terracotta: "#C4683A",
  sand: "#D4C5A9",
  gray: "#888780",
  brown: "#5A4A42",
  gold: "#C9A84C",
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
