import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import PokemonList from "../Components/PokemonList.jsx";
import CardSkeleton from "../Components/CardSkeleton/index.jsx";
import { fetchPokemonsWithDetails } from "../slices/dataSlice.js";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching pokemons...");
    dispatch(fetchPokemonsWithDetails());
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
