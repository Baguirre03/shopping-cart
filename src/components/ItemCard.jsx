export default function ItemCard({ data, minusCart, addCart, cart }) {
  return cart ? (
    <div className="item">
      <div className="info cart-item">
        <img src={data.image} alt={data.description} />
        <h4>{data.title}</h4>
        {data.count > 1 && <p>Count: {data.count}</p>}
      </div>
      <div className="item-cart">
        <button onClick={() => minusCart(data)}>-</button>
        <div>${data.price}</div>
        <button onClick={() => addCart(data)}>+</button>
      </div>
    </div>
  ) : (
    <div className="item">
      <div className="info">
        <img src={data.image} alt={data.description} />
        <h4>{data.title}</h4>
      </div>
      <div className="item-cart">
        <button onClick={() => minusCart(data)}>-</button>
        <div>${data.price}</div>
        <button onClick={() => addCart(data)}>+</button>
      </div>
    </div>
  );
}
