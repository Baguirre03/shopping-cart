import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

async function fetchData(url) {
  try {
    const data = await fetch(url);
    const format = await data.json();
    return await format;
  } catch (err) {
    throw new Error(err);
  }
}

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function Shop({ cart, addCart, minusCart, handleCart }) {
  const [items, setItems] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    setItems(null);
    const dataFetch = async () => {
      const data = await fetchData(
        `https://fakestoreapi.com/products/category/${currentCategory}`
      );
      setItems(data);
    };
    dataFetch();
  }, [currentCategory]);

  return (
    <>
      <div className="heading-shop">
        <h2>Shop</h2>
        <Link to="/cart">
          <h2>Cart</h2>
          <h4>{cart}</h4>
        </Link>
      </div>
      <div className="options">
        {categories &&
          categories.map((cat, index) => (
            <button
              className={cat === currentCategory ? "option selected" : "option"}
              onClick={() => setCurrentCategory(categories[index])}
              key={cat}
            >
              {cat}
            </button>
          ))}
      </div>
      <div className="items-container">
        {items
          ? items.map((item, index) => (
              <ItemCard
                key={item.id}
                data={item}
                addCart={addCart}
                minusCart={minusCart}
                handleCart={handleCart}
                index={index}
              />
            ))
          : "Loading"}
      </div>
    </>
  );
}
