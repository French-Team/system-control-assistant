"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/terminal.css";

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error' | 'warning' | 'success';
  content: string;
  timestamp: string;
}

export default function Block3b() {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const startDelay = useRef(0);

  // Commandes et sorties simulées pour le contrôle standard secondaire
  const commands = [
    { cmd: 'check protocol', output: 'Protocoles de communication validés', type: 'success' },
    { cmd: 'verify config', output: 'Configuration système conforme', type: 'output' },
    { cmd: 'test connection', output: 'Latence de connexion élevée', type: 'warning' },
    { cmd: 'scan system', output: 'Erreur système détectée: module 2', type: 'error' },
    { cmd: 'monitor health', output: 'État du système: optimal', type: 'success' },
    { cmd: 'analyze logs', output: 'Anomalies détectées dans les logs', type: 'warning' },
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
        addLine('output', 'Contrôle standard secondaire initialisé...');
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
          <div className="terminal-title">Contrôle Standard II</div>
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