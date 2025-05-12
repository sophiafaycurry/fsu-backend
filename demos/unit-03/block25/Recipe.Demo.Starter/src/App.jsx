import { useEffect, useState } from "react";

import RecipeCollection from "./components/RecipeCollection";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2502-PT";
const RESOURCE = "/recipes";
const API = BASE_URL + COHORT + RESOURCE;

export default function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Pizza",
      description: "A delicious pizza",
      imageUrl: "https://loremflickr.com/320/240/food,pizza",
    },
  ]);

  // An event handler runs a function when an event happens.
  // useEffect runs the function when any of its dependencies rerender or change.
  // NO DEPENDENCY = run the function any time the component rerenders for any reason
  // [] = empty array = run the function ONCE on the initial render
  // [foo, bar] = run the function any time any of the STATE variables change
  // NEVER use the setter of a dependency in the useEffect because you will get
  // caught in an infinite loop
  // The setup function CANNOT be async, so if you want to do async stuff,
  // you have to define the async function either inside or outside of it.
  useEffect(() => {}, []);

  return (
    <>
      <h1>Recipes</h1>
      <RecipeCollection recipes={recipes} />
    </>
  );
}
