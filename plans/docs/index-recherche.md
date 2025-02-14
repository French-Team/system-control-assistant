# Index de Recherche DISPO

## Architecture & Configuration

- [Architecture Système](projet/projet.md#architecture-du-système)
- [Configuration PostCSS](projet/projet.md#configuration-postcss)
- [Configuration Tailwind](projet/projet.md#configuration-tailwind)
- [Structure du Projet](docs-structure.md)

### Configuration Package.json

- [Informations Projet](projet/config/package-doc.md#informations-projet)

  - Nom et version
  - Description
  - Auteur et licence
  - Informations repository

- [Scripts](projet/config/package-doc.md#scripts)

  - Commandes de développement
  - Commandes de build
  - Commandes de test
  - Scripts personnalisés
  - [Commandes Spéciales](projet/config/package-doc.md#commandes-spéciales)
    - dev:clean (lint + fix + dev)
    - dev:full (format + fix + dev)
    - check:all (lint + types + tests)
    - prepare:dev (format + fix + types)
    - dev:complete (format → lint → fix → types → tests → coverage → dev)

- [Dépendances](projet/config/package-doc.md#dépendances)

  - Production
    - Next.js v15.1.7
    - React v19.0.0
    - Autres dépendances core
  - Développement
    - TypeScript v5
    - ESLint v9
    - Outils de test
  - Types et déclarations

- [Configuration](projet/config/package-doc.md#configuration)
  - TypeScript
  - ESLint
  - Jest
  - Autres configurations

## Composants Principaux

### Système de Panels

- [Documentation Panels](projet/panels/panels.md)
- [Volets Roulants](projet/ameliorations.md#animations-des-panels-volets-roulants)
  - Panel Supérieur (translation Y)
  - Panel Inférieur (translation Y)
  - Panel Gauche (translation X)
  - Panel Droit (translation X)
- [Optimisations](projet/ameliorations.md#optimisations-spécifiques)
  - Gestion du z-index
  - États de transition
  - Performance

### Système de Thèmes

- [Documentation Thèmes](projet/themes/themes.md)
- [Exemples d'Utilisation](projet/themes/exemples/theme-usage.md)
- [Diagrammes](projet/themes/themes.md#diagrammes)
- [Variables CSS](projet/themes/themes.md#variables-css)
- [Transitions](projet/ameliorations.md#thèmes-et-styles)
  - Durées de transition
  - Courbes d'animation
  - Transitions composées

### Dashboard

- [Documentation Dashboard](projet/dashboard/dashboard.md)
- [Exemples d'Utilisation](projet/dashboard/exemples/dashboard-usage.md)
- [Widgets](projet/dashboard/dashboard.md#widgets)
- [Layout & Grille](projet/dashboard/dashboard.md#layout-et-grille)
- [Animations](projet/ameliorations.md#animations-du-dashboard)
  - Déplacement des widgets
  - Redimensionnement
  - Transitions de grille

### Outils Système

- [Documentation Outils](projet/outils/outils.md)
- [Exemples d'Utilisation](projet/outils/exemples/tools-usage.md)
- [Création d'Outils](projet/outils/outils.md#création-doutils)
- [Raccourcis](projet/outils/outils.md#raccourcis)

## Guides & Tutoriels

### Installation & Setup

- [Prérequis](projet/projet.md#prérequis)
- [Installation](projet/projet.md#installation)
- [Configuration Initiale](projet/projet.md#configuration)

### Développement

- [Création de Widgets](projet/dashboard/exemples/dashboard-usage.md#création-dun-widget)
- [Création d'Outils](projet/outils/exemples/tools-usage.md#création-dun-outil-simple)
- [Gestion des Thèmes](projet/themes/exemples/theme-usage.md)
- [Animations & Transitions](projet/ameliorations.md#optimisation-des-transitions)

### Bonnes Pratiques

- [TypeScript](projet/projet.md#typescript)
- [CSS & Styling](projet/projet.md#css-styling)
- [Performance](projet/projet.md#performance)
- [Optimisations](projet/ameliorations.md#optimisations-spécifiques)

## Documentation Technique

### Types & Interfaces

- [Types Dashboard](projet/dashboard/dashboard.md#types)
- [Types Thèmes](projet/themes/themes.md#types)
- [Types Outils](projet/outils/outils.md#types)
- [Types Panels](projet/panels/panels.md#types)
- [Types Transitions](projet/ameliorations.md#gestion-des-interactions-pendant-lanimation)

### Hooks Personnalisés

- [useTheme](projet/themes/themes.md#usetheme)
- [useDashboard](projet/dashboard/dashboard.md#usedashboard)
- [useTools](projet/outils/outils.md#usetools)
- [usePanels](projet/panels/panels.md#usepanels)
- [usePanelTransition](projet/ameliorations.md#gestion-des-interactions-pendant-lanimation)

### API & Utilitaires

- [API Thèmes](projet/themes/themes.md#api)
- [API Dashboard](projet/dashboard/dashboard.md#api)
- [API Outils](projet/outils/outils.md#api)
- [API Panels](projet/panels/panels.md#api)

## Animations & Transitions

### Panels (Volets Roulants)

- [Panel Supérieur](projet/ameliorations.md#animations-des-panels-volets-roulants)
- [Panel Inférieur](projet/ameliorations.md#animations-des-panels-volets-roulants)
- [Panel Gauche](projet/ameliorations.md#animations-des-panels-volets-roulants)
- [Panel Droit](projet/ameliorations.md#animations-des-panels-volets-roulants)

### Variables CSS

- [Durées](projet/ameliorations.md#thèmes-et-styles)
- [Courbes d'Animation](projet/ameliorations.md#thèmes-et-styles)
- [Transitions Composées](projet/ameliorations.md#thèmes-et-styles)

### Optimisations

- [Z-Index](projet/ameliorations.md#optimisations-spécifiques)
- [Performance](projet/ameliorations.md#optimisations-spécifiques)
- [Gestion des États](projet/ameliorations.md#optimisations-spécifiques)

## Ressources

- [Glossaire](glossaire.md)
- [Dernières Analyses](dernieres-analyses.md)
- [Brief du Projet](projet/projet.md)
- [Liste des Besoins](projet/besoins.md)
- [Plan d'Améliorations](projet/ameliorations.md)

## Mots-clés Fréquents

### Configuration

- Next.js
- TypeScript
- Tailwind
- PostCSS
- ESLint

### Composants

- Panels
- Volets Roulants
- Dashboard
- Widgets
- Thèmes

### Animations

- Transitions
- Transformations
- Durées
- Courbes
- Performance

### Documentation

- Guides
- Exemples
- Types
- API
- Tutoriels
