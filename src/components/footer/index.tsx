"use client";
import { fadeIn } from "@/constants";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";
import styles from "./footer.module.scss";

export const Footer = () => {
  const [ref, inView] = useReveal();

  return (
    <footer ref={ref} className={styles.footer}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}>
        <div className={styles.brand}>WrappedWishes</div>
        <div className={styles.tagline}>Gifts as unique as your wishes.</div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0.1}
        className={styles.socials}>
        {["Instagram", "Facebook"].map(s => (
          <a key={s} href="#" className={styles.link}>
            {s}
          </a>
        ))}
      </motion.div>
    </footer>
  );
};
