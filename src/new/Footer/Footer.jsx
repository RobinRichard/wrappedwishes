import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div>
            <a href="#top" className={styles.logo}>
              <svg viewBox="0 0 40 40" fill="none" className={styles.seal}>
                <circle cx="20" cy="20" r="19" fill="var(--gold)" />
                <text
                  x="20"
                  y="24"
                  fontFamily="Fraunces, serif"
                  fontSize="13"
                  fill="var(--ink)"
                  textAnchor="middle"
                  fontStyle="italic"
                >
                  ww
                </text>
              </svg>
              WrappedWishes
            </a>
            <p className={styles.tagline}>Gifts as unique as your wishes.</p>
          </div>

          <div className={styles.social}>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.6c0-.6.4-1 1-1h2V8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Wrapped Wishes. Handmade in New Zealand.</span>
          <span>Made to order · Posted NZ-wide</span>
        </div>
      </div>
    </footer>
  );
}
