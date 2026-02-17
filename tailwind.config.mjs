/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        'pastel-pink': '#F4A7C1',
        'pastel-rose': '#ffc9d9',
        'pastel-lavender': '#E9C9FF',
        'pastel-mint': '#9BE4C3',
        'pastel-peach': '#ffd4b8',
        'pastel-blue': '#c4d7f2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
