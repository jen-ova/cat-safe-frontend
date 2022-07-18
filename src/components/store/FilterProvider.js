import React, { createContext, useState } from "react";
import catPlants from "../../data/catplants.js";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    // autocomplete logic starts
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const suggestions = catPlants.map((plant) => plant.plantName);

    const onChange = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(userInput);
        setValue(userInput);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        if (userInput.length >= 3) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (e) => {
        const enter = 13;
        const up = 38;
        const down = 40;
        if (e.keyCode === enter) {
            setInput(filteredSuggestions[activeSuggestionIndex]);
            setActiveSuggestionIndex(0);
            setShowSuggestions(false);
        } else if (e.keyCode === up) {
            if (activeSuggestionIndex === 0) {
                return;
            }
            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        } else if (e.keyCode === down) {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };
    // autocomplete logic ends

    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const [value, setValue] = useState();

    const getPlants = (query) => {
        if (!query) {
            return [];
        } else {
            const filtered = catPlants.filter(
                (p) =>
                    p.plantName.toLowerCase().includes(query.toLowerCase()) ||
                    p.scientificName.toLowerCase().includes(query.toLowerCase())
            );
            return filtered;
        }
    };

    // wishlist logic starts
    const [wishlist, setWishlist] = useState([]);

    const addPlant = (plantName, scientificName, link) => {
        const newPlant = [...wishlist, { plantName, scientificName, link }];
        setWishlist(newPlant);
    };

    const removePlant = (index) => {
        const newPlant = [...wishlist];
        newPlant.splice(index, 1);
        setWishlist(newPlant);
        console.log("newPlant", newPlant);
    };
    // wishlist logic ends

    const filterData = {
        searchResults,
        setSearchResults,
        hasSearched,
        setHasSearched,
        value,
        setValue,
        getPlants,
        onChange,
        onKeyDown,
        input,
        showSuggestions,
        filteredSuggestions,
        activeSuggestionIndex,
        onClick,
        suggestions,
        addPlant,
        wishlist,
        setWishlist,
        removePlant,
    };

    return (
        <FilterContext.Provider value={filterData}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;
