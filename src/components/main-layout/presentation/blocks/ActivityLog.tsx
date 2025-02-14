"use client";

import { useEffect, useState } from "react";
import "../styles/activity-log.css";

interface Activity {
  id: number;
  action: string;
  time: string;
  type: "create" | "update" | "delete" | "access";
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const activities: Activity[] = [
  { id: 1, action: "Création nouveau projet", type: "create", time: "" },
  { id: 2, action: "Mise à jour configuration", type: "update", time: "" },
  { id: 3, action: "Suppression ancien fichier", type: "delete", time: "" },
  { id: 4, action: "Accès base de données", type: "access", time: "" },
  { id: 5, action: "Modification paramètres", type: "update", time: "" },
  { id: 6, action: "Création utilisateur", type: "create", time: "" },
];

export default function ActivityLog() {
  const [logs, setLogs] = useState<Activity[]>([]);

  useEffect(() => {
    // Ajouter une activité aléatoire toutes les 4 secondes
    const interval = setInterval(() => {
      const now = new Date();
      const randomActivity = {
        ...activities[Math.floor(Math.random() * activities.length)],
        id: Date.now(),
        time: formatTime(now),
      };

      setLogs(prev => [randomActivity, ...prev].slice(0, 3));
    }, 4000);

    // Ajouter une première activité immédiatement
    const initialActivity = {
      ...activities[Math.floor(Math.random() * activities.length)],
      id: Date.now(),
      time: formatTime(new Date()),
    };
    setLogs([initialActivity]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-2">Activité</h2>
      <div className="activity-list">
        {logs.map((log) => (
          <div key={log.id} className={`activity-item activity-${log.type}`}>
            <span className="activity-time">{log.time}</span>
            <span className="activity-message">{log.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
