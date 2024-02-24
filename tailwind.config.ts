import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('tailwindcss-animated')
  ],
  extend: {
    // Add your custom styles here
    clipPath: {
      'swear': 'polygon(0 100%, 100% 0, 50% 0)',
    },
  },
};
export default config;
