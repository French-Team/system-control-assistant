# Exemples d'Utilisation du Dashboard

## 1. Configuration du Dashboard

```typescript
// components/dashboard/DashboardLayout.tsx
// Utilise React v19.0.0 et TypeScript v5.7.3
'use client';

import { DashboardProvider } from '@/components/dashboard/DashboardProvider';
import { LayoutConfig } from '@/types/dashboard';

const defaultLayout: LayoutConfig = {
  columns: 12,
  margin: [10, 10],
  containerPadding: [10, 10],
  rowHeight: 50,
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider
      layout={defaultLayout}
      storageKey="dispo-dashboard-layout"
    >
      {children}
    </DashboardProvider>
  );
}
```

## 2. Création d'un Widget

```typescript
// components/widgets/NotesWidget.tsx
'use client';

import { useWidget } from '@/hooks/useWidget';
import { Widget } from '@/components/dashboard/Widget';

interface NotesWidgetProps {
  id: string;
  initialNotes?: string;
}

export function NotesWidget({ id, initialNotes = '' }: NotesWidgetProps) {
  const {
    position,
    isEditing,
    toggleEdit,
    updatePosition,
    saveState
  } = useWidget(id);

  return (
    <Widget
      id={id}
      position={position}
      onPositionChange={updatePosition}
      className="bg-card"
    >
      <Widget.Header>
        <h3>Notes Rapides</h3>
        <Widget.Controls onEdit={toggleEdit} />
      </Widget.Header>

      <Widget.Content>
        <textarea
          className="w-full h-full min-h-[100px] p-2"
          defaultValue={initialNotes}
          readOnly={!isEditing}
          onChange={(e) => saveState({ notes: e.target.value })}
        />
      </Widget.Content>
    </Widget>
  );
}
```

## 3. Gestionnaire de Layout

```typescript
// components/dashboard/LayoutManager.tsx
'use client';

import { useDashboard } from '@/hooks/useDashboard';
import { GridLayout } from '@/components/dashboard/GridLayout';

export function LayoutManager() {
  const {
    layout,
    widgets,
    updateLayout,
    addWidget,
    removeWidget
  } = useDashboard();

  return (
    <div className="w-full h-full">
      <GridLayout
        layout={layout}
        onLayoutChange={updateLayout}
        className="min-h-screen"
      >
        {widgets.map((widget) => (
          <div key={widget.id} data-grid={widget.position}>
            {widget.component}
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
```

## 4. Système de Persistance

```typescript
// hooks/useDashboardStorage.ts
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { DashboardState } from "@/types/dashboard";

export function useDashboardStorage(key: string) {
  return useLocalStorage<DashboardState>(key, {
    layout: {},
    widgets: [],
    settings: {
      snapToGrid: true,
      compactType: "vertical",
      preventCollision: true,
    },
  });
}

// Exemple d'utilisation
const { state, setState } = useDashboardStorage("dashboard-state");
```

## 5. Intégration avec les Panels

```typescript
// components/panels/DashboardPanel.tsx
'use client';

import { Panel } from '@/components/ui/panel';
import { useDashboard } from '@/hooks/useDashboard';
import { WidgetGallery } from '@/components/dashboard/WidgetGallery';

export function DashboardPanel() {
  const { addWidget } = useDashboard();

  return (
    <Panel position="left" title="Widgets">
      <div className="p-4">
        <WidgetGallery onSelect={addWidget} />
        <DashboardSettings />
      </div>
    </Panel>
  );
}
```

## 6. Exemple de Page Dashboard

```typescript
// app/dashboard/page.tsx
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { LayoutManager } from '@/components/dashboard/LayoutManager';
import { DashboardPanel } from '@/components/panels/DashboardPanel';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex h-screen">
        <DashboardPanel />
        <main className="flex-1">
          <LayoutManager />
        </main>
      </div>
    </DashboardLayout>
  );
}
```
