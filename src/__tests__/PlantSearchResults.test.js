import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlantSearchResults from "../components/PlantSearchResults";
import { BrowserRouter as Router } from "react-router-dom";
import FilterProvider from "../components/store/FilterProvider";

describe("PlantSearchResults", () => {
    beforeEach(() => {
        render(
            <Router>
                <FilterProvider>
                    <PlantSearchResults />
                </FilterProvider>
            </Router>
        );
    });

    it("shows a plant card if the plant submitted is safe", () => {});

    it("shows an error message if an empty input is submitted", () => {});

    it("shows an error message if the plant submitted is unsafe", () => {});
});
