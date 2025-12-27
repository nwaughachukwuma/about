import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,mjs,cjs,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep Persian color palette - rich but used sparsely
        persian: {
          midnight: "#1a1a2e", // Deep navy blue
          sapphire: "#16213e", // Rich blue
          crimson: "#a91e2c", // Deep red
          ruby: "#8b1538", // Rich burgundy
          gold: "#d4af37", // Antique gold
          cream: "#f5f5dc", // Warm cream
          charcoal: "#36454f", // Warm charcoal
        },
        // 2000s inspired grays
        retro: {
          gray: "#708090", // Slate gray
          light: "#d3d3d3", // Light gray
          dark: "#2f4f4f", // Dark slate gray
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Persian-inspired tiled pattern
        "persian-tile": `
          radial-gradient(circle at 25% 25%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
          linear-gradient(45deg, rgba(26, 26, 46, 0.05) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(26, 26, 46, 0.05) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(26, 26, 46, 0.05) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(26, 26, 46, 0.05) 75%)
        `,
        "persian-tile-large": `
          radial-gradient(circle at 25% 25%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
          linear-gradient(45deg, rgba(26, 26, 46, 0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(26, 26, 46, 0.03) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(26, 26, 46, 0.03) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(26, 26, 46, 0.03) 75%)
        `,
      },
      fontFamily: {
        retro: ["Courier New", "monospace"],
        elegant: ["Georgia", "serif"],
      },
      boxShadow: {
        persian:
          "0 4px 6px -1px rgba(26, 26, 46, 0.1), 0 2px 4px -1px rgba(26, 26, 46, 0.06)",
        "persian-lg":
          "0 10px 15px -3px rgba(26, 26, 46, 0.1), 0 4px 6px -2px rgba(26, 26, 46, 0.05)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
