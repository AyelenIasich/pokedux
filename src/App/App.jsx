import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../api/index.js";
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
      const response = await getPokemon();
      dispatch(setPokemons(response));
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
