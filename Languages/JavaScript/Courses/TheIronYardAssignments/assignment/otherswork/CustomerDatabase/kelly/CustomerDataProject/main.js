// let wholePage = document.querySelector("body");
// let employeeProfile = document.createElement("div");



for(let i=0; i<customers.results.length; i++){
// capturing the body using querySelector
  let wholePage = document.querySelector("body");
  let employeeProfile = document.createElement("div");

  let employeeDirectory =
    `<img src="${customers.results[i].picture.large}">
    <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>

    <ul>
      <li>${customers.results[i].email}</li>
      <li>${customers.results[i].location.street}</li>
      <li>${customers.results[i].location.city}</li>
      <li>${customers.results[i].location.state}</li>
      <li>${customers.results[i].location.postcode}</li>
      <li>${customers.results[i].phone}</li>
      <li>${customers.results[i].id.value}</li>
    </ul>`;

    employeeProfile.innerHTML = employeeDirectory;
    wholePage.appendChild(employeeProfile);
};
