
// create search button
let search = document.getElementById('button_search')
.addEventListener('click', onSearch);

// introduce search box and content
function onSearch() {
  let content = document.getElementById('content');
  let search_text = document.getElementById('search_box').value;

// grab data from the API
  fetch(
      `https://crossorigin.me/http://www.recipepuppy.com/api/?q=${search_text}`
    )

    // if successful put inside the HTML for each result
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      content.innerHTML = ''
      response.json().then(function(data) {
        data.results.forEach(function(result) {

          // if the result doesn't have an image put in placeholder
          if (result.thumbnail === '') {
            result.thumbnail = "http://via.placeholder.com/150x150";
          }

          // a recipe's div for each result
          let template = `
          <article class="recipe">
            <a href="${result.href}">
            <img src="${result.thumbnail}">
            <span>${result.title}</span>
            </a>
          </article>
          `;
          content.innerHTML += template;
        });
      });
    })

    // log this in case the data can not be received
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}
