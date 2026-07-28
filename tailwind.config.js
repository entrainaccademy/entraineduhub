/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050816',
        darkSecondary: '#0B1120',
        darkCard: '#111827',
        primaryAccent: '#0A756A',
        secondaryAccent: '#14B8A6',
        textPrimary: '#FFFFFF',
        textSecondary: '#94A3B8',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(10, 117, 106, 0.3)',
        'glow-secondary': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
