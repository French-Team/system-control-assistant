'use client';

interface PanelProps {
  isOpen: boolean;
}

export default function RightPanel({ isOpen }: PanelProps) {
  if (!isOpen) return null;

  return (
    <div className="panel-content">
      <h2 className="text-theme-h2 font-bold mb-4">Panneau Droit</h2>
      <div className="space-y-4">
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Activité Récente</h3>
          <ul className="space-y-2">
            <li className="text-theme-p text-sm">Mise à jour du système</li>
            <li className="text-theme-p text-sm">Nouvel utilisateur connecté</li>
            <li className="text-theme-p text-sm">Sauvegarde effectuée</li>
          </ul>
        </div>
        <div className="bg-block-bg p-4 rounded-lg">
          <h3 className="text-theme-h3 mb-2">Ressources</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-theme-span">CPU</span>
              <span className="text-theme-span">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-theme-span">Mémoire</span>
              <span className="text-theme-span">60%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-theme-span">Stockage</span>
              <span className="text-theme-span">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 