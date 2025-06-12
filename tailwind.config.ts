import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          600: '#16a34a',
          700: '#15803d',
        },
        gray: {
          300: '#d1d5db',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}

export default config
