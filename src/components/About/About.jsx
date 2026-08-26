import Reveal from "../Reveal/Reveal";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <Reveal as="div" className={styles.art} aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="70" fill="var(--paper)" />
            <path
              d="M60 90c8-14 24-18 40-8"
              stroke="var(--wine)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 108c14 10 30 8 40-4"
              stroke="var(--gold)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="70" cy="72" r="3" fill="var(--rose)" />
            <circle cx="130" cy="130" r="3" fill="var(--sage)" />
            <path
              d="M100 60 L100 140"
              stroke="var(--wine)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.4"
            />
          </svg>
        </Reveal>

        <Reveal as="div" className={styles.copy}>
          <span className={styles.eyebrow}>About</span>
          <h2>A small home studio, big on detail.</h2>
          <p>
            Wrapped Wishes is a one-woman, home-based studio in New Zealand,
            making personalised gifts, shadow boxes, party favours and gift
            boxes by hand — one order at a time.
          </p>
          <p>
            Every piece is made to order, so nothing leaves the workbench until
            it&apos;s exactly right. No two gifts are quite the same, because no
            two wishes are either.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
