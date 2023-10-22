import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "../src/Home";
import App from "../src/App";
import Navbar from "../src/Nav";
import Shop from "../src/Shop";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { mockComponent } from "react-dom/test-utils";

describe("Home Page", () => {
  it("renders home page correctly", () => {
    render(<Home></Home>);
    expect(screen.getByRole("heading").textContent).toEqual("Home Page");
  });
});

describe.skip("Home Page", () => {
  it("renders Nav page correctly", () => {
    render(
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "Home" });
    const button2 = screen.getByRole("button", { name: "Shop" });
    expect(button).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Navbar onClick={onClick}></Navbar>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Home" });
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(
      <BrowserRouter>
        <Navbar onClick={onClick}></Navbar>
      </BrowserRouter>
    );
    expect(onClick).not.toHaveBeenCalled();
  });
});
