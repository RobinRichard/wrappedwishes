"use client";
import { fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";
import styles from "./process.module.scss";
import { SectionLabel, SectionHeading } from "@/typography";

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
    <section ref={ref} className={styles.section}>
      <SectionLabel inView={inView}>How it works</SectionLabel>
      <SectionHeading inView={inView}>
        Simple, personal, stress-free.
      </SectionHeading>

      <div className={styles.grid}>
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.2 + i * 0.15}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={styles.card}>
            <div className={styles.cardNumber}>{s.num}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardBody}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
