// actions creators
import { SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api/index.js";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

// funcion que retorna otra funcion
export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));

  };

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
