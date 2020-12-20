import Login from "../pages/login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Testing the login page", () => {
  it.skip("Should render the login page", () => {
    const { getByRole } = render(<Login />);
    expect(
      getByRole("button", { name: /Log in with Discord/i })
    ).toBeInTheDocument();
  });
});
