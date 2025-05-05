import { useState } from "react";
import "./App.css";
import Dogs from "./components/Dogs";
import Treats from "./components/Treats";
import DOGS from "./data";

function App() {
  const [treats, setTreats] = useState([]);

  /**
   *  Try to find if a dog already has treats.
   *  If true, then create a new copy of treats by mapping over it and
   *  increasing the quantity of treats for the individual dog by 1.
   *  If false, then create a new treat item with a quantity of 1.
   *  A treat item is just a dog with an additional quantity property.
   */

  const addTreats = (dog) => {
    const treatExists = treats.find((i) => i.id === dog.id);
    if (treatExists) {
      setTreats(
        treats.map((treat) =>
          treat.id === dog.id
            ? { ...treat, quantity: treat.quantity + 1 }
            : treat
        )
      );
    } else {
      const item = { ...dog, quantity: 1 };
      setTreats([...treats, item]);
    }
  };

  /**
   * First, use `map` to decrease the quantity of the treat to remove by 1.
   * Then, keep only the items that have a quantity greater than 0.
   */
  const removeTreats = (treatToRemove) => {
    setTreats(
      treats
        .map((treat) =>
          treat.id === treatToRemove.id
            ? { ...treat, quantity: treat.quantity - 1 }
            : treat
        )
        .filter((treat) => treat.quantity > 0)
    );
  };

  return (
    <>
      <Dogs dogs={DOGS} addTreats={addTreats} />
      <Treats
        treats={treats}
        addTreats={addTreats}
        removeTreats={removeTreats}
      />
    </>
  );
}

export default App;
