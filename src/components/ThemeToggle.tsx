"use client";

import { useTheme } from "@/contexts/ThemeProvider";

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <FaMoon /> : <BsSunFill />}
    </button>
  );
}
