"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/terminal.css";

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error' | 'warning' | 'success';
  content: string;
  timestamp: string;
}

export default function Block6() {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const startDelay = useRef(0);

  // Commandes et sorties simulées pour la maintenance
  const commands = [
    { cmd: 'backup status', output: 'Sauvegarde quotidienne effectuée', type: 'success' },
    { cmd: 'clean cache', output: 'Nettoyage du cache: 2.5GB libérés', type: 'output' },
    { cmd: 'check updates', output: 'Mises à jour disponibles: 3', type: 'warning' },
    { cmd: 'verify integrity', output: 'Erreur d\'intégrité détectée', type: 'error' },
    { cmd: 'optimize db', output: 'Base de données optimisée', type: 'success' },
    { cmd: 'rotate logs', output: 'Rotation des logs effectuée', type: 'output' },
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
    // Initialiser le délai uniquement côté client
    startDelay.current = Math.floor(Math.random() * 2000);
  }, []);

  useEffect(() => {
    if (!mounted) {
      const timer = setTimeout(() => {
        setMounted(true);
        addLine('output', 'Système de maintenance initialisé...');
      }, startDelay.current);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      addLine('command', randomCommand.cmd);
      
      setTimeout(() => {
        addLine(randomCommand.type as TerminalLine['type'], randomCommand.output);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div className="dashboard-item">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          <div className="terminal-title">Unité Maintenance</div>
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
