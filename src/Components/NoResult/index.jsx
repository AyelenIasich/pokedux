import React from "react";
import NoResultImage from "../../assets/NoResultImage.png"

function NoResult() {
  return (
    <div className="flex items-center justify-center h-screen  w-full flex-col mt-5">
      <figure  className="h-1/2">
        <img src={NoResultImage} alt="No pokemon found" className="h-full object-cover"/>
      </figure>
      <p className="text-center text-white text-3xl mt-3">
        Upps... No Pokémon found
      </p>
    </div>
  );
}

export default NoResult;
