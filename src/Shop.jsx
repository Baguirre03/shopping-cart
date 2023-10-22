import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

async function fetchData() {
  try {
    const data = await fetch("https://fakestoreapi.com/products/");
    const format = await data.json();
    return await format;
  } catch (err) {
    throw new Error(err);
  }
}

export default function Shop({ cart, addCart, minusCart, handleCart }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetchData();
      setItems(data);
    };
    dataFetch();
  }, []);

  return (
    <>
      <div className="heading-shop">
        <h2>Shop</h2>
        <Link to="/cart">
          <h2>Cart</h2>
          <h4>{cart}</h4>
        </Link>
      </div>
      <div>
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
