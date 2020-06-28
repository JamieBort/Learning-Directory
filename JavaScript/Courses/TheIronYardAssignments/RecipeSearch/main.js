// Selecting the body tag.
var body = document.querySelector("body");

// Creating the elements
var div = document.createElement("div");
var title = document.createElement("h3");
var searchField = document.createElement("input");
var searchButton = document.createElement("button");
var clearButton = document.createElement("button");

// Add text.
title.innerHTML = "Recipe Search";
searchButton.innerHTML = "Search";
clearButton.innerHTML = "Clear";

// Appending the elements
div.appendChild(title);
body.appendChild(div);
div.appendChild(searchField);
div.appendChild(searchButton);
div.appendChild(clearButton);

// Add attributes
searchButton.setAttribute("onClick", "searchFunction()");
clearButton.setAttribute("onClick", "clearFunction()");

// Functions
function searchFunction(){console.log("Search was performed.")};
function clearFunction(){console.log("Clear was performed.")};