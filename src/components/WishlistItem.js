import React, { useContext } from "react";
import { FilterContext } from "./store/FilterProvider";

const WishlistItem = (plant) => {
    const { removePlant } = useContext(FilterContext);
    return (
        <div>
            <p>{plant.plant.plantName}</p>
            <p>{plant.plant.scientificName}</p>
            <img
                src={plant.plant.link}
                alt={plant.plant.plantName}
                width="100"
            />
            <button
                style={{ background: "red", display: "inline" }}
                onClick={() => removePlant(plant.index)}>
                x
            </button>
        </div>
    );
};

export default WishlistItem;
