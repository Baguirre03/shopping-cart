import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Router from "../src/Router";
import userEvent from "@testing-library/user-event";

describe("Nav component", () => {
  it("renders correct title", () => {
    render(<Router></Router>);
    expect(screen.getByRole("heading").textContent).toEqual("Shopping cart");
  });
});

describe("click button works", () => {
  it("clicks home", async () => {
    const user = userEvent.setup();
    render(<Router></Router>);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toEqual("Home Page");
  });
});
