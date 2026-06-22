import styles from "./categories.module.scss";
import { SectionLabel, SectionTitle } from "@/typography";

const CATEGORIES = [
  { icon: "🎉", title: "Celebrations", body: "Party bags & event favours" },
  { icon: "💛", title: "Personalised gifts", body: "Custom & photo gifts" },
  { icon: "✂️", title: "Handmade creations", body: "Paper crafts & decor" },
  { icon: "🖼️", title: "Shadow boxes", body: "Memory & keepsake frames" },
  { icon: "🎁", title: "Gift boxes", body: "Hampers & themed sets" },
];

export const Categories = () => {
  return (
    <section className={styles.cats}>
      <SectionLabel>What I make</SectionLabel>
      <SectionTitle>Something for every occasion</SectionTitle>
      <div className={styles.catGrid}>
        {CATEGORIES.map(c => (
          <div key={c.title} className={styles.catCard}>
            <span className={styles.catIcon} role="img" aria-hidden="true">
              {c.icon}
            </span>
            <h3 className={styles.catTitle}>{c.title}</h3>
            <p className={styles.catBody}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
