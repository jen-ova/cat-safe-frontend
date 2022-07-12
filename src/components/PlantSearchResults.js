import React, { useContext } from "react";
import Plant from "./Plant";
import "../styles/plantSearchResults.css";
import { FilterContext } from "./store/FilterProvider";

const PlantSearchResults = () => {
    const { hasSearched, searchResults, value } = useContext(FilterContext);

    if (value === undefined && hasSearched === true) {
        return <p>Please enter a plant name!</p>;
    }
    if (searchResults.length === 0 && hasSearched === false) {
        return null;
    }
    if (searchResults.length === 0 && hasSearched === true) {
        return (
            <p className="search-results__no-results">
                Sorry, this plant is toxic to cats!
            </p>
        );
    } else {
        return (
            <div>
                {searchResults.map((plant) => (
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
