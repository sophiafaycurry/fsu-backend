import CartItem from "./CartItem";
import { useCart } from "./CartContext";

import "./cart.css";

export default function Cart() {
  const { cart } = useCart();

  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
