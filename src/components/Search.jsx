import { React, useState } from "react";
import "./Search.css";

const Search = ({ handleSearchChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    handleSearchChange(input);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchInput}
        placeholder="Find your Character..."
      />
    </div>
  );
};

export default Search;
