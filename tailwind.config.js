/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A0A0B',
        bgSecondary: '#111315',
        surfaceCard: '#171A1D',
        primaryAccent: '#0A756A',
        primaryAccentHover: '#0F8A7D',
        secondaryAccent: '#14B8A6',
        hoverAccent: '#1BC7B0',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        textMuted: '#94A3B8',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        dividerSubtle: 'rgba(255, 255, 255, 0.05)',
        statusSuccess: '#22C55E',
        statusWarning: '#F59E0B',
        statusError: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Outfit', 'Poppins', 'Roboto', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
}
