"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/terminal.css";

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error' | 'warning' | 'success';
  content: string;
  timestamp: string;
}

export default function Block3() {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const startDelay = useRef(0);

  // Commandes et sorties simulées pour la sécurité
  const commands = [
    { cmd: 'firewall status', output: 'Firewall actif et opérationnel', type: 'success' },
    { cmd: 'scan ports', output: 'Tous les ports critiques sont sécurisés', type: 'output' },
    { cmd: 'check access', output: 'Tentative d\'accès non autorisé détectée', type: 'warning' },
    { cmd: 'verify auth', output: 'Échec d\'authentification multiple détecté', type: 'error' },
    { cmd: 'update rules', output: 'Règles de sécurité mises à jour', type: 'success' },
    { cmd: 'monitor traffic', output: 'Trafic réseau anormal détecté', type: 'warning' },
  ];

  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const addLine = (type: TerminalLine['type'], content: string) => {
    const newLine: TerminalLine = {
      id: Date.now(),
      type,
      content,
      timestamp: getTimestamp(),
    };

    setLines(prev => [...prev, newLine]);

    if (contentRef.current) {
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      }, 100);
    }
  };

  useEffect(() => {
    setMounted(true);
    // Initialiser le délai uniquement côté client
    startDelay.current = Math.floor(Math.random() * 2000);

    const timer = setTimeout(() => {
      addLine('output', 'Système de sécurité initialisé...');

      const interval = setInterval(() => {
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        addLine('command', randomCommand.cmd);
        
        setTimeout(() => {
          addLine(randomCommand.type as TerminalLine['type'], randomCommand.output);
        }, 500);
      }, 4000);

      return () => clearInterval(interval);
    }, startDelay.current);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-item">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          <div className="terminal-title">Contrôle Standard</div>
        </div>
        
        <div className="terminal-content" ref={contentRef}>
          {lines.map(line => (
            <div key={line.id} className="terminal-line">
              <span className="terminal-timestamp">[{line.timestamp}]</span>
              {line.type === 'command' ? (
                <>
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">{line.content}</span>
                </>
              ) : (
                <span className={`terminal-${line.type}`}>{line.content}</span>
              )}
            </div>
          ))}
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
