import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>Shopping cart</h1>
      <nav>
        <Link to="home">
          <button>Home</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
