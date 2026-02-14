import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'flyer-orange': '#FF6B00',
        'flyer-orange-dark': '#E05E00',
        'flyer-orange-light': '#FF8A33',
        'flyer-purple': '#4A1A8A',
        'flyer-purple-light': '#6B3FA0',
        'flyer-dark': '#1A1A2E',
        'flyer-gray': '#F0F0F5',
        'flyer-gray-dark': '#9CA3AF',
        'flyer-white': '#FFFFFF',
        'flyer-green': '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
