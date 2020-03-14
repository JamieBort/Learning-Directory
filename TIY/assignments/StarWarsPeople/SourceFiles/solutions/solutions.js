// 1. First, find our UL Container
let container = document.querySelector('.characters');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'http://swapi.co/api/people/');
request.send();

// Our display function
function displayCharacters () {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let list = '';

  data.results.forEach( function (person) {
    list += `<li>${person.name}</li>`;
  });

  container.innerHTML = list;
}