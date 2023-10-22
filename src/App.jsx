import { Routes, Route } from "react-router-dom";
import Navbar from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import { useState } from "react";
import Cart from "./Cart";
import "./styles/app.css";

function App() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function minusCart(data) {
    setCart(cart - 1);
    handleSubtract(data);
  }

  function addCart(data) {
    setCart(cart + 1);
    handleCartItems(data);
  }

  function handleCartItems(data) {
    let copy = [...cartItems];
    copy.push({
      img: data.image,
      description: data.description,
      price: data.price,
      title: data.title,
      id: crypto.randomUUID(),
    });
    setCartItems(copy);
  }

  function handleSubtract(data) {
    let copy = [...cartItems];
    copy.splice(copy.indexOf(copy.find((dif) => dif.id === data.id)), 1);
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
              handleCart={handleCartItems}
              minusCart={minusCart}
              addCart={addCart}
            />
          }
        ></Route>
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              cartItems={cartItems}
              handleCart={handleCartItems}
              minusCart={minusCart}
              addCart={addCart}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
