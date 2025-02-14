"use client";

import { ReactNode, useState, useCallback, useEffect } from "react";
import MainLayout from "./MainLayout";
import TopPanel from "../top-layout/TopPanel";
import LeftPanel from "./panels/LeftPanel";
import RightPanel from "./panels/RightPanel";
import BottomPanel from "./panels/BottomPanel";
import Toggles from "./Toggles";

interface ClientLayoutProps {
  children: ReactNode;
}

interface PanelState {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
}

interface PanelAnimation {
  top: "none" | "opening" | "closing";
  left: "none" | "opening" | "closing";
  right: "none" | "opening" | "closing";
  bottom: "none" | "opening" | "closing";
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [panels, setPanels] = useState<PanelState>({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });
  const [panelAnimation, setPanelAnimation] = useState<PanelAnimation>({
    top: "none",
    left: "none",
    right: "none",
    bottom: "none",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnimationEnd = useCallback((panel: keyof PanelState) => {
    setPanelAnimation((prev) => ({
      ...prev,
      [panel]: "none",
    }));
  }, []);

  const togglePanel = useCallback((panel: keyof PanelState) => {
    setPanels((prev) => {
      const isCurrentlyOpen = prev[panel];

      // Si le panneau est ouvert, on le ferme
      if (isCurrentlyOpen) {
        setPanelAnimation((prev) => ({
          ...prev,
          [panel]: "closing",
        }));

        setTimeout(() => {
          setPanels((current) => ({
            ...current,
            [panel]: false,
          }));
        }, 400); // Durée de l'animation

        return prev;
      }

      // Si un autre panneau est ouvert, on le ferme d'abord
      const openPanel = Object.entries(prev).find(([, value]) => value);
      if (openPanel) {
        const openPanelKey = openPanel[0] as keyof PanelState;
        setPanelAnimation((prev) => ({
          ...prev,
          [openPanelKey]: "closing",
        }));

        setTimeout(() => {
          setPanels((current) => ({
            ...current,
            [openPanelKey]: false,
          }));

          // Puis on ouvre le nouveau panneau
          setPanels((current) => ({
            ...current,
            [panel]: true,
          }));
          setPanelAnimation((current) => ({
            ...current,
            [panel]: "opening",
          }));
        }, 400);

        return prev;
      }

      // Si aucun panneau n'est ouvert, on ouvre directement
      setPanelAnimation((prev) => ({
        ...prev,
        [panel]: "opening",
      }));

      return {
        ...prev,
        [panel]: true,
      };
    });
  }, []);

  if (!mounted) {
    return (
      <div className="main-layout">
        <MainLayout mainContentState="normal">
          <div className="content-container">
            <div className="center-content">{children}</div>
          </div>
        </MainLayout>
      </div>
    );
  }

  return (
    <div className="main-layout">
      <Toggles panels={panels} onToggle={togglePanel} />

      <div
        className={`panel top-panel ${panels.top ? "open" : ""} ${panelAnimation.top !== "none" ? panelAnimation.top : ""}`}
        onAnimationEnd={() => handleAnimationEnd("top")}
      >
        <TopPanel isOpen={panels.top} />
      </div>

      <MainLayout mainContentState="normal">
        <div
          className={`panel left-panel ${panels.left ? "open" : ""} ${panelAnimation.left !== "none" ? panelAnimation.left : ""}`}
          onAnimationEnd={() => handleAnimationEnd("left")}
        >
          <LeftPanel isOpen={panels.left} />
        </div>

        <div
          className={`panel right-panel ${panels.right ? "open" : ""} ${panelAnimation.right !== "none" ? panelAnimation.right : ""}`}
          onAnimationEnd={() => handleAnimationEnd("right")}
        >
          <RightPanel isOpen={panels.right} />
        </div>

        <div className="content-container">
          <div className="center-content">{children}</div>
        </div>
      </MainLayout>

      <div
        className={`panel bottom-panel ${panels.bottom ? "open" : ""} ${panelAnimation.bottom !== "none" ? panelAnimation.bottom : ""}`}
        onAnimationEnd={() => handleAnimationEnd("bottom")}
      >
        <BottomPanel isOpen={panels.bottom} />
      </div>
    </div>
  );
}
