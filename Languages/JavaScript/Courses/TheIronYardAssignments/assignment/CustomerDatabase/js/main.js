// console.log(customers.info);
// console.log(customers.info.seed);
// console.log(customers.info.results);
// console.log(customers.info.page);
// console.log(customers.info.version);
//
// console.log(customers.results);
// console.log(customers.results[0]);
// console.log(customers.results[0].gender);
// console.log(customers.results[0].name);
// console.log(customers.results[0].name.title);
// console.log(customers.results[0].name.first);
// console.log(customers.results[0].name.last);
// console.log(customers.results[0].location);
// console.log(customers.results[0].phone);
// console.log(customers.results[0].id.value);

let body = document.querySelector("body");
let title = document.createElement("h1");
title.innerHTML = "INTERNAL COMPANY DIRECTORY";
body.appendChild(title);

for (var i = 0; i < customers.results.length; i++) {

  let div = document.querySelector("body");
  let employeeProfile = document.createElement("div");
  let employeeInfo = `<img src="${customers.results[i].picture.large}">
<h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
<ul>${customers.results[i].email}</ul>
<ul>${customers.results[i].location.street}</ul>
<ul>${customers.results[i].location.city}</ul>
<ul>${customers.results[i].location.state}</ul>
<ul>${customers.results[i].location.postcode}</ul>
<ul>${customers.results[i].phone}</ul>
<ul class="social" >${customers.results[i].id.value}</ul>`

  employeeProfile.innerHTML = employeeInfo;
  div.appendChild(employeeProfile);
};
