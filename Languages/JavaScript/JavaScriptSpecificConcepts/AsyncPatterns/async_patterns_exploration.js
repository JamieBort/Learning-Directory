// API call

// Resources
{
  // [public api sites](https://www.google.com/search?q=public+api+sites&sca_esv=1ff02947d4eaa456&ei=0vznZ_OtCt2s5NoPhpfRmAc&ved=0ahUKEwjz3vfLua-MAxVdFlkFHYZLFHMQ4dUDCBA&uact=5&oq=public+api+sites&gs_lp=Egxnd3Mtd2l6LXNlcnAiEHB1YmxpYyBhcGkgc2l0ZXMyBBAAGB4yBRAAGO8FMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIESMgTULAFWLYMcAJ4AZABAJgBZaABtQSqAQM1LjG4AQPIAQD4AQGYAgegAvgDwgIKEAAYsAMY1gQYR8ICBhAAGAcYHsICCBAAGAcYCBgemAMAiAYBkAYIkgcDNS4yoAemGQ&sclient=gws-wiz-serp) internet search
  // https://github.com/public-api-lists/public-api-lists
  // https://jsoning.com/api/
}

// Spin up an Express server.
const express = require("express");
// Create an Express application. express() is "a top-level function exported by the express module"
const app = express();
// If PORT is not assigned a value in the .env file(s), port 3001 will be used.
const port = process.env.PORT || 3001;
// The endpoint we're making a GraphQL api call against.
const URL = `https://api.jsoning.com/mock/public/`;
const products = `products`;

// const restFetch2 = function () {
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(fetch(URL + products)), 5000);
//     // resolve(fetch(URL + products));
//   });

//   promise
//     .then((res) => res.json())
//     .then((body) => {
//       console.log("body:", body);
//     })
//     .catch((error) => {
//       // Catching other errors.
//       console.error("error:", error);
//     })
//     .finally(() => {
//       console.log("restFetch2: This code will always run...!");
//     });
// };
// app.get("/restFetch2", restFetch2);

// Asynchronous function. Because there is a delay in getting a response back from the server(s).

const restFetch = async function (req, res) {
  // An await method. Because we're returning a promise.
  const response = await fetch(URL + products)
    // The json() method returns a promise; which resolves by parsing the body text as JSON.
    .then((res) => res.json())
    .then((body) => {
      console.log("body:", body);
    })
    .catch((error) => {
      // Catching other errors.
      console.error("error:", error);
    })
    .finally(() => {
      console.log("restFetch: This code will always run...!");
    });

  // Sending the data back to the front end.
  // Sending the object that is received from the fetch.
  res.json(response);
  // console.log("response:", response);
};

// For requests to the root URL (/) or route, the app responds with the object that is received from the fetch.
// For every other path, it will respond with a 404 Not Found.
// app.get for GET requests.
app.get("/", restFetch);

// This app starts a server and listens on port "port" for connections.
// Receives incoming TCP connections.
const server = app.listen(port, () => console.log(`Back end listening on port ${port}!`));

// module.exports = restFetch;
