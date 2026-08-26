"use client";
import { useState } from "react";
import Reveal from "../Reveal/Reveal";
import styles from "./Enquiry.module.scss";

const OCCASIONS = [
  "Shadow box / keepsake",
  "Personalised gift",
  "Party bags / favours",
  "Gift box / hamper",
  "Something else",
];

const initialForm = {
  name: "",
  email: "",
  occasion: OCCASIONS[0],
  details: "",
};

export default function Enquiry() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: wire this up to your email/CRM provider of choice
    // (Formspree, a serverless function, etc). Currently a demo submit.
    console.log("Enquiry submitted:", form);
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section className={styles.enquiry} id="enquiry">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.card}>
          <span className={styles.eyebrow}>Order enquiry</span>
          <h2>Let&apos;s create something.</h2>
          <p>
            Tell us about your gift idea and we&apos;ll come back with a
            personalised quote tailored to your requirements.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="occasion">What&apos;s it for</label>
                <select
                  id="occasion"
                  value={form.occasion}
                  onChange={handleChange("occasion")}>
                  {OCCASIONS.map(occasion => (
                    <option key={occasion} value={occasion}>
                      {occasion}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="details">Tell us more</label>
                <textarea
                  id="details"
                  rows={4}
                  placeholder="Occasion, colours, names, quantities, timeframe..."
                  value={form.details}
                  onChange={handleChange("details")}
                />
              </div>
            </div>

            <button type="submit" className={styles.submit}>
              {sent ? "Sent — thank you!" : "Submit enquiry"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
