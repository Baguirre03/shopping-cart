import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import Loading from "./components/Loading";

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

export default function Shop({ addCart, minusCart, handleCart }) {
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

  let upperCase = categories.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );

  return (
    <>
      <div className="shop-area">
        <div className="options">
          <h3>Options</h3>
          <ul>
            {categories &&
              upperCase.map((cat, index) => (
                <li key={cat} className="option-li">
                  <button
                    className={
                      cat === currentCategory ? "option selected" : "option"
                    }
                    onClick={() => setCurrentCategory(categories[index])}
                  >
                    {cat}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="items-container">
          {items ? (
            items.map((item, index) => (
              <ItemCard
                key={item.id}
                data={item}
                addCart={addCart}
                minusCart={minusCart}
                handleCart={handleCart}
                index={index}
              />
            ))
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
    </>
  );
}
