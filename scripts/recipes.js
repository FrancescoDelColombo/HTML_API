let currentPage = 0;
const resultsPerPage = 10;

function loadRecipes(page) {
  const offset = page * resultsPerPage;

  fetch('https://dogapi.dog/api/v2/breeds',{
    method: "GET",
  })
  
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("recipes-container");
      const ul = document.createElement("ul");
      container.innerHTML = "";

      data.results.forEach((recipe) => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${recipe.title}</h3>`;
        ul.appendChild(li);
      });

      container.appendChild(ul);
    })
    .catch((error) => console.error("Errore API:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadRecipes(currentPage);

  document.getElementById("next-btn").addEventListener("click", () => {
    currentPage++;
    loadRecipes(currentPage);
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      loadRecipes(currentPage);
    }
  });
});