"use client";
import { COLORS, fadeIn, fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Enquire",
    body: "Tell me what you're after via the form or social media.",
  },
  {
    num: 2,
    title: "Customise",
    body: "We chat through ideas, colours, names, and details.",
  },
  {
    num: 3,
    title: "Receive",
    body: "Your gift is made with love and sent to your door.",
  },
];

export const HowItWorks = () => {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: COLORS.cream,
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
        How it works
      </motion.p>

      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.1}
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
          fontWeight: 600,
          color: COLORS.dark,
          textAlign: "center",
          marginBottom: "4rem",
          letterSpacing: "-0.02em",
        }}>
        Simple, personal, stress-free.
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: 900,
          width: "100%",
        }}>
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.2 + i * 0.15}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            style={{
              background: "#fff",
              border: `0.5px solid ${COLORS.sand}`,
              borderRadius: 14,
              padding: "2rem 1.75rem",
            }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: COLORS.terracotta,
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}>
              {s.num}
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: COLORS.dark,
                marginBottom: "0.6rem",
                letterSpacing: "-0.01em",
              }}>
              {s.title}
            </h3>
            <p style={{ fontSize: 13, color: COLORS.gray, lineHeight: 1.65 }}>
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
