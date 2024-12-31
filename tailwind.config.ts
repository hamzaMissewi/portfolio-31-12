import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#d3d3d3",
          average: "#333333",
          medium: "rgb(67,67,67)",
          dark: "rgba(40,40,40,0.45)",
          darkest: "#212121",
        },
        cyan: {
          // light: "#b2f1f9",
          0: "#90CAF9",
          light: "#96f4ff",
          medium: "#4cc9e8",
          dark: "rgba(11,124,148,0.99)",
        },
        red: {
          light: "#ff5959",
          medium: "#d01e1e",
          dark: "#7d0707",
          darkest: "#3a0707",
          // darkest: "#310303",
        },
        rose: {
          light: "#e854b4",
          medium: "#9b0077",
          dark: "#580340",
        },
        purple: {
          light: "#6535ea",
          medium: "#510db7",
          dark: "#21076a",
          // dark: "#2f054d",
          // darkest: "#0a023c",
          darkest: "#230f20",
        },
        yellow: {
          light: "#ffffaa",
          medium: "#c1c01a",
          dark: "#907212",
          orange: "#daae29",
        },
        green: {
          light: "#35ea7d",
          medium: "#38c033",
          dark: "#185f02",
        },
        blue: {
          light: "#1976D2",
          medium: "#081c9e",
          dark: "#081a41",
          darkest: "#070738",
          4: "#05254d",
          5: "#002f5d",
          6: "#01064f",
        },

        customBlue: "#1DA1F2", // Custom blue color
        customGreen: "#4CAF50", // Custom green color
        customPink: "#FF4081", // Custom pink color
        blackToWhite: {
          1: "rgb(40,40,40)",
          2: "rgb(104,104,104)",
          3: "#a2a1a1",
          4: "rgb(206,204,204)",
          5: "rgb(239,239,239)",
        },
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
