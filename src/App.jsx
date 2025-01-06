import "./App.css";
import Searcher from "./Components/Searcher";
import Header from "./Components/Header";
import Pikachu from "./assets/pikachu.png";
import PokemonList from "./Components/PokemonList.jsx";

function App() {
  const POKEMONS_FAKE = [
    {
      id: crypto.randomUUID(),
      name: "Pikachu",
      description: "fire, magic",
      image: Pikachu,
    },
    {
      id: crypto.randomUUID(),
      name: "Pikachu",
      description: "fire, magic",
      image: Pikachu,
    },
    {
      id: crypto.randomUUID(),
      name: "Pikachu",
      description: "fire, magic",
      image: Pikachu,
    },
    {
      id: crypto.randomUUID(),
      name: "Pikachu",
      description: "fire, magic",
      image: Pikachu,
    },
  ];

  return (
    <div>
      <Header />
      <Searcher />
      <PokemonList pokemons = {POKEMONS_FAKE} />
    </div>
  );
}

export default App;
