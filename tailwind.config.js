/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cross': "radial-gradient(black 3px, transparent 4px), \
        radial-gradient(black 3px, transparent 4px), \
        linear-gradient(#334155 4px, transparent 0), \
        linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px), \
        linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px), \
        #fff"
        // background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
        // background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;"
      },
      boxShadow: {
        '3xl': "rgba(0, 0, 0, 0.5) 0px 54px 55px, \
                rgba(0, 0, 0, 0.1) 0px -12px 30px, \
                rgba(0, 0, 0, 0.1) 0px 4px 6px, \
                rgba(0, 0, 0, 0.1) 0px 12px 13px, \
                rgba(0, 0, 0, 0.1) 0px -3px 5px",
        "even": "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      }
    },
    colors: {
      "transparent": "transparent",
      "background": "#000000",
      "teal": "#2dd4bf",
      "blue": "#2d9bbf",
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
        600: "#1e293b",
        700: "#334155",
        800: "#1e293b"
      },
      "red": "#FC6471",
      "lavender": "#CAA8F5",
      "light": "#e5e7eb",
      "pink": "#E5A9A9"
    }
  },
  plugins: [],
}

