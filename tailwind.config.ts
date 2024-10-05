import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1DA1F2", // Custom blue color
        customGreen: "#4CAF50", // Custom green color
        customPink: "#FF4081", // Custom pink color
        darkBackground: "#333333", // Dark mode background
        lightBackground: "#d8d8d8",
        darkBlueBackground: "#05254d",
        darkVioletBackground: "#160468",
        customOrange: "#daae29",
        chatbot: {
          light: "#d9fbf6",
          dark: "#76032b",
        },
      },
    },
  },
  plugins: [],
  // plugins: [require("tailwindcss-animate")],
  // plugins: [require("tailwindcss-animate"), require("tailwindcss-scrollbar-hide")],
};
export default config;