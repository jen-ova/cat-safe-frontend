import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faCat } from "@fortawesome/free-solid-svg-icons";
import "../styles/plantSearch.css";
import { FilterContext } from "./store/FilterProvider";
import PlantSuggestionsList from "./PlantSuggestionsList";

const PlantSearch = () => {
    const {
        showSuggestions,
        input,
        onKeyDown,
        onChange,
        setSearchResults,
        getPlants,
        value,
        setHasSearched,
        suggestions,
    } = useContext(FilterContext);

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResults(getPlants(value));
        setHasSearched(true);
        navigate("../", { replace: true });
    };

    const randomPlant =
        suggestions[Math.floor(Math.random() * suggestions.length)];

    const handleRandomSubmit = async (e) => {
        e.preventDefault();
        console.log(randomPlant);
        setSearchResults(getPlants(randomPlant));
        setHasSearched(true);
        navigate("../", { replace: true });
    };

    return (
        <div>
            <FontAwesomeIcon icon={faSeedling} className="icon" />
            <FontAwesomeIcon icon={faCat} className="icon" />
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Enter plant name..."
                    onChange={onChange}
                    value={input}
                    onKeyDown={onKeyDown}
                />
                {showSuggestions && input && <PlantSuggestionsList />}

                <button type="submit" className="search-button">
                    Is it cat safe?
                </button>
            </form>
            <NavLink to="/allplants">
                <button>All plants</button>
            </NavLink>
            <form className="search-form" onSubmit={handleRandomSubmit}>
                <button type="submit" className="search-button">
                    Random Safe Plant
                </button>
            </form>
        </div>
    );
};

export default PlantSearch;
