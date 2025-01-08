/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokemonRed: "#E3350D", 
        bgCardPokVibrant: "linear-gradient(145deg, #ff9a9e, #fad0c4)",
      },
    },
  },
  plugins: [],
}

