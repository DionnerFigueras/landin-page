import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color-de-fondo': '#e6e6e6', 
        'color-primario': '#888181',
        'boton-primario': '#4D4242',
        'boton-segundario': '#837C7C',
        'titulos': '#5F5C5C',
        'subtitulos': '#6C6C6C',
      },
    },
  },
  plugins: [],
} satisfies Config;
