/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: '#f8f9fa',
      },
      backgroundImage: {
        'gradient-animated':
          'linear-gradient(90deg, #f8f9fa, #6366f1, #f8f9fa, #6366f1, #f8f9fa)', 
      },
      backgroundSize: {
        'long-x': '400% 100%',
      },
      animation: {
        'scroll-x': 'scroll-x 60s linear infinite',
        'shimmer': 'shimmer 1.5s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '300% 0%' }, 
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
