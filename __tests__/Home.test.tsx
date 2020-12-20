import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import client, { Session } from "next-auth/client";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "next-auth/client";
jest.mock("next-auth/client");

describe("Testing the app", () => {
  it.skip("Should render the home page", () => {
    const { getByText } = render(<Home />);

    screen.debug();
  });
});
