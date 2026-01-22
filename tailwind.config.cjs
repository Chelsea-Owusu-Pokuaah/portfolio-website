/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        body: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["Fira Code", "Consolas", "Monaco", "monospace"]
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e40af",
          light: "#3b82f6"
        },
        secondary: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          light: "#8b5cf6"
        },
        background: {
          DEFAULT: "#ffffff",
          alt: "#f8fafc"
        },
        surface: "#f1f5f9",
        border: "#e2e8f0",
        text: {
          primary: "#0f172a",
          secondary: "#475569",
          muted: "#64748b",
          light: "#94a3b8"
        },
        accent: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#06b6d4"
        }
      }
    }
  },
  plugins: []
};

