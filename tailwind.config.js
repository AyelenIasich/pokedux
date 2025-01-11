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
        whiteFont:"rgba(255, 255, 255, 0.87)", 
        glassColor:"rgba(225, 225, 225, 0.4)",
      },
    },
  },
  plugins: [],
}

