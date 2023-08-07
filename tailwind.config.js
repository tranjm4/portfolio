/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': "rgba(0, 0, 0, 0.5) 0px 54px 55px, \
                rgba(0, 0, 0, 0.1) 0px -12px 30px, \
                rgba(0, 0, 0, 0.1) 0px 4px 6px, \
                rgba(0, 0, 0, 0.1) 0px 12px 13px, \
                rgba(0, 0, 0, 0.1) 0px -3px 5px"
      }
    },
    colors: {
      "transparent": "transparent",
      "teal": "#2dd4bf",
      "blue": "2d9bbf",
      "purple": {
        400: "#6366f1",
        800: "#4c1d95"
      },
      "darkblue": {
        700: "#312e81",
        800: "#1e1b4b",
      },
      "gold": "#fcd34d",
      "dark": {
        700: "#334155",
        800: "#1e293b"
      },
      "light": "#e5e7eb"
    }
  },
  plugins: [],
}

