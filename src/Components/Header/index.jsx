import React from "react";
import Pokedux from "../../assets/Pokedux.png";

function Header() {
  return (
      <div className="flex items-center justify-center w-full mb-6">
        <figure className="h-10 w-10">
          <img
            className="w-full h-full object-cover"
            src={Pokedux}
            alt="Pokedux logo"
          />
        </figure>
        <h1 className="font-bold px-3 text-2xl text-pokemonRed">POKEDUX</h1>
      </div>
  );
}

export default Header;
