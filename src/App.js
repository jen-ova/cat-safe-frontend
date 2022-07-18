import React from "react";
import PlantSearch from "./components/PlantSearch";
import PlantSearchResults from "./components/PlantSearchResults";
import AllPlants from "./components/AllPlants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Header from "./components/Header";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <PlantSearch className="search" />
                <Routes>
                    <Route path="/" element={<PlantSearchResults />} />
                    <Route path="/allplants" element={<AllPlants />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
