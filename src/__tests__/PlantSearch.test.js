import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlantSearch from "../components/PlantSearch";
import { BrowserRouter as Router } from "react-router-dom";
import FilterProvider from "../components/store/FilterProvider";

describe("PlantSearch", () => {
  beforeEach(() => {
    const handleSubmit = jest.fn();
    render(
      <Router>
        <FilterProvider>
          <PlantSearch handleSubmit={handleSubmit} />
        </FilterProvider>
      </Router>
    );
  });

  it("should render an input element", () => {
    const inputElement = screen.getByPlaceholderText(/enter plant name.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in the input", () => {
    const inputElement = screen.getByPlaceholderText(/enter plant name.../i);
    fireEvent.change(inputElement, { target: { value: "cactus" } });
    expect(inputElement.value).toBe("cactus");
  });

  // it("should submit the typed value", () => {
  //   const inputElement = screen.getByPlaceholderText(/enter plant name.../i);
  //   const buttonElement = screen.getByRole("button", {
  //     name: /is it cat safe?/i,
  //   });
  //   fireEvent.change(inputElement, { target: { value: "cactus" } });
  //   fireEvent.submit(buttonElement);
  //   console.log(inputElement.value);
  // });
});
