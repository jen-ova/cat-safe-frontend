import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faCat } from "@fortawesome/free-solid-svg-icons";
import getPlants from "../requests/getPlants";
import "../styles/plantSearch.css";

const PlantSearch = ({ setSearchResults, setHasSearched }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(getPlants(value));
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
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="search-button">
          Is it cat safe?
        </button>
      </form>
    </div>
  );
};

export default PlantSearch;
