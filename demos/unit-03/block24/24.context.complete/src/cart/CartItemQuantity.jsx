import { useCart } from "./CartContext";

export default function CartItemQuantity({ item }) {
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
