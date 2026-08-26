import Reveal from '../Reveal/Reveal';
import { testimonials } from '../../data/content';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <span className={styles.eyebrow}>Kind words</span>
          <h2>What customers say.</h2>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div className={styles.card} key={t.name}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.who}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
