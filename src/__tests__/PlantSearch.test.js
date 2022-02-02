import React from "react";
import { render } from "@testing-library/react";
import PlantSearch from "../components/PlantSearch";

describe("Search", () => {
  const { asFragment } = render(<PlantSearch />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
