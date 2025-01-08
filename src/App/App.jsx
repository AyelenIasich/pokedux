import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getPokemonDetails } from "../api/index.js";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import PokemonList from "../Components/PokemonList.jsx";
import { setPokemons } from "../actions/index.js";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <Header />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
