import React from "react";
import { render } from "@testing-library/react";
import PlantSearchResults from "../components/PlantSearchResults";

describe("Search", () => {
  const { asFragment } = render(<PlantSearchResults />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
