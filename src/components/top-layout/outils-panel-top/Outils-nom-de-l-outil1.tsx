'use client';

import { useState } from 'react';
import './outils-panel-top.css';

export default function OutilSysteme() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="tool-item">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-theme-h3 font-semibold">Système Principal</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-theme-primary hover:text-theme-accent"
        >
          {isExpanded ? 'Réduire' : 'Agrandir'}
        </button>
      </div>

      <div className={`mini-tools-grid ${isExpanded ? 'expanded' : ''}`}>
        <div className="mini-tool">
          <h4 className="text-theme-h3 text-sm mb-2">État Système</h4>
          <span className="text-theme-span">Actif</span>
        </div>
        <div className="mini-tool">
          <h4 className="text-theme-h3 text-sm mb-2">Performance</h4>
          <span className="text-theme-span">85%</span>
        </div>
      </div>
    </div>
  );
} 