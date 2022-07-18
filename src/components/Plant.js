import React, { useContext } from "react";
import "../styles/plant.css";
import { FilterContext } from "./store/FilterProvider";

const Plant = (props) => {
    const { name, scientificName, image } = props;
    const { addPlant, wishlist } = useContext(FilterContext);
    console.log(wishlist);

    return (
        <div className="plant_card">
            <p>{name} is cat safe!</p>
            <p>{scientificName}</p>
            <p>
                <button onClick={(e) => addPlant(name, scientificName, image)}>
                    Add to wishlist
                </button>
            </p>

            <p>
                <img src={image} alt={name} />
            </p>
        </div>
    );
};

export default Plant;
