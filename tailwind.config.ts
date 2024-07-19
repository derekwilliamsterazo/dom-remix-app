import type { Config } from "tailwindcss";

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
        900:'#00162a',
        800:'#084B8A',
        700:'#1C77CC',
        300:'#BFD8EF',
        100:'#e3e9ed'
      },
      green: { 
        700:'#4f9c20',
        100:'#dbe8d6',
       },
      red: { 
        700:'#d51b39',
        100:'#efd4da' 
      },
      yellow: { 700:'#fcbf49' },
      
      gray: {
        900:'#242217',
        800:'#1c2a35',
        700:'#2e3c47',
        600:'',
        500:'#696f7b',
        400:'',
        300:'#bbb',
        200:'#dcdcdc',
        100:'#f4f5f6',
        50:'rgba(23, 30, 36, 0.15)',
        25:'#fcfcfc'
      }
    },
    extend: {
      fontFamily: {
        mono:['"RedHatMonoRegular"', "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
        sans:['"RedHatRegular"', "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        body:['"RedHatRegular"', "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      }
    },
  },
  plugins: [],
} satisfies Config;
