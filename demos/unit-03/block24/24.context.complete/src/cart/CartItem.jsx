import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({ item }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartItemQuantity item={item} />
    </li>
  );
}
