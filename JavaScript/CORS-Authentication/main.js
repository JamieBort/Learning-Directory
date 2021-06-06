fetch(`https://crossorigin.me/https://api.linkedin.com/v1/people/~?format=json`) // NOTE: using the following in the URL of the fetch: https://crossorigin.me/ // NOTE: use ticks rather than signle quotes or double quotes in the URL in order to use the object literal notation '${}'.
    // Data is fetched and we get a promise.
    .then(
      // The promise returns a response from the server.
      function(response) {
        // We process the response accordingly.
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("Here is the data:", data);

          // for each item that comes back create a div:
          for (var i = 0; i < data.results.length; i++) {
            var div = document.createElement("div");
            section.appendChild(div);
            div.innerHTML =
              `<li><img id="image" src=${data.results[i].thumbnail}></li>
              <h2>${data.results[i].title}</h2>
               <li><a href=${data.results[i].href}>${data.results[i].href}</a></li>`
          }

          // var div = document.createElement("div");
          // section.appendChild(div);
          // console.log(data.title);
          // console.log(data.results);
          // console.log(data.results[0]);
          // console.log(data.results[0].title);
          // console.log(data.results[0].href);

        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);

});
