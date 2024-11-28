/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        muncul: {
          "0%": {
            opacity: "0",
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        muncul: "muncul 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
