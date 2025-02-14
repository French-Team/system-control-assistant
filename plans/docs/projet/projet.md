# DISPO - Brief du Projet

> Navigation rapide :
>
> - [Liste des Besoins](./besoins.md)
> - [Système de Panels](./panels/panels.md)
> - [Système de Thèmes](./themes/themes.md)
> - [Dashboard Modulaire](./dashboard/dashboard.md)
> - [Outils Système](./outils/outils.md)
> - [Structure de la Documentation](../docs-structure.md)

## Vue d'Ensemble

DISPO est une application web moderne construite avec Next.js 15 et React 19, conçue pour offrir une interface utilisateur flexible et modulaire. Le projet met l'accent sur une expérience utilisateur fluide avec un système de thèmes dynamique et une architecture de composants évolutive.

## Architecture du Système

```mermaid
graph TB
    subgraph Interface
        P[Panels System]
        D[Dashboard]
        T[Theme System]
        O[Tools System]
    end

    subgraph Core
        RC[React Context]
        TS[TypeScript]
        NR[Next.js Router]
    end

    subgraph Styling
        TW[Tailwind CSS]
        PC[PostCSS]
        CV[CSS Variables]
    end

    P --> RC
    D --> RC
    T --> RC
    O --> RC

    T --> CV
    D --> TW
    P --> TW

    RC --> TS
    RC --> NR

    TW --> PC
    CV --> PC

    classDef core fill:#f9f,stroke:#333,stroke-width:2px
    classDef interface fill:#bbf,stroke:#333,stroke-width:2px
    classDef styling fill:#bfb,stroke:#333,stroke-width:2px

    class RC,TS,NR core
    class P,D,T,O interface
    class TW,PC,CV styling
```

## Flux de Données

```mermaid
sequenceDiagram
    participant U as User
    participant P as Panels
    participant D as Dashboard
    participant T as Theme
    participant S as State

    U->>P: Interact with Panel
    P->>S: Update State
    S->>D: Reflect Changes

    U->>T: Toggle Theme
    T->>S: Update Theme State
    S->>P: Update Panel Styles
    S->>D: Update Dashboard Styles
```

## Caractéristiques Principales

### Interface Modulaire

- Dashboard personnalisable avec composants modulaires
- Système de panels coulissants dans quatre directions (haut, bas, gauche, droite)
- Interface adaptative avec support des thèmes clair/sombre

### Architecture Technique

- Base Next.js 15+ avec App Router pour un routage optimisé
- Support TypeScript complet pour une meilleure maintenabilité
- Système CSS moderne avec Tailwind et PostCSS
- Gestion avancée des thèmes via variables CSS

### Expérience Utilisateur

- Design réactif et adaptatif
- Transitions fluides entre les états
- Support du mode sombre natif
- Interface utilisateur cohérente et intuitive

## Vision du Projet

DISPO vise à fournir une plateforme flexible et extensible pour la création d'interfaces utilisateur modulaires. L'accent est mis sur :

- La modularité et la réutilisabilité des composants
- La performance et l'optimisation
- L'expérience utilisateur fluide
- La maintenabilité du code

## Objectifs Techniques

1. Maintenir une base de code TypeScript stricte
2. Assurer une hydratation React sans faille
3. Optimiser les performances CSS
4. Faciliter l'extension du système de thèmes
5. Garantir une documentation complète
