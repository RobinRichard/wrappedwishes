import Reveal from "../reveals";
import { steps } from "../../data/content";
import styles from "./how.module.scss";

export default function HowItWorks() {
  return (
    <section id="how">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <span className={styles.eyebrow}>How it works</span>
          <h2>Simple, personal, stress-free.</h2>
        </Reveal>

        <div className={styles.steps}>
          {steps.map(step => (
            <Reveal as="div" className={styles.step} key={step.num}>
              <div className={styles.numRing}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
