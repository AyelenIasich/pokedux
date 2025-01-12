import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlices";

const initialState = {
  pokemons: [],
  searchTerm: "",
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonId = action.payload;
      state.pokemons = state.pokemons.map((pokemon) =>
        pokemon.id === pokemonId
          ? { ...pokemon, favorite: !pokemon.favorite }
          : pokemon
      );
    },
    setSearchItem: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setPokemons, setFavorite, setSearchItem } = dataSlice.actions;

export default dataSlice.reducer;
