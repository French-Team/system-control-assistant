'use client';

export default function SystemStatus() {
  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-2">État du Système</h2>
      <div className="status-indicator active">
        <span className="text-theme-span">Opérationnel</span>
      </div>
    </div>
  );
} 