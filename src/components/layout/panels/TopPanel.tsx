'use client';

interface PanelProps {
  isOpen: boolean;
}

export default function TopPanel({ isOpen }: PanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <h2 className="text-theme-h2 font-bold mb-4">Panneau Supérieur</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Statistiques</h3>
          <p className="text-theme-p">Données en temps réel</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Alertes</h3>
          <p className="text-theme-p">Notifications système</p>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">État</h3>
          <p className="text-theme-p">État du système</p>
        </div>
      </div>
    </div>
  );
} 