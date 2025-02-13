# DISPO - Documentation Importante

## État Actuel du Projet (13/02/2024)

### Structure Principale
- Architecture Next.js 13+ avec App Router
- Gestion des thèmes (clair/sombre)
- Système de panels coulissants (top, left, right, bottom)
- Dashboard avec composants modulaires

### Dépendances Principales
- Next.js
- React
- TypeScript
- Tailwind CSS
- @heroicons/react (pour les icônes)
- tailwind-merge (pour la fusion des classes)
- postcss et autoprefixer (pour le CSS)
- postcss-preset-env (pour les fonctionnalités CSS modernes)
- lucide-react : Bibliothèque d'icônes pour les mini-outils du panel supérieur

### Organisation des Composants
```
components/
├── layout/          (Structure principale)
├── main-layout/     (Layout principal et thème)
└── top-layout/      (Outils système et panels)
```

### Points d'Attention
1. Hydratation
   - Utilisation correcte de 'use client'
   - Gestion de l'état mounted
   - Rendu cohérent serveur/client

2. CSS/Styling
   - Variables CSS pour le thème
   - Classes Tailwind personnalisées
   - Transitions et animations

### Modifications Récentes
1. Ajout de la structure top-layout
   - Nouveau système d'outils modulaire
   - Gestion des mini-outils
   - CSS dédié pour les outils

2. Configuration PostCSS
   - Ajout d'autoprefixer
   - Configuration de postcss-preset-env
   - Optimisation du CSS

3. Correction des erreurs d'hydratation
   - Amélioration de la gestion du state
   - Optimisation du rendu initial
   - Meilleure structure des composants

### À Faire
- [ ] Implémenter les outils système
- [ ] Optimiser les transitions des panels
- [ ] Améliorer la gestion des thèmes
- [ ] Documenter les composants 