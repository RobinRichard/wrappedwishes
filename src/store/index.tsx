"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const AppContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    return "light";
    // if (typeof window === "undefined") return "light"; // SSR guard
    // return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  // useEffect(() => {
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(theme);
  // }, [theme]);

  const toggle = () => {
    setTheme(prev => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <AppContext.Provider value={{ theme, toggle }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
