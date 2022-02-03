import React, { useState } from "react";
import PlantSearch from "./components/PlantSearch";
import PlantSearchResults from "./components/PlantSearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // const filtered = !search
  //   ? catPlants
  //   : catPlants.filter((plant) =>
  //       plant.plantName.toLowerCase().includes(search.toLowerCase())
  //     );

  return (
    <div>
      <PlantSearch
        className="search"
        setSearchResults={setSearchResults}
        setHasSearched={setHasSearched}
      />
      <PlantSearchResults results={searchResults} hasSearched={hasSearched} />
    </div>
  );
};

export default App;
