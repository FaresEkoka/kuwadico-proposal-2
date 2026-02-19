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
        accent: {
          DEFAULT: "#39FF14",
          muted: "#2ECC71",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          lighter: "#1A1A1A",
          card: "#151515",
        },
      },
      fontFamily: {
        sans: ["var(--font-questrial)", "system-ui", "sans-serif"],
        header: ["var(--font-milker)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
