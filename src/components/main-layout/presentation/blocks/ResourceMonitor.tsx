"use client";

interface ResourceItem {
  name: string;
  usage: number;
}

const resources: ResourceItem[] = [
  { name: "CPU", usage: 45 },
  { name: "Mémoire", usage: 60 },
  { name: "Stockage", usage: 75 },
];

export default function ResourceMonitor() {
  return (
    <div className="dashboard-item">
      <h2 className="text-theme-primary font-semibold mb-2">Ressources</h2>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.name} className="resource-item">
            <span className="text-theme-primary">{resource.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${resource.usage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
