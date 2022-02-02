import React, { useState } from "react";
import PlantSearch from "./components/PlantSearch";
import PlantSearchResults from "./components/PlantSearchResults";
import catPlants from "./data/catplants";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? catPlants
    : catPlants.filter((plant) =>
        plant.plantName.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <PlantSearch
        setSearchResults={setSearchResults}
        setHasSearched={setHasSearched}
        handleSearchChange={handleSearchChange}
        setNewSearch={setNewSearch}
        search={search}
      />
      <PlantSearchResults
        results={searchResults}
        hasSearched={hasSearched}
        filtered={filtered}
      />
    </div>
  );
};

export default App;
