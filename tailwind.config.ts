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
        white: {
          primary: "#FFFFFF",
          secondary: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
