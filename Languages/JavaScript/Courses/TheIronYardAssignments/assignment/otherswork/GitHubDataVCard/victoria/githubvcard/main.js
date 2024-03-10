//api.github.com/users/victoriarainc

// Create a callback to run when the data from
// GitHub is retrieved
function reqListener () {
  let data = JSON.parse(this.responseText);

// I want to use template literals to manipulate the
// DOM and create a tag for each bit of data
  // let name = `${data.name}`;
  // let url = `${data.html_url}`;
  // let email = `${data.email}`;
  // let company = `${data.company}`;
  // let website = `${data.blog}`;
  // let bio = `${data.bio}`;
  // let pic = `${data.avatar_url}`;

  let template = `
  <header id="name">${data.name}</header>
  <section id="content">
    <section id="basics">
      <h2>The Basics</h2>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Github URL: <a href="${data.html_url}">${data.login}</a></li>
        <li>Email: ${data.email}</li>
        <li>Company: ${data.company}</li>
        <li>Website: <a href="${data.blog}">LinkedIn Profile</a></li>
      </ul>
    </section>
    <section id="story">
      <section id="storytxt">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </section>
    <img src="${data.avatar_url}">

    </section

  </section>
  `

  let wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = template;
}

// Get request for API data from GitHub
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/victoriarainc");
req.addEventListener("load", reqListener);
req.send();
