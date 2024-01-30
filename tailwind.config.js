/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        60: "#FBF3F3",
      },
      animation: {
        "scale-3s": "scale .35s forwards ease-in",
        "scale-4s": "scale .45s forwards ease-in",
        "scale-5s": "scale .55s forwards ease-in",
        "scale-6s": "scale .65s forwards ease-in",

        "scale-full-3s": "scale-full .35s forwards ease-in",
        "scale-full-4s": "scale-full .45s forwards ease-in",
        "scale-full-5s": "scale-full .55s forwards ease-in",
        "scale-full-6s": "scale-full .65s forwards ease-in",
      },
    },
  },
  plugins: [],
};
