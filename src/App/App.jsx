import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../slices/dataSlice.js";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import PokemonList from "../Components/PokemonList.jsx";
import CardSkeleton from "../Components/CardSkeleton/index.jsx";
import NoResult from "../Components/NoResult/index.jsx";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching pokemons...");
    dispatch(fetchPokemonsWithDetails());
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Searcher />
      <PokemonList
        pokemons={filteredPokemons}
        loading={loading}
        onEmptyPokemons={() => <NoResult />}
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
