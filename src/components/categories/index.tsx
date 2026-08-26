"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./categories.module.scss";
import { SectionHeading, SectionLabel } from "@/typography";

const CATEGORIES = [
  {
    icon: "🎉",
    title: "Celebrations",
    body: "Party bags & event favours",
    bg: "#FBEAF0",
  },
  {
    icon: "💛",
    title: "Personalised gifts",
    body: "Custom & photo gifts",
    bg: "#FAEEDA",
  },
  {
    icon: "✂️",
    title: "Handmade creations",
    body: "Paper crafts & decor",
    bg: "#E1F5EE",
  },
  {
    icon: "🖼️",
    title: "Shadow boxes",
    body: "Memory & keepsake frames",
    bg: "#E6F1FB",
  },
  {
    icon: "🎁",
    title: "Gift boxes",
    body: "Hampers & themed sets",
    bg: "#EEEDFE",
  },
];

// Each row: text scrolls in naturally, image cascades in with a bounce
const CategoryRow = ({
  cat,
  index,
}: {
  cat: (typeof CATEGORIES)[0];
  index: number;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-15% 0px" });

  // Text: simple fade + slight upward drift, delayed a touch after image
  const textVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1], delay: 0.12 },
    },
  };

  // Image: cascade — rises from below with rotation + spring bounce
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotate: index % 2 === 0 ? -10 : 10,
      scale: 0.82,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.34, 1.3, 0.64, 1], // spring overshoot for the bounce
      },
    },
  };

  // Continuous feel: each image has a gentle idle float after landing
  const floatAnimation = {
    y: [0, -10, 0],
    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.8, // starts after cascade landing
    },
  };

  return (
    <div ref={rowRef} className={styles.row}>
      <div className={styles.rowInner}>
        {/* Text side */}
        <motion.div
          className={styles.textSide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}>
          <span className={styles.index}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.cardTitle}>{cat.title}</h3>
          <p className={styles.cardBody}>{cat.body}</p>
        </motion.div>

        {/* Image side — cascade + float */}
        <motion.div
          className={styles.imageSide}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}>
          <motion.div
            className={styles.imageBox}
            style={{ backgroundColor: cat.bg }}
            animate={inView ? floatAnimation : {}}>
            {/* Swap this span for a real <img> when you have PNGs */}
            <span className={styles.icon} aria-hidden="true">
              {cat.icon}
            </span>
            {/* <img src={cat.png} alt={cat.title} className={styles.productImg} /> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const Categories = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className={styles.section}>
      {/* Section header */}
      <div ref={headerRef} className={styles.header}>
        <SectionLabel inView={headerInView}>What I make</SectionLabel>
        <SectionHeading inView={headerInView}>
          Something for every occasion.
        </SectionHeading>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}>
          From heartfelt keepsakes to whimsical party extras — every piece is
          made by hand, just for you.
        </motion.p>
      </div>

      {/* Category rows */}
      <div className={styles.rows}>
        {CATEGORIES.map((cat, i) => (
          <CategoryRow key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
};
