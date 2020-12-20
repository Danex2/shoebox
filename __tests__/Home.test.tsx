import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import client, { Session } from "next-auth/client";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "next-auth/client";
jest.mock("next-auth/client");

describe("Testing the app", () => {
  it.skip("Should render the home page", () => {
    // const mockSession: Session = {
    //   expires: "1",
    //   user: { email: "dane@gmail.com", name: "Dane", image: "c" },
    // };
    // (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
    const { getByText } = render(<Home />);

    screen.debug();
  });
});
