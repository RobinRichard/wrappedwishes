"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, fadeUp } from "@/constants";
import styles from "./hero.module.scss";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Background texture rings */}
      <motion.div
        className={styles.ringSmall}
        style={{ translateX: "-50%", translateY: "-50%", y }}
      />

      <motion.div
        className={styles.ringLarge}
        style={{ translateX: "-50%", translateY: "-50%", y }}
      />

      <motion.div className={styles.content} style={{ opacity, y }}>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeIn}
          className={styles.eyebrow}>
          Handmade in New Zealand
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
          className={styles.title}>
          Personalised gifts
          <br />
          <em className={styles.titleAccent}>for every occasion.</em>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className={styles.description}>
          Personalised gifts, shadow boxes, party bags, and curated gift boxes —
          all handcrafted and made to order. Posted NZ-wide or delivered
          locally.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.55}
          variants={fadeUp}
          className={styles.actions}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={styles.primaryButton}>
            Get in touch
          </motion.button>

          <motion.button
            whileHover={{
              borderColor: "var(--color-sand)",
              color: "var(--color-cream)",
            }}
            whileTap={{ scale: 0.97 }}
            className={styles.secondaryButton}>
            See my work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className={styles.scrollLine}
        />
      </motion.div>
    </section>
  );
};
