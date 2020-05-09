let searchButton = document.getElementById('search').addEventListener('click', onSearch);

function onSearch() {
  console.log('click');
  let main = document.querySelector('main');
  let searchBox = document.getElementById('searchBox').value;

  main.innerHTML = `<blockquote>This loading process may take a moment to return! Sorry for the wait!  But don't fret, I'm trying to find you something related to ${searchBox}!</blockquote>`;

  fetch(
      `https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchBox}`
    )
    .then(function(res) {
      if (res.status !== 200) {
        console.log(res.status);
        return;
      }
      main.innerHTML = '';
      res.json().then(function(data) {
        data.results.forEach(function(payload) {

          if (payload.thumbnail === '') {
            payload.thumbnail = "http://via.placeholder.com/150x115";
          }

          let divContent = `
          <div class="recipes">
            <a href="${payload.href}">
            <img src="${payload.thumbnail}">
            <h3>${payload.title}</h3>
            </a>
          </div>
          `;
          main.innerHTML += divContent;
        });
      });
    });
}
console.log("JS Loaded");
