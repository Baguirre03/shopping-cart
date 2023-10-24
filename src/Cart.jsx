import ItemCard from "./components/ItemCard";

export default function Cart({ cart, cartItems, minusCart, addCart }) {
  let total = 0;
  cartItems.forEach((item) => {
    if (item.count > 1) {
      for (let i = 0; i < item.count; i++) {
        total += item.price;
      }
    } else {
      total += item.price;
    }
  });

  return (
    <div className="checkout-container">
      <h1>Cart</h1>
      <h3>Total Items in Cart {cart}</h3>
      <h3>Total cost: ${Math.round(total)}</h3>
      <div className="items-checkout">
        {cartItems.length
          ? cartItems.map((item) => {
              return (
                <ItemCard
                  data={item}
                  minusCart={minusCart}
                  addCart={addCart}
                  key={item.id}
                  cart={true}
                ></ItemCard>
              );
            })
          : "Empty Cart!"}
      </div>
    </div>
  );
}
