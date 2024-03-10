// Initiate HTML script test
console.log("Yay I'm a working piece of code!")

// Format layout of page
let body = document.querySelector("body");
let header = document.createElement("header");
header.setAttribute("id", "header");
let headerText = document.createTextNode("Find Your Favorite Recipes")

header.appendChild(headerText);
body.appendChild(header);

let input = document.createElement("input");
input.setAttribute("id", "input_bar")
input.setAttribute("placeholder", "Search Recipe Here");
header.appendChild(input);

let button1 = document.createElement("button");
let buttonText = document.createTextNode("Search");
button1.appendChild(buttonText);
header.appendChild(button1);

let button2 = document.createElement("button");
let button2Text = document.createTextNode("Clear");
button2.appendChild(button2Text);
header.appendChild(button2);

let main_content = document.createElement("section");
main_content.setAttribute("id", "main_content");
body.appendChild(main_content);

//Define Fetch function & apply to button functionality

button1.addEventListener('click', function() {
  main_content.innerHTML = "";
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?i=${input.value}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status)
          return
        }
        response.json().then(function(data) {
          console.log(data);
          for (i = 0; i < data.results.length; i++) {

            let grid_tile = document.createElement("div");
            main_content.appendChild(grid_tile);
            grid_tile.innerHTML =
              `<li><img id="image" src=${data.results[i].thumbnail}></li>
              <h2>${data.results[i].title}</h2>
               <li><a href=${data.results[i].href}>${data.results[i].href}</a></li>`
          }
        })
      })
});
