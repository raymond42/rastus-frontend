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
        primary: "#001F3F",
        lightBrown: {
          20: "#FDFBF8",
          50: "#DBCCBC",
          100: "#EEDDCC",
        },
        gray: {
          50: "#F9F9F9",
        },
        white: {
          primary: "#FFFFFF",
          secondary: "#EFEFEF",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out both",
        slideInRight: "slideInRight 0.3s ease-out forwards",
        slideOutRight: "slideOutRight 0.3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
