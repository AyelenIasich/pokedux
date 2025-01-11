import React from "react";
import { setFavorite } from "../../slices/dataSlice";
import { useDispatch } from "react-redux";
import Card from "../Card";
import { usePaginatedPokemons } from "../../hooks/usePaginatePokemons.js";
import PaginateBtn from "../PaginateButton";

function PokemonList({ pokemons, loading, onLoading, onEmptyPokemons }) {
  const dispatch = useDispatch();

  const handleFavorite = (id) => {
    dispatch(setFavorite(id));
  };

  const {
    currentPage,
    totalPages,
    getCurrentPagePokemons,
    handleNextPage,
    handlePreviousPage,
  } = usePaginatedPokemons(pokemons, 8);

  return (
    <>
      {!loading && pokemons.length === 0 && onEmptyPokemons()}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 mx-auto my-10">
        {loading && onLoading()}
        {!loading &&
          getCurrentPagePokemons.map((pokemon) => (
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
                pokemon.types.map((e) => e.type.name).join(", ")
              }
              id={pokemon.id}
              isFavorite={pokemon.favorite}
              onFavorite={() => handleFavorite(pokemon.id)}
            />
          ))}
      </div>
      {(!loading && pokemons.length > 0 )&& (
        <div className="flex justify-center gap-4 my-4">
          <PaginateBtn
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            label={"Previous"}
          />
          <PaginateBtn
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            label={"Next"}
          />
        </div>
      )}
    </>
  );
}

export default PokemonList;
