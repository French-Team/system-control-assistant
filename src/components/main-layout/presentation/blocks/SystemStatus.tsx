"use client";

import { useEffect, useState } from "react";
import "../styles/system-status.css";

interface SystemEvent {
  id: number;
  type: "info" | "warning" | "error";
  message: string;
  timestamp: string;
}

interface SystemState {
  status: "operational" | "degraded" | "critical";
  events: SystemEvent[];
}

const getStatusClass = (status: string) => {
  switch (status) {
    case "operational":
      return "status-operational";
    case "degraded":
      return "status-degraded";
    case "critical":
      return "status-critical";
    default:
      return "";
  }
};

const getEventClass = (type: string) => {
  switch (type) {
    case "info":
      return "event-info";
    case "warning":
      return "event-warning";
    case "error":
      return "event-error";
    default:
      return "";
  }
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default function SystemStatus() {
  const [systemState, setSystemState] = useState<SystemState>({
    status: "operational",
    events: [],
  });

  useEffect(() => {
    // Simulation des changements d'état
    const statusInterval = setInterval(() => {
      const random = Math.random();
      let newStatus: "operational" | "degraded" | "critical" = "operational";
      
      if (random < 0.1) {
        newStatus = "critical";
      } else if (random < 0.3) {
        newStatus = "degraded";
      }

      setSystemState(prev => ({
        ...prev,
        status: newStatus,
      }));
    }, 5000);

    // Simulation des événements
    const eventInterval = setInterval(() => {
      const now = new Date();
      const events: SystemEvent[] = [
        { id: Date.now(), type: "info", message: "Synchronisation des données", timestamp: formatTime(now) },
        { id: Date.now() + 1, type: "warning", message: "Latence réseau élevée", timestamp: formatTime(now) },
        { id: Date.now() + 2, type: "error", message: "Erreur de connexion", timestamp: formatTime(now) },
        { id: Date.now() + 3, type: "info", message: "Mise à jour système", timestamp: formatTime(now) },
        { id: Date.now() + 4, type: "warning", message: "Utilisation CPU élevée", timestamp: formatTime(now) },
      ];

      const randomEvent = events[Math.floor(Math.random() * events.length)];

      setSystemState(prev => ({
        ...prev,
        events: [randomEvent, ...prev.events].slice(0, 3),
      }));
    }, 3000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(eventInterval);
    };
  }, []);

  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-2">État du Système</h2>
      <div className={`status-indicator ${getStatusClass(systemState.status)}`}>
        <span className="text-theme-span">
          {systemState.status === "operational" && "Opérationnel"}
          {systemState.status === "degraded" && "Performance Dégradée"}
          {systemState.status === "critical" && "État Critique"}
        </span>
      </div>
      <div className="system-events mt-2">
        {systemState.events.map((event) => (
          <div key={event.id} className={`system-event ${getEventClass(event.type)}`}>
            <span className="event-time">{event.timestamp}</span>
            <span className="event-message">{event.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
