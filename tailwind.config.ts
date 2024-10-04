import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // plugins: [require("tailwindcss-animate")],
  // plugins: [require("tailwindcss-animate"), require("tailwindcss-scrollbar-hide")],
};
export default config;
