/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d3d3d3",
        secondary: "#01004c",
        tertiary: "#c2007f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 60px -15px #01004c",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}

