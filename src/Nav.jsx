import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>Hello there</div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
    </>
  );
};

export default Navbar;
