"use client";
import { fadeUp } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";
import styles from "./categories.module.scss";
import { SectionHeading, SectionLabel } from "@/typography";

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
    <section ref={ref} className={styles.section}>
      <SectionLabel inView={inView}>What I make</SectionLabel>
      <SectionHeading inView={inView}>
        Something for every occasion.
      </SectionHeading>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.2}
        className={styles.description}>
        From heartfelt keepsakes to whimsical party extras — every piece is made
        by hand, just for you.
      </motion.p>

      <div className={styles.grid}>
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
            className={styles.card}>
            <motion.i
              className={styles.icon}
              aria-hidden="true"
              whileHover={{ scale: 1.2, color: "#d4734a" }}>
              {c.icon}
            </motion.i>

            <h4 className={styles.cardTitle}>{c.title}</h4>

            <p className={styles.cardBody}>{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
