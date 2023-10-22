import { Link } from "react-router-dom";
import Button from "./components/Button";

const Navbar = () => {
  return (
    <header>
      <h1>
        <Button to="/">Shop Name</Button>
      </h1>
      <nav>
        <Button to="/">Home</Button>
        <Button to="/shop">Shop</Button>
      </nav>
    </header>
  );
};

export default Navbar;
