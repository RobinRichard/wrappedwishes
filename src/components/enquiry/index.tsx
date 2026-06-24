"use client";
import { useReveal } from "@/hooks";
import { motion } from "framer-motion";
import styles from "./enquiry.module.scss";
import { SectionHeading } from "@/typography";
import { fadeUp } from "@/constants";
import { Form } from "./form";

export const Enquiry = () => {
  const [ref, inView] = useReveal();

  return (
    <section ref={ref} className={styles.section}>
      <SectionHeading inView={inView}>Order Enquiry</SectionHeading>
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.2}
        className={styles.description}>
        Tell us about your gift idea and we'll provide a personalised quote
        tailored to your requirements.
      </motion.p>
      <Form />
    </section>
  );
};
