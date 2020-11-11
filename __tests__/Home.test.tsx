import Home from "../pages/index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Testing the app", () => {
  it("Should render the home page", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Hello warcraftguil")).toBeInTheDocument();
  });
});
