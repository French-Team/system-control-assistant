"use client";

interface ActivityItem {
  time: string;
  text: string;
}

const activities: ActivityItem[] = [
  { time: "09:45", text: "Mise à jour système effectuée" },
  { time: "09:30", text: "Sauvegarde automatique" },
  { time: "09:15", text: "Vérification de sécurité" },
];

export default function ActivityLog() {
  return (
    <div className="dashboard-item">
      <h2 className="text-theme-primary font-semibold mb-2">Activité</h2>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <span className="activity-time">{activity.time}</span>
            <span className="text-theme-primary">{activity.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
