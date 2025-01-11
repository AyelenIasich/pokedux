import React from "react";

function PaginateBtn({ onClick, disabled, label }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-32 py-2 rounded font-bold text-white 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-pokemonRed hover:bg-pokemonRedHover"
        } 
        transition duration-300`}
    >
      {label}
    </button>
  );
}

export default PaginateBtn;
