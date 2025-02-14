"use client";

import { useEffect, useState } from "react";
import "../styles/digital-display.css";

interface DigitalDisplayProps {
  value: number;
  title: string;
}

const DigitalDisplay = ({ value, title }: DigitalDisplayProps) => {
  // Déterminer l'état en fonction de la valeur
  const getValueClass = () => {
    if (value >= 80) return "critical";
    if (value >= 60) return "warning";
    return "";
  };

  return (
    <div className="digital-display">
      <div className="digital-title">{title}</div>
      <div className={`digital-value ${getValueClass()}`}>
        {value.toString().padStart(3, '0')}
      </div>
      <div className="digital-bar">
        <div 
          className="digital-bar-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default function Block1() {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState({
    speed1: 0,
    speed2: 0,
    speed3: 0,
    speed4: 0,
  });

  useEffect(() => {
    setMounted(true);
    // Initialisation des valeurs uniquement côté client
    setValues({
      speed1: 45,
      speed2: 65,
      speed3: 30,
      speed4: 80,
    });

    const interval = setInterval(() => {
      setValues({
        speed1: Math.floor(Math.random() * 30) + 30, // 30-60%
        speed2: Math.floor(Math.random() * 40) + 40, // 40-80%
        speed3: Math.floor(Math.random() * 25) + 20, // 20-45%
        speed4: Math.floor(Math.random() * 35) + 55, // 55-90%
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Rendu initial avec valeurs à 0
  if (!mounted) {
    return (
      <div className="dashboard-item">
        <h2 className="text-theme-h2 font-semibold mb-2">Compteurs</h2>
        <div className="digital-displays">
          <DigitalDisplay value={0} title="CPU" />
          <DigitalDisplay value={0} title="RAM" />
          <DigitalDisplay value={0} title="GPU" />
          <DigitalDisplay value={0} title="SSD" />
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-item">
      <h2 className="text-theme-h2 font-semibold mb-2">Compteurs</h2>
      <div className="digital-displays">
        <DigitalDisplay value={values.speed1} title="CPU" />
        <DigitalDisplay value={values.speed2} title="RAM" />
        <DigitalDisplay value={values.speed3} title="GPU" />
        <DigitalDisplay value={values.speed4} title="SSD" />
      </div>
    </div>
  );
}
