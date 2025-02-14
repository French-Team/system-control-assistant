# Exemples d'Utilisation des Outils Système

## 1. Création d'un Outil Simple

```typescript
// components/tools/Calculator.tsx
// Utilise React v19.0.0, TypeScript v5.7.3 et lucide-react v0.475.0
'use client';

import { createTool } from '@/lib/tools';
import { CalculatorIcon } from 'lucide-react';

export const Calculator = createTool({
  id: 'calculator',
  name: 'Calculatrice',
  icon: CalculatorIcon,
  shortcut: 'Alt+C',

  component: function CalculatorTool() {
    return (
      <div className="p-4 bg-panel">
        <h2 className="text-lg font-bold mb-4">Calculatrice</h2>
        {/* Contenu de la calculatrice */}
      </div>
    );
  }
});
```

## 2. Outil avec État et Panel

```typescript
// components/tools/Notes.tsx
'use client';

import { useState } from 'react';
import { createTool } from '@/lib/tools';
import { Panel } from '@/components/ui/panel';
import { StickyNoteIcon } from 'lucide-react';

export const Notes = createTool({
  id: 'notes',
  name: 'Notes',
  icon: StickyNoteIcon,
  shortcut: 'Alt+N',

  component: function NotesTool() {
    const [notes, setNotes] = useState<string[]>([]);
    const [isEditing, setIsEditing] = useState(false);

    return (
      <Panel position="right" title="Notes">
        <div className="p-4 space-y-4">
          {notes.map((note, index) => (
            <div key={index} className="bg-card p-2 rounded">
              {note}
            </div>
          ))}

          <button
            onClick={() => setIsEditing(true)}
            className="btn-primary"
          >
            Nouvelle Note
          </button>
        </div>
      </Panel>
    );
  }
});
```

## 3. Gestionnaire d'Outils

```typescript
// components/tools/ToolManager.tsx
'use client';

import { useTools } from '@/hooks/useTools';
import { ToolBar } from '@/components/tools/ToolBar';

export function ToolManager() {
  const {
    tools,
    activeTools,
    openTool,
    closeTool
  } = useTools();

  return (
    <>
      <ToolBar
        tools={tools}
        activeTools={activeTools}
        onToolClick={openTool}
      />

      {activeTools.map(tool => (
        <tool.component
          key={tool.id}
          onClose={() => closeTool(tool.id)}
        />
      ))}
    </>
  );
}
```

## 4. Intégration avec les Raccourcis

```typescript
// hooks/useToolShortcuts.ts
import { useEffect } from "react";
import { useTools } from "@/hooks/useTools";

export function useToolShortcuts() {
  const { tools, toggleTool } = useTools();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tool = tools.find((t) => t.shortcut === `${e.key}+${e.code}`);
      if (tool) {
        e.preventDefault();
        toggleTool(tool.id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tools, toggleTool]);
}
```

## 5. Système de Notifications

```typescript
// components/tools/Notifications.tsx
'use client';

import { createTool } from '@/lib/tools';
import { useNotifications } from '@/hooks/useNotifications';
import { BellIcon } from 'lucide-react';

export const Notifications = createTool({
  id: 'notifications',
  name: 'Notifications',
  icon: BellIcon,
  shortcut: 'Alt+B',

  component: function NotificationsTool() {
    const {
      notifications,
      markAsRead,
      clearAll
    } = useNotifications();

    return (
      <Panel position="right" title="Notifications">
        <div className="p-4 space-y-2">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className="bg-card p-2 rounded"
              onClick={() => markAsRead(notification.id)}
            >
              {notification.message}
            </div>
          ))}

          <button
            onClick={clearAll}
            className="btn-secondary w-full"
          >
            Tout effacer
          </button>
        </div>
      </Panel>
    );
  }
});
```

## 6. Configuration Globale

```typescript
// config/tools.ts
import { Calculator } from '@/components/tools/Calculator';
import { Notes } from '@/components/tools/Notes';
import { Notifications } from '@/components/tools/Notifications';
import type { ToolConfig } from '@/types/tools';

export const toolsConfig: ToolConfig[] = [
  {
    ...Calculator,
    position: 'top',
    permissions: ['user'],
  },
  {
    ...Notes,
    position: 'right',
    permissions: ['user'],
  },
  {
    ...Notifications,
    position: 'top',
    permissions: ['user'],
    autoLoad: true,
  }
];

// app/providers.tsx
import { ToolProvider } from '@/components/tools/ToolProvider';
import { toolsConfig } from '@/config/tools';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToolProvider tools={toolsConfig}>
      {children}
    </ToolProvider>
  );
}
```

Ces exemples montrent l'implémentation complète des outils avec :

- Création d'outils simples et complexes
- Gestion de l'état et des panels
- Système de raccourcis
- Notifications
- Configuration globale
- Intégration dans l'application
