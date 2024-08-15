/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: `"Montserrat", sans-serif`,
        oswald: `"Oswald", sans-serif`,
      },
      keyframes: {
        smoothUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-1rem)',
          },
        },
        fadeIn: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: 0,
            transform: 'translateY(-1.5rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'smooth-up-down': 'smoothUpDown 3s ease-in-out infinite',
        'fade': 'fadeIn 3.5s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 1s ease-out infinite',
      },
      colors: {
      },
    },
  },
  plugins: [],
};
