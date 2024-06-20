import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="flex-center p-20 w-full">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search ...."
      ></input>
      <button className="search-bar-icon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
