import React, { useContext } from "react";
import { FilterContext } from "./store/FilterProvider";

const PlantSuggestionsList = () => {
    const { filteredSuggestions, activeSuggestionIndex, onClick } =
        useContext(FilterContext);

    return (
        <ul className="suggestions">
            {filteredSuggestions?.map((suggestion, index) => {
                let className;
                // Flag the active suggestion with a class
                if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                }
                return (
                    <li
                        className={className}
                        key={suggestion}
                        onClick={onClick}>
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    );
};

export default PlantSuggestionsList;
