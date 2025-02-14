/**
 * IMPORTANT: Hydration Error Prevention
 * - Utiliser 'useEffect' avec 'mounted' pour éviter les erreurs d'hydratation
 * - Ne jamais utiliser 'typeof window' directement dans le rendu
 * - Éviter Date.now(), Math.random() dans le rendu initial
 * - Toujours attendre que le composant soit monté avant d'afficher le contenu dynamique
 */
"use client";

import { ReactNode } from "react";
import "./layout.css";
import "@/components/main-layout/theme.css";
import Header from "@/components/main-layout/header/Header";

interface MainLayoutProps {
  children: ReactNode;
  mainContentState: "normal" | "panel-closing" | "panel-opening";
}

export default function MainLayout({
  children,
  mainContentState,
}: MainLayoutProps) {
  return (
    <main className={`main-content ${mainContentState}`}>
      <Header />
      {children}
    </main>
  );
}
