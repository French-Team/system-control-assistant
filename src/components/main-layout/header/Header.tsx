"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex h-12 items-center px-4 bg-panel-bg border-b border-theme-border">
      <div className="flex-1">
        {/* Les toggles sont maintenant gérés dans ClientLayout */}
      </div>
      <div className="flex-1 flex justify-center">
        <h1 className="text-theme-h1 font-bold">
          SYSTEM | CONTROL | ASSISTANT
        </h1>
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="h-8 w-4">
          <ThemeToggle className="w-full h-full rounded" />
        </div>
      </div>
    </header>
  );
}
