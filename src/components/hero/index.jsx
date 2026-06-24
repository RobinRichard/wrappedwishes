"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS, fadeIn, fadeUp } from "@/constants";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}>
      {/* Background texture rings */}
      <motion.div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: `0.5px solid rgba(212,197,169,0.12)`,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          y,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          border: `0.5px solid rgba(212,197,169,0.07)`,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          y,
        }}
      />

      <motion.div style={{ textAlign: "center", maxWidth: 620, opacity, y }}>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeIn}
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: COLORS.terracotta,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}>
          Handmade in New Zealand
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: COLORS.cream,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}>
          Personalised gifs
          <br />
          <em style={{ fontStyle: "italic", color: COLORS.sand }}>
            for every occasion.
          </em>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          style={{
            fontSize: 15,
            color: COLORS.sand,
            lineHeight: 1.7,
            maxWidth: 440,
            margin: "0 auto 2.5rem",
            opacity: 0.85,
          }}>
          Personalised gifts, shadow boxes, party bags, and curated gift boxes —
          all handcrafted and made to order. Posted NZ-wide or delivered
          locally.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.55}
          variants={fadeUp}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#d4734a" }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: COLORS.terracotta,
              color: COLORS.cream,
              fontSize: 14,
              fontWeight: 500,
              padding: "0.75rem 1.75rem",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}>
            Get in touch
          </motion.button>
          <motion.button
            whileHover={{ borderColor: COLORS.sand, color: COLORS.cream }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              color: COLORS.sand,
              fontSize: 14,
              padding: "0.75rem 1.75rem",
              borderRadius: 10,
              border: `0.5px solid rgba(136,135,128,0.5)`,
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
            See my work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          translateX: "-50%",
        }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, rgba(212,197,169,0.5), transparent)`,
            margin: "0 auto",
          }}
        />
      </motion.div>
    </section>
  );
};
