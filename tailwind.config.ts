import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
//console.log(fonts.fontFamily.mono);

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'head1': ['2rem', { lineHeight: '2.5rem',letterSpacing: '-0.01em',fontWeight: '600', }],
      'head2': ['1.5rem', { lineHeight: '2rem',letterSpacing: '-0.01em',fontWeight: '600', }],
      'head3': ['1.25rem', { lineHeight: '1.75rem',letterSpacing: '-0.01em',fontWeight: '500', }],
      'head4': ['1rem', { lineHeight: '1.5rem',letterSpacing: '-0.01em',fontWeight: '600', }],
      'head5': ['1rem', { lineHeight: '1.5rem',letterSpacing: '-0.01em',fontWeight: '500', }],
      'head6': ['0.875rem', { lineHeight: '1.25rem',letterSpacing: '-0.01em',fontWeight: '500', }],
      '3xl': ['3rem', { lineHeight: '3.5rem',letterSpacing: '-0.01em',fontWeight: '600', }],

      'lg': ['1.25rem', { lineHeight: '1.5rem',letterSpacing: '0.075em' }],      
      'base': ['1rem', { lineHeight: '1.25rem',letterSpacing: '0.025em', }],
      'sm': ['0.875rem', { lineHeight: '1.25rem',letterSpacing: '0.009375em' }],
      'xs': ['0.625rem', { lineHeight: '0.75rem',letterSpacing: '0.05em' }],
      'xxs': ['0.375rem', { lineHeight: '0.5rem',letterSpacing: '0.05em' }],
      
      '2xl-number':['2rem', { lineHeight: '2.25rem',letterSpacing: '-0.01em' }],
      'xl-number':['1.5rem', { lineHeight: '1.75rem',letterSpacing: '-0.01em' }],       
      

    },
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
    extend: {
      fontFamily: {
        mono:['"RedHatMonoRegular"', ...defaultTheme.fontFamily.mono],
        sans:['"RedHatRegular"', ...defaultTheme.fontFamily.sans],
        body:['"RedHatRegular"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config;
