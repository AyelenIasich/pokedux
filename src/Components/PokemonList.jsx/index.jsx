import React from "react";
import Card from "../Card";

function PokemonList({ pokemons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 mx-auto my-10">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;

