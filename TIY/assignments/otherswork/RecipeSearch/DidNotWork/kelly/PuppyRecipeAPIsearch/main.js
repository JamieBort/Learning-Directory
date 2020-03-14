console.log("Puppies!");

let body = document.querySelector("body");

let pageHeader = document.createElement("header");
let searchBar = document.createElement("form");
let searchBarInput = document.createElement("input");
searchBarInput.setAttribute("type", "search");
searchBarInput.setAttribute("placeholder", "Search");
let submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "search");
let submitButtonName = document.createTextNode("Submit");

let resultRows = document.createElement("div");
let resultList = document.createElement("ul");

let resultItem1 = document.createElement("li");
// resultItem1.setAttribute("class", "listItem1");
let resultItem1Text = document.createTextNode("Title");

let resultItem2 = document.createElement("li");
let resultItem2Text = document.createTextNode("Thumbnail");

let resultItem3 = document.createElement("li");
let resultItem3Text = document.createTextNode("Ingredients");

let resultItem4 = document.createElement("li");
let resultItem4Text = document.createTextNode("Link to href");

let resultItem5 = document.createElement("li");
let resultItem6 = document.createElement("li");
let resultItem7 = document.createElement("li");
let resultItem8 = document.createElement("li");

document.body.appendChild(pageHeader);
document.body.appendChild(searchBar);
searchBar.append(searchBarInput);
searchBar.append(submitButton);
submitButton.appendChild(submitButtonName);

document.body.appendChild(resultList);
resultList.appendChild(resultItem1);
  resultItem1.appendChild(resultItem1Text);
  resultItem1.appendChild(resultItem2Text);
  resultItem1.appendChild(resultItem3Text);
  resultItem1.appendChild(resultItem4Text);

// use the fetch API to allow a user to search for any food related term and you can return a list of results to them. Your task is to display all the results that are returned. For each result, you'll need to specifically show the thumbnail, title and link them to the href.

fetch("https://crossorigin.me/http://www.recipepuppy.com/api/")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status)
        return
      }
      response.json().then(function(data) {
        // console.log(data.results)
        for (let i = 0; i < data.results.length; i++) {
          console.log(data.results[i])
          let grid_tile = document.createElement("div");
          document.body.appendChild(grid_tile);
          grid_tile.innerHTML = `<h2>${data.results[i].title}</h2>
              <li><img id="image" src=${data.results[i].thumbnail}></li>
              <li><a>${data.results[i].href}</a>`
        }


      })
    })
// =================================================
// TODO Results now need to be filtered and styled
