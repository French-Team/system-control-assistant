'use client';

import { ReactNode, useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MainLayout from './MainLayout';
import TopPanel from '../top-layout/TopPanel';
import LeftPanel from './panels/LeftPanel';
import RightPanel from './panels/RightPanel';
import BottomPanel from './panels/BottomPanel';
import Toggles from './Toggles';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [panels, setPanels] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mainContentState, setMainContentState] = useState<'normal' | 'panel-closing' | 'panel-opening'>('normal');

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePanel = useCallback((panel: keyof typeof panels) => {
    if (isTransitioning) return;

    setPanels((prev) => {
      if (prev[panel]) {
        return {
          ...prev,
          [panel]: false,
        };
      }

      const isAnotherPanelOpen = Object.values(prev).some((isOpen) => isOpen);
      
      if (isAnotherPanelOpen) {
        setIsTransitioning(true);
        
        setPanels((current) => ({
          top: false,
          left: false,
          right: false,
          bottom: false,
        }));

        setTimeout(() => {
          setMainContentState('panel-closing');
        }, 300);

        setTimeout(() => {
          setMainContentState('panel-opening');
        }, 600);

        setTimeout(() => {
          setPanels((current) => ({
            top: false,
            left: false,
            right: false,
            bottom: false,
            [panel]: true,
          }));
          setMainContentState('normal');
          setIsTransitioning(false);
        }, 900);

        return prev;
      }
      
      return {
        top: false,
        left: false,
        right: false,
        bottom: false,
        [panel]: true,
      };
    });
  }, [isTransitioning]);

  if (!mounted) {
    return (
      <div className="main-layout">
        <MainLayout 
          panels={{
            top: false,
            left: false,
            right: false,
            bottom: false,
          }}
          onToggle={() => {}}
          mainContentState="normal"
        >
          <div className="content-container">
            <div className="center-content">
              {children}
            </div>
          </div>
        </MainLayout>
      </div>
    );
  }

  return (
    <div className="main-layout">
      <Toggles panels={panels} onToggle={togglePanel} />
      
      <div className={`panel top-panel ${panels.top ? 'open' : ''}`}>
        <TopPanel isOpen={panels.top} />
      </div>

      <MainLayout 
        key={pathname}
        panels={panels}
        onToggle={togglePanel}
        mainContentState={mainContentState}
      >
        <div className={`panel left-panel ${panels.left ? 'open' : ''}`}>
          <LeftPanel isOpen={panels.left} />
        </div>
        
        <div className={`panel right-panel ${panels.right ? 'open' : ''}`}>
          <RightPanel isOpen={panels.right} />
        </div>

        <div className="content-container">
          <div className="center-content">
            {children}
          </div>
        </div>
      </MainLayout>

      <div className={`panel bottom-panel ${panels.bottom ? 'open' : ''}`}>
        <BottomPanel isOpen={panels.bottom} />
      </div>
    </div>
  );
} 