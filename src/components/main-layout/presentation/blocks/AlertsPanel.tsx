"use client";

interface Alert {
  type: "info" | "warning" | "error";
  message: string;
}

const alerts: Alert[] = [
  { type: "info", message: "Maintenance prévue : 22:00" },
  { type: "warning", message: "Mise à jour disponible" },
];

export default function AlertsPanel() {
  return (
    <div className="dashboard-item">
      <h2 className="text-theme-primary font-semibold mb-2">Alertes</h2>
      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert-item ${alert.type}`}>
            <span className="text-theme-primary">{alert.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
