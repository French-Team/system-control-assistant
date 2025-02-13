'use client';

import { useState } from 'react';
import TopHeader from './header/Header';
import ListerOutils from './outils-panel-top/lister-outils/ListerOutils';
import './top-layout.css';

interface TopPanelProps {
  isOpen: boolean;
}

export default function TopPanel({ isOpen }: TopPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <TopHeader />
      <div className="p-4">
        <ListerOutils />
      </div>
    </div>
  );
} 