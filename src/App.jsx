import { useEffect, useState } from "react";
import { getPokemon } from "./api/index.js";
import { connect } from "react-redux";
import Searcher from "./Components/Searcher";
import Header from "./Components/Header";
import PokemonList from "./Components/PokemonList.jsx";
import "./App.css";
import { setPokemons as setPokemonsActions } from "./actions/index.js";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons = await getPokemon();
      setPokemons(pokemons);
      console.log(pokemons);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
