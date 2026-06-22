import React from "react";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroSub}>Handmade in New Zealand</div>
      <h1 className={styles.heroTitle}>
        Gifts as unique
        <br />
        as your wishes.
      </h1>
      <p className={styles.heroBody}>
        Personalised gifts, shadow boxes, party bags, and curated gift boxes —
        all handcrafted and made to order. Posted NZ-wide or delivered locally.
      </p>
      <div className={styles.heroBtns}>
        <button className={styles.btnPrimary}>Get in touch</button>
        <button className={styles.btnSecondary}>See my work</button>
      </div>
    </section>
  );
};
