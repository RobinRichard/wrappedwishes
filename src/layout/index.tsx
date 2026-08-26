"use client";

import { Footer } from "@/components/footer";
import styles from "./layout.module.scss";
import { Nav } from "@/components/nav";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${styles.wrapper}`}>
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};
