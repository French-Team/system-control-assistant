# Exemples d'Utilisation du Système de Thèmes

## 1. Composant avec Support de Thème

```typescript
// components/ThemeAwareButton.tsx
'use client';

import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface ThemeAwareButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const ThemeAwareButton = ({
  children,
  variant = 'primary',
  className
}: ThemeAwareButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      className={cn(
        // Classes de base
        'px-4 py-2 rounded transition-colors',
        // Classes spécifiques au variant
        variant === 'primary' && 'bg-theme-primary text-white',
        variant === 'secondary' && 'bg-theme-secondary text-theme-primary',
        // Classes spécifiques au thème
        theme === 'dark' && 'hover:bg-theme-accent',
        theme === 'light' && 'hover:bg-theme-alt-accent',
        className
      )}
    >
      {children}
    </button>
  );
};
```

## 2. Configuration du ThemeProvider

```typescript
// app/providers.tsx
'use client';

import { ThemeProvider } from '@/components/theme/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="dispo-theme"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
```

## 3. Utilisation des Variables CSS

```css
/* styles/theme-variables.css */
:root {
  /* Couleurs système */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  /* Couleurs composants */
  --panel-bg: 0 0% 98%;
  --card-bg: 0 0% 100%;

  /* Accents */
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
}

[data-theme="dark"] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;

  --panel-bg: 222.2 84% 6.9%;
  --card-bg: 222.2 84% 4.9%;

  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
}
```

## 4. Hook Personnalisé pour les Thèmes

```typescript
// hooks/useThemeValue.ts
import { useTheme } from "@/hooks/useTheme";

export function useThemeValue<T>(
  lightValue: T,
  darkValue: T,
  systemValue?: T,
): T {
  const { theme, systemTheme } = useTheme();

  if (theme === "system" && systemValue) {
    return systemValue;
  }

  return theme === "dark" ? darkValue : lightValue;
}

// Exemple d'utilisation
const iconColor = useThemeValue("#000000", "#ffffff");
```

## 5. Gestionnaire de Thème dans le Panel

```typescript
// components/panels/ThemePanel.tsx
'use client';

import { useTheme } from '@/hooks/useTheme';
import { Panel } from '@/components/ui/panel';
import { ThemeSelector } from '@/components/theme/ThemeSelector';

export function ThemePanel() {
  const { theme, setTheme } = useTheme();

  return (
    <Panel position="right" title="Gestionnaire de Thème">
      <div className="p-4 space-y-4">
        <ThemeSelector
          value={theme}
          onChange={setTheme}
        />
        <ThemePreview />
        <ThemeCustomizer />
      </div>
    </Panel>
  );
}
```

## 6. Intégration avec Tailwind

```typescript
// tailwind.config.ts avec Tailwind CSS v4.0.6
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "hsl(var(--primary))",
        "theme-background": "hsl(var(--background))",
        "theme-foreground": "hsl(var(--foreground))",
      },
    },
  },
};

export default config;
```

Ces exemples montrent l'intégration complète du système de thèmes avec :

- Composants React avec support de thème (React v19.0.0)
- Configuration du provider
- Variables CSS
- Hooks personnalisés
- Interface utilisateur
- Configuration Tailwind CSS v4.0.6

```

```
