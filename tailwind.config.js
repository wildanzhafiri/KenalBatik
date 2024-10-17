/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/src/assets/Body2.png')",
        'bg-hero': "url('/src/assets/background-hero.png')",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
    fontFamily: {
      vidaloka: ['Vidaloka', 'sans-serif'],
      upakarti: ['Upakarti', 'sans-serif'],
      sofiasans: ['Sofia Sans', 'sans-serif'],
      lato: ['Lato'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
