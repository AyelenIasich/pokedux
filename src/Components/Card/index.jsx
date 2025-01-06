import React from "react";
import { CiStar } from "react-icons/ci";
import Pikachu from "../../assets/pikachu.png";

function Card({ name, description, images }) {
  return (
    <div className="bg-white  rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <p className="px-3 font-medium text-lg">{name}</p>
        <div className="border rounded-lg p-2 cursor-pointer">
          <CiStar className=""/>
        </div>
      </div>
      <figure className="w-full">
        <img
          src={Pikachu}
          alt={name}
          className="w-full h-full object-cover my-1 bg-slate-100"
        />
      </figure>
      <p className="px-3 font-normal py-2">{description}</p>
    </div>
  );
}

export default Card;
