import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#04080f",
          deep: "#070d1a",
          navy: "#0a1628",
          blue: "#0d2145",
          electric: "#1a6fc4",
          neon: "#00d4ff",
          cyan: "#00b8e6",
          gold: "#ffd700",
          amber: "#ffb300",
          green: "#009c3b",
          surface: "#0f1e35",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Rajdhani'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "ticker": "ticker 30s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00d4ff, 0 0 20px #00d4ff40" },
          "100%": { boxShadow: "0 0 20px #00d4ff, 0 0 60px #00d4ff60, 0 0 80px #00d4ff20" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "neon": "0 0 20px #00d4ff60, 0 0 40px #00d4ff30",
        "neon-strong": "0 0 30px #00d4ff80, 0 0 60px #00d4ff40",
        "gold": "0 0 20px #ffd70060, 0 0 40px #ffd70030",
        "electric": "0 0 20px #1a6fc460, 0 0 40px #1a6fc430",
        "inner-glow": "inset 0 0 30px #00d4ff20",
      },
    },
  },
  plugins: [],
};
export default config;
