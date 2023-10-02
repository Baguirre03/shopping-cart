import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1 className="hello">Shop</h1>
      <nav>
        <button>
          <Link to="home">Home</Link>
        </button>
        <button type="button">
          <Link to="shop">Shop</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
