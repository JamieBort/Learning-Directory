let recipeBox = document.querySelector(".recipeContainer")
let recipes = document.querySelector(".recipeList")
let content = document.querySelector("#wrapper");
let button = document.querySelector("#button");
let search = document.querySelector("#search");

// API data fetched here

button.addEventListener("click", function(){
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?i=${search.value}`)

  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
  })

  .then(function(data) {
    let results = data.results;
    for (var i = 0; i < results.length; i++) {
      recipes.innerHTML += `
      <div class="imageContainer">
    <img src=${results[i].thumbnail}>
    <a href=${results[i].href}><h2 class="title">${results[i].title}</h2></a>
    </div>
    `
    }

  })



// If there is an error with the API, this is the error message
  .catch(function(error) {
    console.error(error.message);
  });
})
