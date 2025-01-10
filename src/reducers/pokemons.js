import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

// Initial State with immutable js
const initialState = fromJS({
  pokemons: [],
});

// Reducer using an object-based approach
// Dynamically maps actions to state updates
export const pokemonsReducer = (state = initialState, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};


// reducer with immutable  js
const reducerObject = (state, payload) => ({
  [SET_POKEMONS]: state.setIn(["pokemons"], fromJS(payload)),
  [SET_FAVORITE]: state.updateIn(["pokemons"], (pokemons) =>
    pokemons.map((pokemon) =>
      pokemon.get("id") === payload
        ? pokemon.update("favorite", (favorite) => !favorite)
        : pokemon
    )
  ),
});