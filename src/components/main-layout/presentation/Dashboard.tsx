"use client";

import SystemStatus from "./blocks/SystemStatus";
import ResourceMonitor from "./blocks/ResourceMonitor";
import ActivityLog from "./blocks/ActivityLog";
import AlertsPanel from "./blocks/AlertsPanel";
import Block1 from "./blocks/Block1";
import Block2 from "./blocks/Block2";
import Block3 from "./blocks/Block3";
import Block4 from "./blocks/Block4";
import Block5 from "./blocks/Block5";
import Block6 from "./blocks/Block6";
import Block7 from "./blocks/Block7";
import Block8 from "./blocks/Block8";
import Block9 from "./blocks/Block9";
import Block10 from "./blocks/Block10";
import Block11 from "./blocks/Block11";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="text-theme-h1 font-semibold">
          Centre de Contrôle DISPO
        </h1>
        <p className="text-theme-p">
          Système de supervision et de contrôle en temps réel
        </p>
      </div>

      <div className="dashboard-grid">
        <SystemStatus />
        <ResourceMonitor />
        <ActivityLog />
        <AlertsPanel />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
        <Block11 />
      </div>
    </div>
  );
}
