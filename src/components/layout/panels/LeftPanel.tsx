'use client';

interface PanelProps {
  isOpen: boolean;
}

export default function LeftPanel({ isOpen }: PanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <h2 className="text-theme-h2 font-bold mb-4">Panneau Gauche</h2>
      <div className="space-y-4">
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Navigation</h3>
          <p className="text-theme-p">Menu principal</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Filtres</h3>
          <p className="text-theme-p">Options de filtrage</p>
        </div>
      </div>
    </div>
  );
} 