export function Product({ title, description, price }) {
  return (
    <div>
      <h1>Company is : {title}</h1>
      <p>{description}</p>
      <p className="price">
        <strong>Price:</strong> {price}
      </p>
    </div>
  );
}
