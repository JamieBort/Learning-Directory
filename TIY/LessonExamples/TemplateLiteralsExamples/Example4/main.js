const container = document.querySelector('.container');
const people = ["Sam", "Jessica", "Barker", "Molly", "Stacy", "Jimmy"];
const title = "Speed Dial List";

let template;

// Set our title
template = `<h1>${title}</h1>`;

// Open up our UL
template += "<ul>";

// Build our list of people
people.forEach( function (person) {
  template += `<li>${person}</li>`;
});

// Close our UL
template += "</ul>";

// Append to our page
container.innerHTML = template;
