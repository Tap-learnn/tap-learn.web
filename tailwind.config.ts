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
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB", // PrimaryBlue from Color.kt
          700: "#1D4ED8", // PrimaryBlueDark
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        accent: {
          purple: "#8B5CF6", // AccentPurple from Color.kt
          purpleSoft: "#F5F3FF",
          orange: "#F59E0B", // AccentOrange from Color.kt
          green: "#10B981",  // AccentGreen from Color.kt
          greenSoft: "#D1FAE5",
          red: "#EF4444",
        },
        surface: {
          light: "#FFFFFF",
          subtle: "#F8FAFC", // BackgroundLight
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        text: {
          primary: "#0F172A", // Slate-900
          secondary: "#64748B", // Slate-500
          muted: "#94A3B8", // Slate-400
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(37, 99, 235, 0.25)",
        "glow-purple": "0 0 25px -5px rgba(139, 92, 246, 0.25)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(37, 99, 235, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
