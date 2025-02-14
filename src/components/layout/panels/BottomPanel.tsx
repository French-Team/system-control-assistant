"use client";

interface PanelProps {
  isOpen: boolean;
}

export default function BottomPanel({ isOpen }: PanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <h2 className="text-theme-h2 font-bold mb-4">Panneau Inférieur</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Logs</h3>
          <p className="text-theme-p">Journal système</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Performance</h3>
          <p className="text-theme-p">Métriques système</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Ressources</h3>
          <p className="text-theme-p">Utilisation des ressources</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Tâches</h3>
          <p className="text-theme-p">Tâches en cours</p>
        </div>
      </div>
    </div>
  );
}
