import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "var(--color-brand-green, #2E6B3E)",
          "green-dark": "#235330",
          "green-light": "#EAF3EC",
        },
        cta: {
          orange: "var(--color-cta-orange, #F57C00)",
          "orange-hover": "var(--color-cta-orange-hover, #E65100)",
          "orange-light": "#FFF3E0",
        },
        background: {
          primary: "var(--color-background-primary, #F7F5EE)",
          subtle: "#F0ECE1",
        },
        surface: {
          card: "var(--color-surface-card, #FFFFFF)",
          elevated: "#FFFFFF",
        },
        text: {
          primary: "var(--color-text-primary, #1C1917)",
          secondary: "var(--color-text-secondary, #57534E)",
          muted: "#78716C",
        },
        border: {
          divider: "var(--color-border-divider, #E7E5E4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 16px 0px rgba(28, 25, 23, 0.06)",
        "card-hover": "0px 10px 24px 0px rgba(28, 25, 23, 0.12)",
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
