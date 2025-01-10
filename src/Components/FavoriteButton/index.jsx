import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function FavoriteButton({ isFavorite, onClick }) {
  const icon = isFavorite ? (
    <FaStar className="h-6 w-6 text-yellow-500" />
  ) : (
    <CiStar className="h-6 w-6 text-slate-600" />
  );

  return (
    <div className="border rounded-lg p-2 cursor-pointer" onClick={onClick}>
      {icon}
    </div>
  );
}

export default FavoriteButton;
