const COHORT = "2502-FTB-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/recipes`;

const state = {
  recipes: [],
};

const recipesList = document.querySelector("#recipes");

const addRecipeForm = document.querySelector("#addRecipe");
addRecipeForm.addEventListener("submit", addRecipe);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getRecipes();
  renderRecipes();
}
render();

/**
 * Update state with recipes from API
 */
async function getRecipes() {
  // TODO
}

/**
 * Handle form submission for adding a recipe
 * @param {Event} event
 */
async function addRecipe(event) {
  // This function is essentially just a wrapper around `createRecipe`,
  event.preventDefault();

  await createRecipe(
    addRecipeForm.title.value,
    addRecipeForm.imageUrl.value,
    addRecipeForm.instructions.value
  );
}

/**
 * Ask API to create a new recipe and rerender
 * @param {string} name name of recipe
 * @param {string} imageUrl url of recipe image
 * @param {string} description description of the recipe
 */
async function createRecipe(name, imageUrl, description) {
  // TODO
}

/**
 * Ask API to update an existing recipe and rerender
 * NOTE: This is not currently used in the app, but it's here for reference.
 * @param {number} id id of the recipe to update
 * @param {string} name new name of recipe
 * @param {string} imageUrl new url of recipe image
 * @param {string} description new description for recipe
 */
async function updateRecipe(id, name, imageUrl, description) {
  // This is almost identical to `createRecipe` but uses the PUT method
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, imageUrl, description }),
    });
    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    render();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Ask API to delete a recipe and rerender
 * @param {number} id id of recipe to delete
 */
async function deleteRecipe(id) {
  // TODO
}

/**
 * Render recipes from state
 */
function renderRecipes() {
  if (!state.recipes.length) {
    recipesList.innerHTML =
      /*html*/
      `<li>No recipes found.</li>`;
    return;
  }
  // This uses a combination of `createElement` and `innerHTML`;
  // You can use either one, but `createElement` is
  // more flexible and `innerHTML` is more concise.
  const recipeCards = state.recipes.map((recipe) => {
    const recipeCard = document.createElement("li");
    recipeCard.classList.add("recipe");
    recipeCard.innerHTML = /*html*/ `
      <h2>${recipe.name}</h2>
      <img src="${recipe.imageUrl}" alt="${recipe.name}" />
      <p>${recipe.description}</p>
    `;

    // We use createElement because we need to attach an event listener.
    // If we used `innerHTML`, we'd have to use `querySelector` as well.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Recipe";
    recipeCard.append(deleteButton);

    // Access the correct recipe id
    deleteButton.addEventListener("click", () => deleteRecipe(recipe.id));

    return recipeCard;
  });
  recipesList.replaceChildren(...recipeCards);
}
