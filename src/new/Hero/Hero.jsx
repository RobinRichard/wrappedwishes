import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={`${styles.floaty} ${styles.f1}`} />
      <span className={`${styles.floaty} ${styles.f2}`} />
      <span className={`${styles.floaty} ${styles.f3}`} />
      <span className={`${styles.floaty} ${styles.f4}`} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Handmade in New Zealand</span>
          <h1>
            Personalised gifts
            <br />
            for every <em>occasion.</em>
          </h1>
          <p>
            Personalised gifts, shadow boxes, party bags, and curated gift boxes —
            all handcrafted and made to order. Posted NZ-wide, or delivered locally.
          </p>
          <div className={styles.ctas}>
            <a href="#enquiry" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start your order
            </a>
            <a href="#gallery" className={`${styles.btn} ${styles.btnGhost}`}>
              View gallery
            </a>
          </div>
        </div>

        <div className={styles.art} aria-hidden="true">
          <svg viewBox="0 0 420 460" fill="none">
            <ellipse cx="210" cy="410" rx="150" ry="18" fill="var(--ink)" opacity="0.06" />
            <rect x="95" y="210" width="230" height="170" rx="10" fill="var(--rose-soft)" />
            <rect x="95" y="210" width="230" height="170" rx="10" fill="url(#boxShade)" />
            <rect x="192" y="210" width="36" height="170" fill="var(--wine)" />

            <g className={styles.lid}>
              <rect x="78" y="180" width="264" height="42" rx="10" fill="var(--wine)" />
              <rect x="78" y="180" width="264" height="42" rx="10" fill="url(#lidShade)" />
              <rect x="188" y="180" width="44" height="42" fill="var(--wine-deep)" />
            </g>

            <g className={styles.bow}>
              <path
                d="M210 178c-10-34-58-40-70-14-10 22 16 32 34 24 8-4 12-6 18-10z"
                fill="var(--gold)"
              />
              <path
                d="M210 178c10-34 58-40 70-14 10 22-16 32-34 24-8-4-12-6-18-10z"
                fill="var(--gold-soft)"
              />
              <circle cx="210" cy="178" r="11" fill="var(--gold)" />
            </g>

            <defs>
              <linearGradient id="boxShade" x1="95" y1="210" x2="325" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lidShade" x1="78" y1="180" x2="342" y2="222" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <svg className={styles.deckle} viewBox="0 0 1200 46" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 0 L0 20 Q20 34 40 20 Q60 6 80 20 Q100 34 120 20 Q140 6 160 20 Q180 34 200 20 Q220 6 240 20 Q260 34 280 20 Q300 6 320 20 Q340 34 360 20 Q380 6 400 20 Q420 34 440 20 Q460 6 480 20 Q500 34 520 20 Q540 6 560 20 Q580 34 600 20 Q620 6 640 20 Q660 34 680 20 Q700 6 720 20 Q740 34 760 20 Q780 6 800 20 Q820 34 840 20 Q860 6 880 20 Q900 34 920 20 Q940 6 960 20 Q980 34 1000 20 Q1020 6 1040 20 Q1060 34 1080 20 Q1100 6 1120 20 Q1140 34 1160 20 Q1180 6 1200 20 L1200 0 Z"
          fill="var(--paper-alt)"
        />
      </svg>
    </section>
  );
}
