import React from "react";
import FavoriteButton from "../FavoriteButton/index";
import "./styles.css";

function Card({
  name,
  image,
  abilities,
  onShowAbilities,
  onShowTypes,
  types,
  isFavorite,
  onFavorite,
}) {
  return (
    <div className="bg-white  rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <p className="px-3 font-medium text-lg">{name}</p>
        <FavoriteButton isFavorite={isFavorite} onClick={onFavorite} />
      </div>
      <figure className="w-full relative">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg texte-black text-xs m-2 px-2 py-1">
          {types?.length > 0 && onShowTypes()}
        </span>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover my-1 bg-pokemon-card"
        />
      </figure>
      <p className="px-3 font-normal py-2 text-left ">
        {abilities?.length > 0 && onShowAbilities()}
      </p>
    </div>
  );
}

export default Card;
