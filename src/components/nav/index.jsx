"use client";
import { COLORS } from "@/constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: 64,
        background: scrolled ? "rgba(61,53,48,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        borderBottom: scrolled ? `0.5px solid rgba(212,197,169,0.2)` : "none",
      }}>
      <span
        style={{
          color: COLORS.cream,
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}>
        WrappedWishes
      </span>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Gallery", "What I make", "About"].map(link => (
          <a
            key={link}
            href="#"
            style={{
              color: COLORS.sand,
              fontSize: 13,
              textDecoration: "none",
              opacity: 0.85,
            }}>
            {link}
          </a>
        ))}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#d4734a" }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: COLORS.terracotta,
            color: COLORS.cream,
            fontSize: 13,
            fontWeight: 500,
            padding: "7px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s",
          }}>
          Enquire
        </motion.button>
      </div>
    </motion.nav>
  );
};
