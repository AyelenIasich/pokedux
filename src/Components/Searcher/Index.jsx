import React from "react";
import { CiSearch } from "react-icons/ci";
import "./styles.css";

function Searcher() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-3 search-wrapper mt-4">
        <input
          className="search-input"
          type="text"
          placeholder="Search a pokemon"
          aria-label="Search a pokemon"
        />
        <CiSearch className="pe-3 search-icon " />
      </div>
    </div>
  );
}

export default Searcher;
