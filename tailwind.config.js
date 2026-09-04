/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09080D',
        panel: '#0E0C14',
        paper: '#F2F0EA',
        muted: '#A8A4AE',
        accent: '#A77BFF',
        rule: '#292632',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'Impact', 'sans-serif'],
        sans: ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
        wide2: '0.15em',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.25)' },
          '50%': { transform: 'scaleY(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        wave: 'wave 1.4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out both',
        glowPulse: 'glowPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
