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
        background: "#020617",
        foreground: "#e5e7eb",
        accent: "#38bdf8",
        muted: "#111827",
        border: "#1f2933",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        subtle: "0 18px 60px rgba(15, 23, 42, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
