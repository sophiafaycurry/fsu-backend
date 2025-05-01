import { useState } from "react";
import "./App.css";
import Dogs from "./components/Dogs";

function App() {
  const [favDog, setFavDog] = useState(null);
  return (
    <>
      <h1>Props Demo</h1>
      {favDog && <h3>{favDog} is the best dog!</h3>}

      <Dogs />
      <Dogs />
      <Dogs />
    </>
  );
}

export default App;
