import { useState } from "react";
import Button from "./components/Button";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <header>
      <h1>
        <Button to="/">Super Cool Shop</Button>
      </h1>
      <nav>
        <Button to="/">Home</Button>
        <Button to="/shop">Shop</Button>
      </nav>
    </header>
  );
};

export default Navbar;
