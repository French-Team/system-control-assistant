# Structure des Composants

## Hiérarchie Actuelle

```
src/
├── app/
│   ├── page.tsx (Dashboard)
│   └── layout.tsx (Configuration globale + ClientLayout)
│
└── components/
    ├── layout/
    │   ├── ClientLayout.tsx (Gestion des panels)
    │   ├── MainLayout.tsx (Structure principale)
    │   ├── Toggles.tsx
    │   └── panels/
    │       ├── TopPanel.tsx
    │       ├── LeftPanel.tsx
    │       ├── RightPanel.tsx
    │       └── BottomPanel.tsx
    │
    ├── main-layout/
    │   ├── theme.css
    │   ├── header/
    │   │    ├── Header.tsx
    │   │    └── ThemeToggle.tsx
    │   │
    │   └── presentation/
    │       ├── Dashboard.tsx
    │       ├── dashboard.css
    │       └── blocks/
    │           ├── SystemStatus.tsx
    │           ├── ResourceMonitor.tsx
    │           ├── ActivityLog.tsx
    │           ├── AlertsPanel.tsx
    │           └── Block1.tsx ... Block11.tsx
    │
    ├── top-layout/
    │   ├── top-layout.css
    │   ├── header/
    │   │    ├── Header.tsx
    │   │    └── ThemeToggle.tsx
    │   │
    │   └── outils-panel-top/
    │       ├── Outils-nom-de-l-outil1.tsx
    │       ├── Outils-nom-de-l-outil2.tsx
    │       ├── outils-panel-top.css
    │       └── Mini-outils/
    │           ├── outil-1/
    │           │    ├── Mini-outil-1_1.tsx
    │           │    └── Mini-outil-1_2.tsx
    │           ├── outil-2/
    │           │    ├── Mini-outil-2_1.tsx
    │           │    └── Mini-outil-2_2.tsx
    │           ├── outil-3/
    │           │    ├── Mini-outil-3_1.tsx
    │           │    └── Mini-outil-3_2.tsx
    │           └── outil-4/
    │                ├── Mini-outil-4_1.tsx
    │                └── Mini-outil-4_2.tsx


```
