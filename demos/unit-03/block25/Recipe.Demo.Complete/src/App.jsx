import useQuery from "./useQuery";

import RecipeCollection from "./components/RecipeCollection";

export default function App() {
  const { data: recipes, loading, error } = useQuery("/recipes");

  if (loading) return <p>Loading...</p>;
  if (error || !recipes) return <p>{error}</p>;

  return (
    <>
      <h1>Recipes</h1>
      <RecipeCollection recipes={recipes} />
    </>
  );
}
