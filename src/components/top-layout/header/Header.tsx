"use client";

import ThemeToggle from "./ThemeToggle";

export default function TopHeader() {
  return (
    <header className="top-layout-header">
      <div className="flex-1">
        <h2 className="text-theme-h2 font-semibold">Outils Système</h2>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle className="h-8 w-4" />
      </div>
    </header>
  );
}
