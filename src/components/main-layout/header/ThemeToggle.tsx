"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

function useTheme(defaultTheme: "light" | "dark") {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const savedTheme = localStorage.getItem("theme") || defaultTheme;
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(savedTheme);
  }, [defaultTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return {
    theme,
    toggleTheme,
    isHydrated,
  };
}

interface ThemeToggleProps {
  defaultTheme?: "light" | "dark";
  className?: string;
}

export default function ThemeToggle({
  defaultTheme = "dark",
  className,
}: ThemeToggleProps) {
  const { theme, toggleTheme, isHydrated } = useTheme(defaultTheme);

  // Rendu initial côté serveur
  if (!isHydrated) {
    return (
      <div
        className={twMerge(
          "flex flex-col border border-theme-border divide-y divide-theme-border theme-transition overflow-hidden rounded",
          className,
        )}
      >
        <div className="flex-1 flex items-center justify-center theme-transition bg-background">
          <SunIcon className="w-3 h-3 text-theme-primary" />
        </div>
        <div className="flex-1 flex items-center justify-center theme-transition bg-theme-alt-accent">
          <MoonIcon className="w-3 h-3 text-theme-primary" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={twMerge(
        "flex flex-col border border-theme-border divide-y divide-theme-border theme-transition overflow-hidden rounded",
        className,
      )}
      title={
        theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"
      }
    >
      <div
        className={`flex-1 flex items-center justify-center theme-transition ${
          theme === "light" ? "bg-background" : "bg-theme-alt-accent"
        }`}
      >
        <SunIcon className="w-3 h-3 text-theme-primary" />
      </div>
      <div
        className={`flex-1 flex items-center justify-center theme-transition ${
          theme === "light" ? "bg-theme-alt-accent" : "bg-background"
        }`}
      >
        <MoonIcon className="w-3 h-3 text-theme-primary" />
      </div>
    </button>
  );
}
