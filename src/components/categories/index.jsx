"use client";
import { COLORS, fadeIn, fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";

const CATEGORIES = [
  { icon: "🎉", title: "Celebrations", body: "Party bags & event favours" },
  { icon: "💛", title: "Personalised gifts", body: "Custom & photo gifts" },
  { icon: "✂️", title: "Handmade creations", body: "Paper crafts & decor" },
  { icon: "🖼️", title: "Shadow boxes", body: "Memory & keepsake frames" },
  { icon: "🎁", title: "Gift boxes", body: "Hampers & themed sets" },
];

export const Categories = () => {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: COLORS.muted,
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
        What I make
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
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}>
        Something for every occasion.
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.2}
        style={{
          fontSize: 14,
          color: COLORS.gray,
          textAlign: "center",
          maxWidth: 420,
          lineHeight: 1.65,
          marginBottom: "3.5rem",
        }}>
        From heartfelt keepsakes to whimsical party extras — every piece is made
        by hand, just for you.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
          maxWidth: 900,
          width: "100%",
        }}>
        {CATEGORIES.map((c, i) => (
          <motion.div
            key={c.title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.25 + i * 0.1}
            whileHover={{
              y: -5,
              boxShadow: "0 12px 40px rgba(61,53,48,0.08)",
              transition: { duration: 0.25 },
            }}
            style={{
              background: COLORS.cream,
              border: `0.5px solid ${COLORS.sand}`,
              borderRadius: 14,
              padding: "1.75rem 1.25rem",
              textAlign: "center",
            }}>
            <motion.i
              className={`ti ${c.icon}`}
              aria-hidden="true"
              whileHover={{ scale: 1.2, color: "#d4734a" }}
              style={{
                fontSize: 28,
                color: COLORS.terracotta,
                display: "block",
                marginBottom: "0.75rem",
              }}
            />
            <h4
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: COLORS.dark,
                marginBottom: "0.3rem",
              }}>
              {c.title}
            </h4>
            <p style={{ fontSize: 11, color: COLORS.gray, lineHeight: 1.45 }}>
              {c.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
