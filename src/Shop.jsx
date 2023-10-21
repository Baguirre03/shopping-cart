import Navbar from "./Nav";
import { useEffect, useState } from "react";

async function fetchData() {
  try {
    const data = await fetch("https://fakestoreapi.com/products/");
    const format = await data.json();
    return await format;
  } catch (err) {
    throw new Error(err);
  }
}

export default function Shop() {
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
      <h1>Shop</h1>
      <div>
        {items
          ? items.map((item) => <h4 key={item.id}>{item.title}</h4>)
          : "Loading"}
      </div>
    </>
  );
}
