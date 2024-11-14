/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#FD4C19',
      'secondary': '#0A090B',
      'lightSecondary': '#5A5A5A',
      'accent': '#ffffff',
      'textColor': '#ffffff',
      'lightGrey': '#F5F5F5',
      'midGrey': '#E0E0E0',
      'black': '#000000',
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    maxWidth: {
      '8xl': '96rem',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}