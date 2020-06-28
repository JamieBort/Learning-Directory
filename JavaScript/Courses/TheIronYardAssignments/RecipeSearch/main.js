// Selecting the body tag.
var body = document.querySelector("body");

// Creating the elements
var divSearch = document.createElement("div");
var title = document.createElement("h3");
var searchField = document.createElement("input");
var searchButton = document.createElement("button");
var clearButton = document.createElement("button");

var divResponse = document.createElement("div");
// var paragraph = document.createElement("p");

// Appending the elements
divSearch.appendChild(title);
body.appendChild(divSearch);
divSearch.appendChild(searchField);
divSearch.appendChild(searchButton);
divSearch.appendChild(clearButton);

body.appendChild(divResponse);
// divResponse.appendChild(paragraph);

// Add attributes
divSearch.setAttribute("id", "divSearchID");
searchField.setAttribute("id", "searchFieldID");
searchButton.setAttribute("onClick", "searchFunction()");
clearButton.setAttribute("onClick", "clearFunction()");

divResponse.setAttribute("id", "divResponseID");

// Add text.
title.innerHTML = "Recipe Search";
searchButton.innerHTML = "Search";
clearButton.innerHTML = "Clear";

// Functions
function searchFunction(){
  console.log("Search was performed.");
  console.log(document.getElementById('searchFieldID').value);
  usersearch = document.getElementById('searchFieldID').value;

  // fetch("http://www.google.com")
  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + usersearch)
  .then(
    function(response){
      console.log("The response status is: ", response.status);
      response.json().then(function(data) {
        console.log(data.results);
        var i = data.results.length-1;
        console.log(data.results[i]);
        console.log(data.results[i].title);
        console.log(data.results[i].thumbnail);
        console.log(typeof(data.results[i]));

        // Creating the elements
        var h2 = document.createElement("h2");
        var paragraph = document.createElement("p");

        // Appending the elements
        divResponse.appendChild(h2);
        divResponse.appendChild(paragraph);

        // Add text.
        h2.innerHTML = i;
        paragraph.innerHTML = data.results[i].title;

      });
    }
  )
  .catch(
    function(err){
      console.log("The fetch error: ", err);
    }
  );
}

function clearFunction(){console.log("Clear was performed.");}