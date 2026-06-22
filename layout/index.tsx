"use client";

import { useAppContext } from "../store";
import { Nav } from "@/components/nav";

import styles from "./layout.module.scss";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  const className = isDark ? styles.dark : styles.light;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Nav />
      {children}
      <div className={styles.ctaBand}>
        <h2 className={styles.ctaTitle}>Ready to create something special?</h2>
        <p className={styles.ctaBody}>
          Every gift is made to order — tell me your idea and I'll bring it to
          life.
        </p>
        <button className={styles.ctaBtn}>Send an enquiry</button>
      </div>
      {/* Footer */}
      <footer className={styles.footer}>
        <div>
          <div className={styles.footerLogo}>WrappedWishes</div>
          <div className={styles.footerTagline}>
            Gifts as unique as your wishes.
          </div>
        </div>
        <div className={styles.footerSocials}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </footer>
    </div>
  );
};
