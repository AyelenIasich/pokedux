import React from "react";
import Card from "../Card";

function PokemonList({ pokemons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 mx-auto my-10">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          onShowAbilities={() => (
            pokemon.abilities.map(a => a.ability.name).join(", ")
          )}
        />
      ))}
    </div>
  );
}

export default PokemonList;
