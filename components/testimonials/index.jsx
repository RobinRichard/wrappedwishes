import styles from "./testimonials.module.scss";
import { SectionLabel, SectionTitle } from "@/typography";

const TESTIMONIALS = [
  {
    quote:
      "Absolutely beautiful shadow box — exactly what I had in mind. Will be ordering again!",
    name: "Sarah M.",
  },
  {
    quote:
      "The party bags were a huge hit. So thoughtful and unique — nothing like the shops.",
    name: "Jess T.",
  },
];

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <SectionLabel>What I make</SectionLabel>
      <SectionTitle>Something for every occasion</SectionTitle>
      <div className={styles.gird}>
        {TESTIMONIALS.map(t => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>{t.quote}</p>
            <span className={styles.name}>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
