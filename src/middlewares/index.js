export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

// add a custom pokemon to the pokemon's list
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [
    {
      name: "eddie",
    },
    ...actionInfo.action.payload,
  ];

  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };

  next(updatedActionInfo);
};

export const favoritesMiddleware = (store) => (next) => (action) => {
  // Pass the action to the next middleware or reducer
  const result = next(action);

  // Save favorites to localStorage after the reducer processes the action
  if (action.type === "data/setFavorite") {
    const state = store.getState();
    const favorites = state.data.pokemons.filter((pokemon) => pokemon.favorite);
    localStorage.setItem("favoritesPokemons", JSON.stringify(favorites));
  }

  // Synchronize favorites when loading the Pokémon
  if (action.type === "data/setPokemons") {
    const savedFavorites = JSON.parse(localStorage.getItem("favoritesPokemons")) || [];
    const updatedPokemons = action.payload.map((pokemon) => ({
      ...pokemon,
      favorite: savedFavorites.some((fav) => fav.id === pokemon.id),
    }));

    // Update the payload with the synchronized favorites
    const updatedAction = { ...action, payload: updatedPokemons };
    return next(updatedAction);
  }

  return result;
};
