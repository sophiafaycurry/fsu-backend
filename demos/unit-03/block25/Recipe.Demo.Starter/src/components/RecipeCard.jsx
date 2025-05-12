export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe">
      <h2>
        {recipe.name} #{recipe.id}
      </h2>
      <figure>
        <img alt={recipe.name} src={recipe.imageUrl} />
      </figure>
      <p>{recipe.description}</p>
    </article>
  );
}
