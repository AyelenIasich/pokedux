// actions creators
import { SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api/index.js";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

// funcion que retorna otra funcion
export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
  };
