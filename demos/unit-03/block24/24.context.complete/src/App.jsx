import PLANTS from "./data";

import Cart from "./cart/Cart";
import Plants from "./plants/Plants";

/** Users can add plants to a cart and remove them. */
export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} />
        <Cart />
      </main>
    </>
  );
}
