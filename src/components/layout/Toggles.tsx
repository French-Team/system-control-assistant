'use client';

interface TogglesProps {
  panels: {
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
  };
  onToggle: (panel: 'top' | 'left' | 'right' | 'bottom') => void;
}

export default function Toggles({ panels, onToggle }: TogglesProps) {
  return (
    <div className="toggles-container">
      {/* Top Toggle */}
      <button 
        type="button" 
        className={`toggle-bar top ${panels.top ? 'active' : ''} text-theme-span`}
        onClick={() => onToggle('top')}
        aria-label="Toggle top panel"
      >
        <span>Panneau Supérieur</span>
      </button>

      {/* Left Toggle */}
      <button 
        type="button" 
        className={`toggle-bar left ${panels.left ? 'active' : ''} text-theme-span`}
        onClick={() => onToggle('left')}
        aria-label="Toggle left panel"
      >
        <span>Panneau Gauche</span>
      </button>

      {/* Right Toggle */}
      <button 
        type="button" 
        className={`toggle-bar right ${panels.right ? 'active' : ''} text-theme-span`}
        onClick={() => onToggle('right')}
        aria-label="Toggle right panel"
      >
        <span>Panneau Droit</span>
      </button>

      {/* Bottom Toggle */}
      <button 
        type="button" 
        className={`toggle-bar bottom ${panels.bottom ? 'active' : ''} text-theme-span`}
        onClick={() => onToggle('bottom')}
        aria-label="Toggle bottom panel"
      >
        <span>Panneau Inférieur</span>
      </button>
    </div>
  );
} 