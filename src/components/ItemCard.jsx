export default function ItemCard({ data, minusCart, addCart }) {
  console.log(data, "data");
  return (
    <div className="item">
      <div className="info">
        <img src={data.image} alt={data.description} />
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div>
        <button onClick={() => minusCart()}>-</button>
        <div>{data.price}</div>
        <button onClick={() => addCart(data)}>+</button>
      </div>
    </div>
  );
}
