import { useState } from "react";
import Button from "./components/Button";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [curr, setCurr] = useState(false);
  return (
    <header>
      <h1>
        <Button to="/" onClick={() => setCurr(false)}>
          Super Cool Shop
        </Button>
      </h1>
      <nav>
        <Button to="/" onClick={() => setCurr(false)}>
          Home
        </Button>
        <Button to="/shop" onClick={() => setCurr(true)}>
          Shop
        </Button>
        {curr && (
          <Link to="/cart" className="cart-link">
            <h2 className="cart-one">Cart</h2>
            <h4 className="cart-one">{cart}</h4>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
