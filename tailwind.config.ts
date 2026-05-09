import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ivory: "#faf7f2",
        sage: "#9bab8e",
        sageDark: "#6f8167",
        gold: "#b08d57",
        ink: "#2b2b2b",
      },
    },
  },
  plugins: [],
};

export default config;
