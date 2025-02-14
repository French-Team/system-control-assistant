# Documentation du Package.json

## Informations Projet

```json
{
  "name": "dispo",
  "version": "1.0.0",
  "description": "Interface modulaire avec système de panels et thèmes dynamiques",
  "author": {
    "name": "Équipe DISPO",
    "email": "team@dispo.dev"
  },
  "license": "MIT",
  "private": true
}
```

## Scripts

### Commandes de Développement

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "dev:clean": "npm run lint && npm run lint:fix && npm run dev",
    "dev:full": "npm run format && npm run lint:fix && npm run dev",
    "check:all": "npm run lint && npm run type-check && npm run test",
    "prepare:dev": "npm run format && npm run lint:fix && npm run type-check",
    "dev:complete": "npm run format && npm run lint && npm run lint:fix && npm run type-check && npm run test && npm run test:coverage && npm run dev"
  }
}
```

### Commandes de Test

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress run",
    "test:e2e:dev": "cypress open"
  }
}
```

## Dépendances

### Production

```json
{
  "dependencies": {
    "next": "15.1.7",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "@headlessui/react": "2.2.0",
    "@heroicons/react": "2.2.0",
    "clsx": "2.1.1",
    "lucide-react": "0.475.0",
    "tailwind-merge": "3.0.1"
  }
}
```

### Développement

```json
{
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@types/node": "^22.13.4",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@types/jest": "^29.5.14",
    "autoprefixer": "^10.4.20",
    "cypress": "^14.0.3",
    "eslint": "^9.20.1",
    "eslint-config-next": "15.1.7",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "postcss": "^8.5.2",
    "postcss-preset-env": "^10.1.4",
    "prettier": "^3.5.1",
    "tailwindcss": "^4.0.6",
    "typescript": "^5.7.3"
  }
}
```

## Configuration

### TypeScript

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### ESLint

```json
{
  "eslintConfig": {
    "extends": [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  }
}
```

### Jest

```json
{
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
}
```

## Commandes Principales

### Développement

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm start` : Démarre le serveur de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier

### Tests

- `npm test` : Lance les tests unitaires
- `npm run test:watch` : Lance les tests en mode watch
- `npm run test:coverage` : Génère un rapport de couverture
- `npm run test:e2e` : Lance les tests end-to-end
- `npm run test:e2e:dev` : Ouvre Cypress en mode développement

### Vérification Types

- `npm run type-check` : Vérifie les types TypeScript

## Bonnes Pratiques

1. **Versions des Dépendances**

   - Utiliser des versions fixes pour les dépendances critiques
   - Utiliser des versions avec caret (^) pour les dépendances de développement
   - Mettre à jour régulièrement les dépendances

2. **Scripts**

   - Nommer les scripts de manière claire et cohérente
   - Documenter les scripts complexes
   - Utiliser des scripts composés pour les tâches courantes

3. **Configuration**

   - Séparer la configuration de développement et de production
   - Utiliser des variables d'environnement pour les valeurs sensibles
   - Maintenir la cohérence entre les différentes configurations

4. **Maintenance**
   - Vérifier régulièrement les mises à jour de sécurité
   - Nettoyer les dépendances inutilisées
   - Documenter les changements majeurs

### Commandes Spéciales

```json
{
  "scripts": {
    "dev:clean": "Lance le lint, corrige les erreurs puis démarre le serveur de développement",
    "dev:full": "Formate le code, corrige les erreurs de lint puis démarre le serveur",
    "check:all": "Vérifie le lint, les types et lance les tests",
    "prepare:dev": "Prépare l'environnement de développement (format, lint, types)",
    "dev:complete": "Séquence complète : format → lint → fix → types → tests → coverage → dev"
  }
}
```
