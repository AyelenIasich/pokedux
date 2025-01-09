import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../api/index.js";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import PokemonList from "../Components/PokemonList.jsx";
import { getPokemonWithDetails } from "../actions/index.js";
import CardSkeleton from "../Components/CardSkeleton/index.jsx";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes));
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <Header />
      <Searcher />
      <PokemonList
        pokemons={pokemons}
        loading={loading}
        onLoading={() =>
          Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        }
      />
    </div>
  );
}

export default App;
