export default function ItemCard({ data, minusCart, addCart }) {
  return (
    <div className="item">
      <div className="info">
        <img src={data.image} alt={data.description} />
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <p>{data.count > 1 && data.count}</p>
      </div>
      <div>
        <button onClick={() => minusCart(data)}>-</button>
        <div>{data.price}</div>
        <button onClick={() => addCart(data)}>+</button>
      </div>
    </div>
  );
}
