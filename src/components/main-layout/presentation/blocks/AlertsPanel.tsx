"use client";

import { useEffect, useState } from "react";
import "../styles/alerts-panel.css";

interface Alert {
  id: number;
  message: string;
  severity: "info" | "warning" | "error";
  timestamp: string;
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const alertTemplates = [
  // Infos
  { message: "Sauvegarde automatique effectuée", severity: "info" },
  { message: "Mise à jour disponible", severity: "info" },
  { message: "Synchronisation terminée", severity: "info" },
  // Warnings
  { message: "Espace disque faible", severity: "warning" },
  { message: "Performances réduites", severity: "warning" },
  { message: "Connexion instable", severity: "warning" },
  // Errors
  { message: "Échec de la sauvegarde", severity: "error" },
  { message: "Erreur de connexion", severity: "error" },
  { message: "Service indisponible", severity: "error" },
] as const;

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // Générer une alerte toutes les 5 secondes
    const interval = setInterval(() => {
      const now = new Date();
      const template = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
      
      const newAlert: Alert = {
        id: Date.now(),
        message: template.message,
        severity: template.severity,
        timestamp: formatTime(now),
      };

      setAlerts(prev => {
        // Garder maximum 3 alertes
        const updated = [newAlert, ...prev].slice(0, 3);
        
        // Si nouvelle alerte critique, la mettre en première position
        if (newAlert.severity === "error") {
          return [newAlert, ...prev.filter(a => a.id !== newAlert.id)].slice(0, 3);
        }
        
        return updated;
      });
    }, 5000);

    // Ajouter une première alerte
    const initialAlert: Alert = {
      id: Date.now(),
      message: "Système opérationnel",
      severity: "info",
      timestamp: formatTime(new Date()),
    };
    setAlerts([initialAlert]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-1">Alertes</h2>
      <div className="alerts-list">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-item alert-${alert.severity}`}
          >
            <div className="alert-content">
              <span className="alert-time">{alert.timestamp}</span>
              <span className="alert-message">{alert.message}</span>
            </div>
            <div className="alert-indicator" />
          </div>
        ))}
      </div>
    </div>
  );
}
