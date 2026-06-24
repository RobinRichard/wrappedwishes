import styles from "./typography.module.scss";

export const SectionLabel = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.sectionLabel}>{children}</div>;
};

export const SectionTitle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};
