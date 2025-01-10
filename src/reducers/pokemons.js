import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

// Initial state of the reducer
const initialState = {
  pokemons: [],
  loading: true,
};

// const initialState = fromJS({
//   pokemons: [],
//   loading: true,
// });
// Reducer using a switch statement
// Handles actions based on their type
export const pokemonsReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    default:
      return state;
  }
};

// Reducer using an object-based approach
// Dynamically maps actions to state updates

export const pokemonsReducer = (state = initialState, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const reducerObject = (state, payload) => ({
  [SET_POKEMONS]: { ...state, pokemons: payload },
  [SET_LOADING]: { ...state, loading: payload },
  [SET_FAVORITE]: {
    ...state,
    pokemons: state.pokemons.map((pokemon) =>
      pokemon.id === payload
        ? { ...pokemon, favorite: !pokemon.favorite }
        : pokemon
    ),
  },
});
