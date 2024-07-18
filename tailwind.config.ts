import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');
// console.log(colors);

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white:'#fff',
      primary: {
        800:'#084B8A',
        700:'#1C77CC',
        300:'#BFD8EF',
      },
      secondary: colors.yellow['100'],
      neutral: colors.gray,
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
