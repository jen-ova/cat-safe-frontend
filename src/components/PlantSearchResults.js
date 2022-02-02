import React from "react";
import Plant from "./Plant";
import "../styles/plantSearchResults.css";

const PlantSearchResults = ({ results, hasSearched, filtered }) => {
  console.log(filtered);

  if (results.length === 0 && hasSearched === false) {
    return null;
  }
  if (results.length === 0 && hasSearched === true) {
    return (
      <p className="search-results__no-results">
        Sorry, no results exist for this search! Please try again.
      </p>
    );
  } else {
    return (
      <div>
        {filtered.map((plant) => (
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
