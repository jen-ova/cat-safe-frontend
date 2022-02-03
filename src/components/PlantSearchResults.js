import React from "react";
import Plant from "./Plant";
import "../styles/plantSearchResults.css";

const PlantSearchResults = ({ results, hasSearched, filtered }) => {
  if (results.length === 0 && hasSearched === false) {
    return null;
  }
  if (results.length === 0 && hasSearched === true) {
    return (
      <p className="search-results__no-results">
        Sorry, this plant is toxic to cats!
      </p>
    );
  } else {
    return (
      <div>
        {results.map((plant) => (
          <Plant
            key={plant.plantName}
            name={plant.plantName}
            scientificName={plant.scientificName}
            image={plant.link}
          />
        ))}
      </div>
    );
  }
};

export default PlantSearchResults;
