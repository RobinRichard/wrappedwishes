import styles from "./process.module.scss";
import { SectionLabel, SectionTitle } from "@/typography";

const STEPS = [
  {
    num: 1,
    title: "Enquire",
    body: "Tell me what you're after via the form or social media.",
  },
  {
    num: 2,
    title: "Customise",
    body: "We chat through ideas, colours, names, and details.",
  },
  {
    num: 3,
    title: "Receive",
    body: "Your gift is made with love and sent to your door.",
  },
];

export const Process = () => {
  return (
    <section className={styles.how}>
      <SectionLabel>How it works</SectionLabel>
      <SectionTitle>Simple, personal, stress-free</SectionTitle>
      <div className={styles.steps}>
        {STEPS.map(s => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepBody}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
