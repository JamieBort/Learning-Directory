// Example 1:

let firstName = "Brenda";
let timeOfDay = "morning";

let sentence = `Good ${timeOfDay} ${firstName}.`;

console.log(sentence);

// Example 2:

function blogPost (title, date, content) {

  let post = `
    <article>
      <h2>${title}</h2>
      <span class="date">${date}</span>
      <div class="post">
        ${content}
      </div>
    </article>
  `;

  console.log(post);
}

blogPost("Intro to Hang Gliding", "April 1st", "Lorem ipsum dolor...");

// Example 3:

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

// Example 4:

let born = 1985;

console.log(`I was born in ${born}, which means I am ${2017 - born} years old.`);
