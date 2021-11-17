import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import About from "./About";

describe("FormPage", () => {
  test("renders About component", () => {
    render(<About />);
    // screen.debug();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum sem justo, et rhoncus quam consectetur in. Nunc fringilla, tellus eget vehicula eleifend, nibh elit accumsan mi, sit amet lobortis sapien odio ac dolor."
      )
    ).toBeInTheDocument();
  });
});
