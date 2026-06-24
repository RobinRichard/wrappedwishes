import styles from "./typography.module.scss";
import { fadeIn, fadeUp } from "@/constants";
import { motion } from "framer-motion";

export const SectionLabel = ({
  inView,
  children,
}: Readonly<{
  children: React.ReactNode;
  inView: boolean;
}>) => {
  return (
    <motion.p
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      custom={0}
      className={styles.label}>
      {children}
    </motion.p>
  );
};

export const SectionHeading = ({
  inView,
  children,
  light = false,
  large = false,
}: Readonly<{
  children: React.ReactNode;
  inView: boolean;
  light?: boolean;
  large?: boolean;
}>) => {
  return (
    <motion.h2
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      custom={0.1}
      className={`${styles.heading} ${light ? styles.light : ""} ${large ? styles.large : ""}`}>
      {children}
    </motion.h2>
  );
};
