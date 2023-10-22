import { Routes, Route } from "react-router-dom";
import Navbar from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function minusCart() {
    setCart(cart - 1);
  }

  function addCart(data) {
    setCart(cart + 1);
    handleCart(data);
  }

  function handleCart(data) {
    let copy = [...cartItems];
    copy.push({
      img: data.img,
      description: data.description,
      price: data.price,
      title: data.title,
    });
    setCartItems(copy);
  }

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="shop"
          element={
            <Shop
              cart={cart}
              handleCart={handleCart}
              minusCart={minusCart}
              addCart={addCart}
            />
          }
        ></Route>
        <Route path="cart" element={<Cart cart={cart} />}></Route>
      </Routes>
    </>
  );
}

export default App;
