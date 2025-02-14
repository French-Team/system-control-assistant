"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/terminal.css";

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error' | 'warning' | 'success';
  content: string;
  timestamp: string;
}

export default function Block4() {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const startDelay = useRef(0);

  // Commandes et sorties simulées pour les performances
  const commands = [
    { cmd: 'check cpu', output: 'CPU: Usage optimal - 45%', type: 'success' },
    { cmd: 'memory status', output: 'Mémoire: 75% utilisée - Attention', type: 'warning' },
    { cmd: 'disk speed', output: 'Vitesse d\'écriture: 450MB/s', type: 'output' },
    { cmd: 'network load', output: 'Latence réseau élevée: 150ms', type: 'warning' },
    { cmd: 'gpu temp', output: 'Température GPU critique: 85°C', type: 'error' },
    { cmd: 'system load', output: 'Charge système normale: 1.5', type: 'success' },
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
        addLine('output', 'Moniteur de performance initialisé...');
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
          <div className="terminal-title">Contrôle Performance</div>
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
