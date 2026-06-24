"use client";
import styles from "./form.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="021 xxx xxxx"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="requiredDate">Required Date</label>
          <input id="requiredDate" name="requiredDate" type="date" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="productType">What would you like made? *</label>
        <select id="productType" name="productType" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="shadow-box">Shadow Box</option>
          <option value="gift-box">Gift Box</option>
          <option value="party-bag">Party Bags</option>
          <option value="cake-topper">Cake Topper</option>
          <option value="custom-gift">Custom Gift</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" defaultValue="">
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Wedding</option>
          <option>Baby Shower</option>
          <option>Anniversary</option>
          <option>Corporate Event</option>
          <option>Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Tell us about your order *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Describe what you'd like, colours, names, themes, quantities, sizes, etc."
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Request Quote
      </button>
    </form>
  );
};
