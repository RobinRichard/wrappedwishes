"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.scss";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return form.name && form.email && form.product && form.message;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_50mm3pm",
        "template_pwjhlwm",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: form.product,
          quantity: form.quantity,
          message: form.message,
        },
        "IAZXp5ibY_Cov1nw1"
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
      />
      <div className={styles.grid}>
        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <input
        name="product"
        placeholder="Product / Service *"
        value={form.product}
        onChange={handleChange}
      />

      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Describe your requirements *"
        value={form.message}
        onChange={handleChange}
      />

      <button disabled={loading} type="submit">
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>

      {status === "success" && (
        <p className={styles.success}>Message sent successfully ✔</p>
      )}

      {status === "error" && (
        <p className={styles.error}>
          Please fill required fields or try again ❌
        </p>
      )}
    </form>
  );
};
