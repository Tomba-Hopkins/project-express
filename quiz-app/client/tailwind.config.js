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
        btn: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
        faded: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100%",
          },
        },
        copied: {
          "0%": {
            opacity: "0",
          },
          "90%": {
            opacity: "100%",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        muncul: "muncul 0.5s ease-out forwards",
        btn: "btn 0.3s ease",
        faded: "faded 0.5s ease forwards",
        copied: "copied 1s ease forwards",
      },
    },
  },
  plugins: [],
};
