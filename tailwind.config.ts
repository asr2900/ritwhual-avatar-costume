import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ritual: {
          bg: "#061a10",
          panel: "rgba(13, 51, 33, 0.82)",
          accent: "#95ff9a",
          accentDim: "#52b788",
          accentDeep: "#1b5e3a",
          text: "#f0fff4",
          muted: "#b7f5c8",
          glow: "#b8ffb8",
        },
      },
      fontFamily: {
        title: ["var(--font-title)", "system-ui", "sans-serif"],
        tagline: ["var(--font-tagline)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        button: ["var(--font-button)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ritual: "0 0 32px rgba(149, 255, 154, 0.35), 0 4px 0 rgba(27, 94, 58, 0.4)",
        "ritual-soft": "0 0 48px rgba(149, 255, 170, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
