const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

const numbOfCategories = categoriesItems.length;

console.log(`Number of categories: ${numbOfCategories}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  const categoryElements = category.querySelectorAll("li");

  const numbOfElementsInCategory = categoryElements.length;

  console.log(`Category: ${categoryName}`);

  console.log(`Elements: ${numbOfElementsInCategory}`);
});
