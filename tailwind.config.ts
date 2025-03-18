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
          50: "#FDFBF8",
          100: "#DBCCBC",
        },
      },
    },
  },
  plugins: [],
};

export default config;
