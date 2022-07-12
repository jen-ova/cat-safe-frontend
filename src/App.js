import React from "react";
import PlantSearch from "./components/PlantSearch";
import PlantSearchResults from "./components/PlantSearchResults";
import AllPlants from "./components/AllPlants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <PlantSearch className="search" />
                <Routes>
                    <Route path="/" element={<PlantSearchResults />} />
                    <Route path="/allplants" element={<AllPlants />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
