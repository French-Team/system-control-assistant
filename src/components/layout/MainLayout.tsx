'use client';

import { ReactNode, useState } from 'react';
import './layout.css';

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [panels, setPanels] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });

  const togglePanel = (panel: keyof typeof panels) => {
    setPanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  return (
    <div className="main-layout">
      <div className={`panel top-panel ${panels.top ? 'open' : 'closed'}`}>
        <button onClick={() => togglePanel('top')}>Toggle Top</button>
      </div>
      
      <div className="content-wrapper">
        <div className={`panel left-panel ${panels.left ? 'open' : 'closed'}`}>
          <button onClick={() => togglePanel('left')}>Toggle Left</button>
        </div>
        
        <div className="center-content">
          {children}
        </div>
        
        <div className={`panel right-panel ${panels.right ? 'open' : 'closed'}`}>
          <button onClick={() => togglePanel('right')}>Toggle Right</button>
        </div>
      </div>
      
      <div className={`panel bottom-panel ${panels.bottom ? 'open' : 'closed'}`}>
        <button onClick={() => togglePanel('bottom')}>Toggle Bottom</button>
      </div>
    </div>
  );
} 