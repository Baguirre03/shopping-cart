import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>Shop name</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="shop">
          <button>Shop</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
