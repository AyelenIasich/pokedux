import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

// Initial State with immutable js
const initialState = fromJS({
  loading: true,
});

// Reducer using an object-based approach
// Dynamically maps actions to state updates

export const uiReducer = (state = initialState, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

// reducer with immutable  js
const reducerObject = (state, payload) => ({
  [SET_LOADING]: state.set("loading", payload),
});
