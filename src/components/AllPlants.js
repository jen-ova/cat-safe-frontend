import React from "react";
import Plant from "./Plant";
import "../styles/plantSearchResults.css";
import PlantData from "../data/catplants";

const PlantSearchResults = () => {
  return (
    <div>
      {PlantData.map((plant) => (
        <Plant
          key={plant.plantName}
          name={plant.plantName}
          scientificName={plant.scientificName}
          image={plant.link}
        />
      ))}
    </div>
  );
};

export default PlantSearchResults;
