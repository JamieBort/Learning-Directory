// Selecting the body tag.
var body = document.querySelector("body");

// Creating the elements
var divSearch = document.createElement("div");
var title = document.createElement("h3");
var searchField = document.createElement("input");
var searchButton = document.createElement("button");
var clearButton = document.createElement("button");

var container = document.createElement("div");
// var paragraph = document.createElement("p");

// Appending the elements
divSearch.appendChild(title);
body.appendChild(divSearch);
divSearch.appendChild(searchField);
divSearch.appendChild(searchButton);
divSearch.appendChild(clearButton);

body.appendChild(container);
// container.appendChild(paragraph);

// Add attributes
// TODO: add attributes so that the site conforms to a11y.
divSearch.setAttribute("id", "divSearchID");
searchField.setAttribute("id", "searchFieldID");
// searchField.setAttribute("value", "Name");
searchField.setAttribute("onfocus", "this.value=''");
searchButton.setAttribute("onClick", "searchFunction()");
clearButton.setAttribute("onClick", "clearFunction()");
// clearButton.setAttribute("onClick", "clearField()");


container.setAttribute("id", "containerID");

// Add text.
title.innerHTML = "Recipe Search";
searchButton.innerHTML = "Search";
clearButton.innerHTML = "Clear";

// Functions
function searchFunction(){
  console.log(document.getElementById('searchFieldID').value);
  searchPhrase = document.getElementById('searchFieldID').value;

  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + searchPhrase)
  .then(
    function(response){
      console.log("The response status is: ", response.status);
      response.json().then(function(data) {
        console.log(data.results);

        for(var i = 0; i<data.results.length; i++){

        // Creating the elements
        var divResponse = document.createElement("div");
        var h3 = document.createElement("h3");
        var paragraph = document.createElement("p");
        var image = document.createElement("img");

        // Appending the elements
        container.appendChild(divResponse);
        divResponse.appendChild(h3);
        divResponse.appendChild(paragraph);
        divResponse.appendChild(image);

        // Add attributes
        // TODO: add attributes so that the site conforms to a11y.
        // TODO: have a default image for when one is not available.
        image.setAttribute("src", data.results[i].thumbnail);

        // Add text.
        h3.innerHTML = data.results[i].title;
        paragraph.innerHTML = data.results[i].ingredients;
        }
      });
    }
  )
  .catch(
    function(err){
      console.log("The fetch error: ", err);
    }
  );
}

function clearFunction(input){
  console.log("Clear was performed.");
  // TODO: creat this functionality.
  // input.value='';
  this.input.value='';
  
}

function clearField(input) {
  console.log("Clear was performed.");
  // searchField.setAttribute("value", "");
  input.value='';

  console.log("Clear was performed again.");
  // if(input.value == val)
     input.value="";
}