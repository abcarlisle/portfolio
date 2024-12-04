import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'midnight': {
           '50': '#f0f7fe',
           '100': '#dcecfd',
           '200': '#c1defc',
           '300': '#97caf9',
           '400': '#65adf5',
           '500': '#428cef',
           '600': '#2c6fe4',
           '700': '#2459d1',
           '800': '#234aaa',
           '900': '#224186',
           '950': '#101a34',
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
