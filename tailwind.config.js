import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx,md}',
    './app/**/*.{js,ts,jsx,tsx,mdx,md}',
    './app/*.{js,ts,jsx,tsx,mdx,md}',
    './app/post/*.{js,ts,jsx,tsx,mdx,md}',
    './app/post/**/*.{js,ts,jsx,tsx,mdx,md}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx,md}',
  ],
  theme: {
    colors: {
      'midnight': {
        '50': '#f1f8fe',
        '100': '#e1f0fd',
        '200': '#bde0fa',
        '300': '#83c7f6',
        '400': '#41abef',
        '500': '#1890df',
        '600': '#0a69af',
        '700': '#0a5b9a',
        '800': '#0d4d7f',
        '900': '#10416a',
        '950': '#0b2946'
    },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('@tailwindcss/typography')],
}
