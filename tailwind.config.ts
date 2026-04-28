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
        cream: {
          50: "#F9F8F3",
          100: "#f3f1ea",
          200: "#e8e4d9",
          300: "#dad4c4",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          700: "#2d2d2d",
          800: "#242424",
          900: "#1A1A1A",
        },
        gold: {
          300: "#e8d592",
          400: "#dfc066",
          500: "#D4AF37",
          600: "#b8922f",
          700: "#9a7a26",
        },
        ink: "#1A1A1A",
      },
      fontFamily: {
        /** Oversized editorial headlines — Marcelo-style */
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        bob: "bob 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(26, 26, 26, 0.08), inset 0 1px 0 rgba(255,255,255,0.45)",
        card: "0 24px 48px -12px rgba(26, 26, 26, 0.18)",
        lift: "0 32px 64px -16px rgba(212, 175, 55, 0.15)",
        float: "0 20px 50px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
