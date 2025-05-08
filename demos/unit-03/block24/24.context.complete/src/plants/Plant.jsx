import { useCart } from "../cart/CartContext";

export default function Plant({ plant }) {
  const { addToCart } = useCart();
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
