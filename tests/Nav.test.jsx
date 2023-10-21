import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../src/Home";
import App from "../src/App";

describe("Nav component", () => {
  it("renders correct title", () => {
    render(<App></App>);
    expect(screen.getByRole("heading").textContent).toEqual("Shop Name");
  });
});

describe("Home Page", () => {
  it("renders home page correctly", () => {
    render(<Home></Home>);
    expect(screen.getByRole("heading").textContent).toEqual("Home Page");
  });
});
