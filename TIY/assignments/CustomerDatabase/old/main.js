// console.log(customers);

for (var i = 0; i < customers.results.length; i++) {
  // console.log(customers);
  console.log(customers.results[i].name.first);


  // NOTE: no need to create <link rel="stylesheet" href="style.css">
  // create variables
  // create div's, img's, and p's.
  // create divElement1

  // capturing the body using querySelector
  let body = document.querySelector("Body");

  let directory = `
  <img src="${customers.results[i].picture.large}">
<h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
<p>${customers.results[i].email}</p>
<p>${customers.results[i].location.street}</p>
<p>${customers.results[i].location.city}</p>
<p>${customers.results[i].location.state}</p>
<p>${customers.results[i].location.postcode}</p> <p>${customers.results[i].phone}</p>
<p>${customers.results[i].cell}</p>`

  // creating div element
  let div = document.createElement("div");

  // append div onto body
  body.appendChild(div);

  // NOTE: the file didn't render when 'div.innerHTML = directory;' was move up in the file 10 +/- lines. Why?
  // insert template literals into div
  div.innerHTML = directory;
}
