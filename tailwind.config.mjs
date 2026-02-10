/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#F4A7C1',
        'pastel-lavender': '#E9C9FF',
        'pastel-mint': '#9BE4C3',
        card: 'rgba(255,255,255,0.6)',
        background: '#FFF0F6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
