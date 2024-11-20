/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,html,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        teleport: {
          '100%':{
            transform: 'scaleX(1.5)'
          }
        }
      },
      animation: {
        teleport: 'teleport 0.5s infinite ease'
      }
    },
  },
  plugins: [],
}

