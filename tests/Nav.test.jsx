import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Router from "../src/Router";
import Navbar from "../src/Nav";
import userEvent from "@testing-library/user-event";

describe("Nav component", () => {
  render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  it("renders correct title", () => {
    expect(screen.getByRole("heading").textContent).toMatch(/Shop/);
  });

  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: "Shop" });

  it("has nav links", async () => {
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/home page!/i);
  });
});
