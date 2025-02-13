'use client';

import { useState } from 'react';
import TopHeader from './header/Header';
import OutilSysteme from './outils-panel-top/Outils-nom-de-l-outil1';
import './top-layout.css';

interface TopPanelProps {
  isOpen: boolean;
}

export default function TopPanel({ isOpen }: TopPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <div className="top-layout">
        <TopHeader />
        
        <div className="tools-container">
          {/* Outils principaux */}
          <OutilSysteme />
          
          {/* Autres outils à ajouter ici */}
          {/* Exemple : 
          <OutilReseau />
          <OutilSecurite />
          <OutilPerformance />
          */}
        </div>
      </div>
    </div>
  );
} 