import React from "react";
import { CiStar } from "react-icons/ci";
import "./styles.css";

function Card({ name, image, abilities, onShowAbilities }) {

  return (
    <div className="bg-white  rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <p className="px-3 font-medium text-lg">{name}</p>
        <div className="border rounded-lg p-2 cursor-pointer">
          <CiStar className="" />
        </div>
      </div>
      <figure className="w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover my-1 bg-pokemon-card"
        />
      </figure>
      <p className="px-3 font-normal py-2">{abilities.length && onShowAbilities()}</p>
    </div>
  );
}

export default Card;
