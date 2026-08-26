"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./nav.module.scss";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <span className={styles.brand}>WrappedWishes</span>

      <div className={styles.menu}>
        {["Gallery", "What I make", "About"].map(link => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}

        <motion.a
          href="#enquiry"
          whileHover={{ scale: 1.05, backgroundColor: "#d4734a" }}
          whileTap={{ scale: 0.97 }}
          className={styles.btn}>
          Enquire
        </motion.a>
      </div>
    </motion.nav>
  );
};
