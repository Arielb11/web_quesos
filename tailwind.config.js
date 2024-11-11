/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
        titulo: ["Parisienne", "cursive"],
      },
      backgroundImage: {
        "header-bg": "url('/imagenes/fondoHeader.jpg')",
      },
      colors: {
        tarjeta: "#4d4545",
      },
    },
  },
};
