"use client";
import { COLORS, fadeIn, fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Absolutely beautiful shadow box — exactly what I had in mind. Will be ordering again!",
    name: "Sarah M.",
  },
  {
    quote:
      "The party bags were a huge hit. So thoughtful and unique — nothing like the shops.",
    name: "Jess T.",
  },
];

export const Testimonials = () => {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: COLORS.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
      }}>
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: COLORS.terracotta,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}>
        Kind words
      </motion.p>

      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.1}
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
          fontWeight: 600,
          color: COLORS.cream,
          textAlign: "center",
          marginBottom: "3.5rem",
          letterSpacing: "-0.02em",
        }}>
        What customers say.
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          maxWidth: 900,
          width: "100%",
        }}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.15 + i * 0.12}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            style={{
              background: "rgba(249,244,238,0.05)",
              border: `0.5px solid rgba(212,197,169,0.18)`,
              borderRadius: 14,
              padding: "1.75rem",
            }}>
            <div
              style={{
                color: COLORS.gold,
                fontSize: 13,
                marginBottom: "0.75rem",
                letterSpacing: 2,
              }}>
              {"★".repeat(t.stars)}
            </div>
            <p
              style={{
                fontSize: 13,
                color: COLORS.sand,
                lineHeight: 1.65,
                fontStyle: "italic",
                marginBottom: "1rem",
              }}>
              "{t.quote}"
            </p>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: COLORS.terracotta,
              }}>
              {t.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
