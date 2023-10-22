import ItemCard from "./components/ItemCard";

export default function Cart({ cart, cartItems, minusCart, addCart }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Count {cart}</h3>
      <div className="items">
        {cartItems.length
          ? cartItems.map((item) => {
              return (
                <ItemCard
                  data={item}
                  minusCart={minusCart}
                  addCart={addCart}
                  key={item.id}
                ></ItemCard>
              );
            })
          : "hi"}
      </div>
    </div>
  );
}
