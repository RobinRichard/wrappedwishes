"use client";

import { COLORS, fadeIn } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";

export const Footer = () => {
  const [ref, inView] = useReveal();
  return (
    <footer
      ref={ref}
      style={{
        background: COLORS.dark,
        padding: "2.5rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        borderTop: `0.5px solid rgba(212,197,169,0.15)`,
      }}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}>
        <div
          style={{
            color: COLORS.cream,
            fontSize: 14,
            fontWeight: 500,
            marginBottom: "0.25rem",
          }}>
          WrappedWishes
        </div>
        <div style={{ color: COLORS.gray, fontSize: 12 }}>
          Gifts as unique as your wishes.
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0.1}
        style={{ display: "flex", gap: "1.5rem" }}>
        {["Instagram", "Facebook"].map(s => (
          <a
            key={s}
            href="#"
            style={{
              color: COLORS.sand,
              fontSize: 13,
              textDecoration: "none",
              opacity: 0.75,
            }}>
            {s}
          </a>
        ))}
      </motion.div>
    </footer>
  );
};
