import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        panel: {
          bg: "var(--panel-bg-color)",
          text: "var(--panel-text-color)",
          hover: "var(--panel-hover-color)",
        },
        block: {
          bg: "var(--block-bg-color)",
        },
        theme: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--accent-color)",
          "alt-accent": "var(--alt-accent-color)",
          border: "var(--border-color)",
          card: "var(--card-bg)",
          h1: "var(--h1-color)",
          h2: "var(--h2-color)",
          h3: "var(--h3-color)",
          span: "var(--span-color)",
          p: "var(--p-color)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
