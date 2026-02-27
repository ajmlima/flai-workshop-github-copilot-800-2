/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0f1115',
          700: '#1f2633',
        },
        cloud: {
          100: '#f6f7fb',
          200: '#eef1f7',
        },
        ocean: {
          500: '#0a84ff',
          600: '#0071e3',
        },
      },
      boxShadow: {
        glass: '0 24px 60px rgba(15, 17, 21, 0.12)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
