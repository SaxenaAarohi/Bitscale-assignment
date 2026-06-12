import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        brand: {
          DEFAULT: "#111111",
          muted: "#3d3d3d",
        },
        accent: {

          DEFAULT: "#e9e6fb",
          ink: "#5b4fc4",
        },
        ink: {
          900: "#1a1a1a",
          700: "#3d3d3d",
          500: "#6b6b6b",
          400: "#8c8c8c",
          300: "#b0b0b0",
        },
        line: "#ececec",
        surface: "#ffffff",
        canvas: "#f7f7f8",
        success: "#16a34a",
        warning: "#f59e0b",

        bit: {
          green: "#438361",
          greenLight: "#EDF3EC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)",
        modal: "0 20px 60px rgba(16,24,40,0.20)",
        popover: "0 8px 24px rgba(16,24,40,0.12)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
