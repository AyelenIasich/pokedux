import React from "react";
import { setFavorite } from "../../slices/dataSlice";
import { useDispatch } from "react-redux";
import Card from "../Card";

function PokemonList({ pokemons, loading, onLoading }) {
  const dispatch = useDispatch();
  const handleFavorite = (id) => {
    dispatch(setFavorite(id));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 mx-auto my-10">
      {loading && onLoading()}
      {!loading &&
        pokemons.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            onShowAbilities={() =>
              pokemon.abilities.map((a) => a.ability.name).join(", ")
            }
            types={pokemon.types}
            onShowTypes={() =>
              pokemon.types.map((e) =>e.type.name).join(", ")
            }
            id={pokemon.id}
            isFavorite={pokemon.favorite}
            onFavorite={() => handleFavorite(pokemon.id)} 
          />
        ))}
    </div>
  );
}

export default PokemonList;
