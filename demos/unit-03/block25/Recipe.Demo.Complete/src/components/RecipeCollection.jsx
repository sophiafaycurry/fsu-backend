import RecipeCard from "./RecipeCard";

export default function RecipeCollection({ recipes }) {
  return (
    <article className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
}
