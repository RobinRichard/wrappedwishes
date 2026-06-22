"use client";
import { useAppContext } from "@/store";

export function ThemeToggle() {
  const { theme, toggle } = useAppContext();
  const dark = theme === "dark";

  return (
    <button onClick={toggle} aria-label="Toggle theme">
      <span>{dark ? "🌙" : "☀️"}</span>
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
