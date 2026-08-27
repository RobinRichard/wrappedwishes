"use client";
import useReveal from "@/hooks/useReveal";
import styles from "./reveal.module.scss";

/**
 * Wraps children in a div that fades/rises into view on scroll.
 * Pass `as` to render a different element, and `className` to add extra styles.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const [ref, isIn] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${isIn ? styles.in : ""} ${className}`}
      {...rest}>
      {children}
    </Tag>
  );
}
