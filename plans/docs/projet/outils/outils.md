# Outils Système

> Navigation rapide :
>
> - [Brief du Projet](../projet.md)
> - [Liste des Besoins](../besoins.md)
> - [Documentation Technique](../../docs-structure.md)
>
> Composants liés :
>
> - [Panels](../panels/panels.md) (intégration)
> - [Dashboard](../dashboard/dashboard.md) (widgets)
> - [Thèmes](../themes/themes.md) (gestionnaire)

## Description

Les outils système de DISPO sont un ensemble de mini-applications intégrées dans le [panel supérieur](../panels/panels.md), offrant des fonctionnalités rapides et essentielles.

## Architecture

### Diagramme du Système d'Outils

```mermaid
graph TB
    subgraph ToolSystem
        TP[ToolProvider]
        TM[ToolManager]
        TR[ToolRegistry]
    end

    subgraph Tools
        NT[Navigation Tools]
        ST[System Tools]
        UT[User Tools]
    end

    subgraph Integration
        PS[Panel System]
        DS[Dashboard System]
        TS[Theme System]
    end

    TP --> TM
    TM --> TR

    TR --> NT
    TR --> ST
    TR --> UT

    NT --> PS
    ST --> DS
    UT --> TS

    classDef system fill:#bbf,stroke:#333,stroke-width:2px
    classDef tools fill:#bfb,stroke:#333,stroke-width:2px
    classDef integration fill:#fbb,stroke:#333,stroke-width:2px

    class TP,TM,TR system
    class NT,ST,UT tools
    class PS,DS,TS integration
```

### Cycle de Vie d'un Outil

```mermaid
stateDiagram-v2
    [*] --> Registered
    Registered --> Initialized: Mount
    Initialized --> Active: Open
    Active --> Inactive: Close
    Inactive --> Active: Reopen
    Inactive --> Destroyed: Unmount
    Destroyed --> [*]

    Active --> Background: Minimize
    Background --> Active: Restore
```

### Flux de Communication

```mermaid
sequenceDiagram
    participant U as User
    participant T as Tool
    participant P as Panel
    participant S as State
    participant E as Events

    U->>T: Open Tool
    T->>P: Request Panel
    P->>S: Update State
    S->>E: Broadcast Change
    E->>T: Update Tool State
    T->>U: Show Interface
```

### Structure de Base

```typescript
interface SystemToolProps {
  id: string;
  icon: IconComponent;
  label: string;
  onClick?: () => void;
  panel?: React.ReactNode;
  shortcut?: string;
}

interface ToolPanelProps {
  isOpen: boolean;
  onClose: () => void;
  position: "top" | "right";
  children: React.ReactNode;
}
```

## Types d'Outils

### 1. Outils de Navigation

- Recherche rapide
- Navigation par dossiers
- Historique récent
- Favoris

### 2. Outils Système

- Gestionnaire de thèmes → [Voir Système de Thèmes](../themes/themes.md)
- Moniteur de performances
- Gestionnaire de notifications
- Paramètres système

### 3. Outils Utilisateur

- Notes rapides → [Voir Widgets Dashboard](../dashboard/dashboard.md#types-de-composants)
- Calculatrice
- Horloge/Timer
- Todo list

## Implémentation

### Gestion des États

```typescript
interface ToolState {
  isOpen: boolean;
  position: PanelPosition;
  data: any;
}

const { openTool, closeTool, toggleTool } = useSystemTools();
```

### Événements

- Click/Touch
- Raccourcis clavier
- Drag and drop
- Interactions contextuelles

### Persistance

- État des outils
- Préférences utilisateur
- Données locales
- Synchronisation

## Interface Utilisateur

### Barre d'Outils

- Icônes claires
- Tooltips informatifs
- Indicateurs d'état
- Animations fluides

### Panels

- Ouverture/fermeture fluide
- Redimensionnement possible
- Position configurable
- Thème cohérent

### Interactions

- Drag and drop
- Redimensionnement
- Minimisation/Maximisation
- Raccourcis clavier

## Fonctionnalités

### Système de Notifications

- Notifications temps réel
- Priorités configurables
- Groupement intelligent
- Actions rapides

### Recherche Globale

- Recherche instantanée
- Filtres avancés
- Historique
- Suggestions

### Gestionnaire de Thèmes

- Prévisualisation en direct
- Import/Export
- Personnalisation
- Préréglages

## Bonnes Pratiques

### Performance

- Chargement à la demande
- Optimisation des ressources
- Cache intelligent
- Nettoyage automatique

### Accessibilité

- Navigation clavier
- Support lecteur d'écran
- Contraste suffisant
- Messages d'état clairs

### Maintenance

- Tests automatisés
- Documentation claire
- Versioning des outils
- Mises à jour simples

## Développement

### Création d'Outils

```typescript
const newTool = createSystemTool({
  id: "my-tool",
  icon: MyToolIcon,
  label: "Mon Outil",
  panel: MyToolPanel,
  shortcut: "Alt+T",
});
```

### Extension

- API publique
- Système de plugins
- Hooks personnalisés
- Documentation développeur
