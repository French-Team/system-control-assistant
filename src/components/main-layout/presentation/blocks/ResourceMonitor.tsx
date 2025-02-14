"use client";

import "../styles/resource-monitor.css";

interface ResourceItem {
  name: string;
  usage: number;
  className: string;
}

const resources: ResourceItem[] = [
  { name: "CPU", usage: 45, className: "progress-cpu" },
  { name: "Mémoire", usage: 60, className: "progress-memory" },
  { name: "Stockage", usage: 75, className: "progress-storage" },
];

export default function ResourceMonitor() {
  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-2">Ressources</h2>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.name} className="resource-item">
            <div className="flex justify-between items-center">
              <span className="resource-title">{resource.name}</span>
              <span className="resource-value">{resource.usage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className={`progress ${resource.className}`}
                style={{ width: `${resource.usage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
