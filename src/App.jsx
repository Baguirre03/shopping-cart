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
    if (!cartItems.filter((e) => e.title === data.title).length) {
      return;
    } else {
      setCart(cart - 1);
      handleSubtract(data);
    }
  }

  function addCart(data) {
    setCart(cart + 1);
    handleCartItems(data);
  }

  function handleCartItems(data) {
    let copy = [...cartItems];
    if (cartItems.filter((el) => el.title === data.title).length) {
      const index = copy.findIndex((el) => el.title === data.title);
      let item = copy[index];
      copy[index] = {
        ...item,
        count: (item.count += 1),
      };
    } else {
      copy.push({
        image: data.image,
        description: data.description,
        price: data.price,
        title: data.title,
        id: crypto.randomUUID(),
        count: 1,
      });
    }
    setCartItems(copy);
  }

  function handleSubtract(data) {
    let copy = [...cartItems];
    const index = copy.findIndex((el) => el.title === data.title);
    let item = copy[index];
    if (item.count > 1) {
      item = {
        ...item,
        count: (item.count -= 1),
      };
    } else {
      copy.splice(index, 1);
    }
    setCartItems(copy);
  }

  return (
    <>
      <Navbar cart={cart}></Navbar>
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
