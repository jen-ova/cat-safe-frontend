import React from "react";
import "../styles/plant.css";

const Plant = (props) => {
    const { name, scientificName, image } = props;

    return (
        <div className="plant_card">
            <p>{name} is cat safe!</p>
            <p>{scientificName}</p>
            <p>
                <img src={image} alt={name} />
            </p>
        </div>
    );
};

export default Plant;
