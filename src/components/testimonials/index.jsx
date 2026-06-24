"use client";
import { fadeIn, fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";
import styles from "./testimonials.module.scss";
import { SectionLabel, SectionHeading } from "@/typography";

const TESTIMONIALS = [
  {
    quote:
      "Absolutely beautiful shadow box — exactly what I had in mind. Will be ordering again!",
    name: "Sarah M.",
    stars: 5, // Added here to ensure 't.stars' doesn't crash or result in NaN
  },
  {
    quote:
      "The party bags were a huge hit. So thoughtful and unique — nothing like the shops.",
    name: "Jess T.",
    stars: 5,
  },
];

export const Testimonials = () => {
  const [ref, inView] = useReveal();

  return (
    <section ref={ref} className={styles.section}>
      <SectionLabel inView={inView}>Kind words</SectionLabel>
      <SectionHeading light inView={inView}>
        What customers say.
      </SectionHeading>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.15 + i * 0.12}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={styles.card}>
            <div className={styles.stars}>{"★".repeat(t.stars || 5)}</div>
            <p className={styles.quote}>"{t.quote}"</p>
            <span className={styles.name}>{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
