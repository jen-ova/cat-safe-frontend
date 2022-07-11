import React, { useState } from "react";
import PlantSearch from "./components/PlantSearch";
import PlantSearchResults from "./components/PlantSearchResults";
import AllPlants from "./components/AllPlants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <Router>
      <div>
        <PlantSearch
          className="search"
          setSearchResults={setSearchResults}
          setHasSearched={setHasSearched}
        />
        <Routes>
          <Route
            path="/"
            element={
              <PlantSearchResults
                results={searchResults}
                hasSearched={hasSearched}
              />
            }
          />
          <Route path="/allplants" element={<AllPlants />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
