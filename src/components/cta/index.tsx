"use client";

import { COLORS, fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";

export const CTASection = () => {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      style={{
        minHeight: "70vh",
        background: COLORS.terracotta,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Decorative rings */}
      {[300, 500, 700].map((size, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: i * 0.15,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `0.5px solid rgba(249,244,238,0.12)`,
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.1}
        style={{
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          fontWeight: 600,
          color: COLORS.cream,
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
          position: "relative",
        }}>
        Ready to create
        <br />
        something special?
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.25}
        style={{
          fontSize: 14,
          color: "rgba(245,196,179,0.9)",
          maxWidth: 380,
          lineHeight: 1.65,
          marginBottom: "2.5rem",
          position: "relative",
        }}>
        Every gift is made to order — tell me your idea and I'll bring it to
        life.
      </motion.p>

      <motion.button
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.4}
        whileHover={{ scale: 1.05, backgroundColor: "#fdf8f2" }}
        whileTap={{ scale: 0.97 }}
        style={{
          background: COLORS.cream,
          color: COLORS.terracotta,
          fontSize: 14,
          fontWeight: 500,
          padding: "0.85rem 2.25rem",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s",
          position: "relative",
        }}>
        Send an enquiry
      </motion.button>
    </section>
  );
};
