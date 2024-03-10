// 1. First, find our UL Container
let container = document.querySelector('.characters');
// let container2 = document.querySelector('.characters2');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'http://swapi.co/api/people/'); // A list of people.
// request.open('GET', 'http://swapi.co/api/vehicles/'); // A list of vehicles rather than people.
request.send();

// 3. Our display function
function displayCharacters () {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let list = '';
  // let list2 = [];

// The ${person.name} is the template literal.
  data.results.forEach( function (person) {

    list += `<li>${person.name}</li>`; // list += `<li>${person.name}`; also works
    console.log(person.name);
    // console.log(person.mass);
    console.log(person);
    // console.log(this.responseText);
    // list2 += `<li>${person}</li>`
    // console.log(films);
  });

  container.innerHTML = list;
  // container2.innerHTML = list2;
}
