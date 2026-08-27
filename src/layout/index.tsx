"use client";

import styles from "./layout.module.scss";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={`${styles.wrapper}`}>{children}</div>;
};
