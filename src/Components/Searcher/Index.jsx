import React from "react";
import { useDispatch } from "react-redux";
import { setSearchItem } from "../../slices/dataSlice";
import { CiSearch } from "react-icons/ci";
import "./styles.css";

function Searcher() {
  const dispatch = useDispatch();

  const handleSearch = (e) =>{
    dispatch(setSearchItem(e.target.value))
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-3 search-wrapper mt-4">
        <input
          className="search-input"
          type="text"
          placeholder="Search a pokemon"
          aria-label="Search a pokemon"
          onChange={handleSearch}
        />
        <CiSearch className="pe-3 search-icon " />
      </div>
    </div>
  );
}

export default Searcher;
