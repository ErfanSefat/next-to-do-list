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
        'box': '#323232',
        'primary-text': '#82AEFF',
        'primary':'#266FF9'
      },
    },
  },
  plugins: [],
};
export default config;
