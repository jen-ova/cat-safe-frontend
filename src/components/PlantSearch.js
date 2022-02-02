import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faCat } from "@fortawesome/free-solid-svg-icons";
import "../styles/plantSearch.css";

const PlantSearch = ({
  setSearchResults,
  setHasSearched,
  handleSearchChange,
  search,
  setNewSearch,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
    setHasSearched(true);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faSeedling} className="icon" />
      <FontAwesomeIcon icon={faCat} className="icon" />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(event) => setNewSearch(event.target.value)}
        />
        <button
          type="submit"
          className="search-button"
          data-testid="search__button">
          Is it cat safe?
        </button>
      </form>
    </div>
  );
};

export default PlantSearch;
